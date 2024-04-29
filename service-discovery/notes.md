### Commands

general

`ifconfig`
`mkdir /etc/consul.d`
`mkdir /var/lib/consul`

`apk -U add bind-tools`
`dig @localhost -p 8600 SRV`
`dig @localhost -p 8600 nginx.service.consul`

consul

`consul join <ip>`

`consul members`

`consul reload`

`consul catalog nodes -service nginx`

`consul agent -server -bootstrap-expect=3 -node=consulserver03 -bind=172.25.0.3 -data-dir=/var/lib/consul -config-dir=/etc/consul.d`

`consul agent -bind=172.25.0.6 -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=172.25.0.4`
