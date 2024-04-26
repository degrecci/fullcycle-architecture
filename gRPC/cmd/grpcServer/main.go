package main

import (
	"database/sql"
	"net"

	"github.com/devfullcycle/14-gRPC/internal/database"
	"github.com/devfullcycle/14-gRPC/internal/pb"
	"github.com/devfullcycle/14-gRPC/internal/service"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	// Init DB
	db, err := sql.Open("sqlite3", "./db.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Init Category Service
	categoryDb := database.NewCategory(db)
	categoryService := service.NewCategoryService(*categoryDb)

	// Init gRPC Server
	grpcServer := grpc.NewServer()

	// Register services
	pb.RegisterCategoryServiceServer(grpcServer, categoryService)

	// Register reflection service on gRPC server.
	reflection.Register(grpcServer)

	// Listen gRPC Server
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		panic(err)
	}

	// Serve gRPC Server
	if err := grpcServer.Serve(lis); err != nil {
		panic(err)
	}
}
