# vending
campaign monitor code test

Testing:

1. curl -i -X PUT -H "Content-Type: application/json" -d '{"coin":1}' http://localhost:3000/

    A. add a coin - response: 

    HTTP/1.1 204 No Content
    X-Powered-By: Express
    X-Coins: 1
    ETag: W/"2d-wOMed0Ly/bM72Aff0kjnD5tXxcg"
    Date: Fri, 15 Feb 2019 17:25:03 GMT
    Connection: keep-alive


2. curl -i -X PUT  http://localhost:3000/inventory/3

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

