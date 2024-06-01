import Product from "../../../../domain/product/entity/product";
import ProductModel from "./product.model";
import ProductRepository from "./product.repository";
import { Sequelize } from "sequelize-typescript";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "product name", 100);

    await productRepository.create(product);

    const productFromDb = await ProductModel.findOne({ where: { id: "1" } });

    expect(productFromDb.toJSON()).toStrictEqual({
      id: "1",
      name: "product name",
      price: 100,
    });
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "product name", 100);

    await productRepository.create(product);

    product.changeName("new product name");
    product.changePrice(200);

    await productRepository.update(product);

    const productFromDb = await ProductModel.findOne({ where: { id: "1" } });

    expect(productFromDb.toJSON()).toStrictEqual({
      id: "1",
      name: "new product name",
      price: 200,
    });
  });

  it("should find a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "product name", 100);

    await productRepository.create(product);

    const productFromDb = await ProductModel.findOne({ where: { id: "1" } });
    const productFound = await productRepository.find("1");

    expect(productFromDb.toJSON()).toStrictEqual({
      id: productFound.id,
      name: productFound.name,
      price: productFound.price,
    });
  });

  it("should find all products", async () => {
    const productRepository = new ProductRepository();
    const product1 = new Product("1", "product name 1", 100);
    const product2 = new Product("2", "product name 2", 200);

    await productRepository.create(product1);
    await productRepository.create(product2);

    const productsFound = await productRepository.findAll();

    expect(productsFound).toEqual([product1, product2]);
  });
});
