# vending
campaign monitor code test

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


4. curl -i -X PUT  http://localhost:3000/inventory/3

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
    Connection: keep-alive

