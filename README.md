# vending
campaign monitor code test

Testing:

1. curl -i -X PUT  http://localhost:3000/inventory/3

A. //Not enough money - response:
HTTP/1.1 403 Forbidden
X-Powered-By: Express
X-Coins: 2
Content-Type: application/json; charset=utf-8
Content-Length: 127
ETag: W/"8c-Q+SJP7O74uI8DTAnM3vHSAunBQs"
Date: Thu, 14 Feb 2019 03:46:07 GMT
Connection: keep-alive
{"status_message":"Put/Purchase Product by ID","data":[{"name":"V8","id":3,"code":"A3","quantity":5,"price":50,"quarters":10}]}

B. Out of stock - response:
HTTP/1.1 404 Not Found
X-Powered-By: Express
X-Coins: 2
Content-Type: application/json; charset=utf-8
Content-Length: 127
ETag: W/"8c-Q+SJP7O74uI8DTAnM3vHSAunBQs"
Date: Thu, 14 Feb 2019 03:46:07 GMT
Connection: keep-alive
{"status_message":"Put/Purchase Product by ID","data":[{"name":"V8","id":3,"code":"A3","quantity":5,"price":50,"quarters":10}]}
