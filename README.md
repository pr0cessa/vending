# vending
Code challenge

Testing:

1. curl -i -X GET  http://localhost:3000/inventory/3

    A. get product/quantity By ID

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 154
    ETag: W/"9a-j9CSLoY6qFpgWXpjz1zbss7cjBM"
    Date: Fri, 15 Feb 2019 17:46:33 GMT
    Connection: keep-alive
    {"status":200,"status_message":"Success Fetching Inventory Product by ID","data":[{"name":"V8","id":3,"code":"A3","quantity":5,"price":50,"quarters":10}]}


2. curl -i -X PUT -H "Content-Type: application/json" -d '{"coin":1}' http://localhost:3000/

    A. add a coin - response: 

    HTTP/1.1 204 No Content
    X-Powered-By: Express
    X-Coins: 1
    ETag: W/"2d-wOMed0Ly/bM72Aff0kjnD5tXxcg"
    Date: Fri, 15 Feb 2019 17:25:03 GMT
    Connection: keep-alive

3. curl -i -X DELETE  http://localhost:3000/

    A. Return coins - response:

    HTTP/1.1 204 No Content
    X-Powered-By: Express
    X-Coins: 1
    ETag: W/"2e-uryznfjicgQIJP3Untu+L1E/R90"
    Date: Fri, 15 Feb 2019 17:53:54 GMT
    Connection: keep-alive

4. curl -i -X GET  http://localhost:3000/inventory

    A. get all product quantities

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 300
    ETag: W/"12c-Fo9rIa4t/12mSEaW0gO18FWz7Vg"
    Date: Fri, 15 Feb 2019 17:57:18 GMT
    Connection: keep-alive
    {"status":200,"status_message":"Success Listing Inventory","data":[{"name":"Crystal Pepsi","id":1,"code":"A1","quantity":5,"price":50,"quarters":10},{"name":"SmartWater","code":"A2","id":2,"quantity":5,"price":50,"quarters":10},{"name":"V8","id":3,"code":"A3","quantity":5,"price":50,"quarters":10}]}


5. curl -i -X PUT  http://localhost:3000/inventory/3

    A. Not enough money - response:

    HTTP/1.1 403 Forbidden
    X-Powered-By: Express
    X-Coins: 2
    Content-Type: application/json; charset=utf-8
    Content-Length: 69
    ETag: W/"45-aI0Et8MAVtrt19Us+2OrvaIUgEo"
    Date: Fri, 15 Feb 2019 17:03:39 GMT
    Connection: keep-alive
    {"status_message":"Put/Purchase Product by ID","data":{"quantity":0}}


    B. Out of stock - response:

    HTTP/1.1 404 Not Found
    X-Powered-By: Express
    X-Coins: 2
    ETag: W/"8c-Q+SJP7O74uI8DTAnM3vHSAunBQs"
    Date: Thu, 14 Feb 2019 03:46:07 GMT
    Connection: keep-alive​
80
    C. Successful purchase - response:
81
​
82
    HTTP/1.1 200 OK
83
    X-Powered-By: Express
84
    X-Inventory-Remaning: 4
85
    X-Coins: 0
86
    Content-Type: application/json; charset=utf-8
87
    Content-Length: 58
88
    ETag: W/"3a-vTpgDMHkCdDn+T/nP2UBxduDUp0"
89
    Date: Fri, 15 Feb 2019 18:01:34 GMT
90
    Connection: keep-alive
91
    {"status_message":"inventory PUT request by ID","data":{}}

    C. Successful purchase - response:

    HTTP/1.1 200 OK
    X-Powered-By: Express
    X-Inventory-Remaning: 4
    X-Coins: 0
    Content-Type: application/json; charset=utf-8
    Content-Length: 58
    ETag: W/"3a-vTpgDMHkCdDn+T/nP2UBxduDUp0"
    Date: Fri, 15 Feb 2019 18:01:34 GMT
    Connection: keep-alive
    {"status_message":"inventory PUT request by ID","data":{}}
