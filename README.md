<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" height="100px" width="150px">

## CRUD app for Products

- A simple CRUD operation APIs defined for model `Product`

- Using Nodejs, ExpressJs and Mongoose

### Run dev

- `npm run dev`


### Run prod

- `node server.js`


-----------

### APIs

- Response codes used are: `200 OK, 404 NOT FOUND, 500 INTERNAL SERVER ERROR`

#### Nudge server

- `GET /`

- Sample Request: `http://localhost:3000/`
- Response: `Hello`

-----------

#### Get single product detail

- `GET /products/<id>`

- Sample Request:

```
GET http://localhost:3000/products/6447ab99bfe33111831d5880
```

- Sample Response

```
{
    "name": "brush",
    "quantity": 2,
    "price": 50,
    "image": "IMAGE_LINK",
    "_id": "6447ab99bfe33111831d5880",
    "createdAt": "2023-04-25T10:29:45.566Z",
    "updatedAt": "2023-04-25T10:29:45.566Z",
    "__v": 0
}
```


---------

#### Get all products list

- `GET /products`

- Sample Request

```
GET http://localhost:3000/products/
```

- Sample Response

```
[
  {
    "name": "brush",
    "quantity": 2,
    "price": 50,
    "image": "IMAGE_LINK",
    "_id": "6447ab99bfe33111831d5880",
    "createdAt": "2023-04-25T10:29:45.566Z",
    "updatedAt": "2023-04-25T10:29:45.566Z",
    "__v": 0
},
{
    "name": "brrom",
    "quantity": 2,
    "price": 50,
    "image": "IMAGE_LINK",
    "_id": "6447ab99bfe33111831d5880",
    "createdAt": "2023-04-25T10:29:45.566Z",
    "updatedAt": "2023-04-25T10:29:45.566Z",
    "__v": 0
}
]
```

----------

#### Add new product

- `POST /products`

- Sample Request

```
POST http://localhost:3000/products/

JSON payload
{
    "name" : "brush",
    "quantity": 2,
    "price" : 50,
    "image" : "IMAGE_LINK"
}
```

- Sample Response:

```
{
    "name": "brush",
    "quantity": 2,
    "price": 50,
    "image": "IMAGE_LINK",
    "_id": "6447ab99bfe33111831d5880",
    "createdAt": "2023-04-25T10:29:45.566Z",
    "updatedAt": "2023-04-25T10:29:45.566Z",
    "__v": 0
}
```

---------------

#### Update Product

- `PUT /products/<id>`

- Sample Request:

```
PUT http://localhost:3000/products/6447ab99bfe33111831d5880

JSON payload
{
    "name" : "brush",
    "quantity": 2,
    "price" : 50,
    "image" : "IMAGE_LINK"
}
```

- Sample Response

```
{
    "name": "brush",
    "quantity": 2,
    "price": 50,
    "image": "IMAGE_LINK",
    "_id": "6447ab99bfe33111831d5880",
    "createdAt": "2023-04-25T10:29:45.566Z",
    "updatedAt": "2023-04-25T10:29:45.566Z",
    "__v": 0
}
```

-----------


#### Delete a Product

- `DELETE /products`

- Sample Request:

```
DELETE http://localhost:3000/products/6447ab99bfe33111831d5880
```

- Sample Response:

```
{
    "name": "brush",
    "quantity": 2,
    "price": 50,
    "image": "IMAGE_LINK",
    "_id": "6447ab99bfe33111831d5880",
    "createdAt": "2023-04-25T10:29:45.566Z",
    "updatedAt": "2023-04-25T10:29:45.566Z",
    "__v": 0
}
```
