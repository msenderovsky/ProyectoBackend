# Proyecto completo de backend

El proyecto final se basa en crear y mantener un servidor y base de datos para el uso por parte de un e-commerce, con registro de usuarios, sesiones y chat.
Este proyecto consta de las siguientes librerias de dependencias:

- Node.js
- MongoDB
- Passport JWT
- Mongoose
- Bcrypt
- Websocket
- Dotenv
- Nodemailer

## Instalación de Dependencias
```
npm i {dependencia}
```
## Ejecución del proyecto

Para correrlo se usa el siguiente comando en la terminal:
```
node index.js
```
## Variables de Entorno

Se usaron las siguientes variables de entorno

 - DB= Clave de mongo atlas
 - SECRET=uso para el hasheo de contraseña
 - PASS= Contraseña de la autorización de gmail
 - MIMAIL= Mail que envia información de un nuevo registro de usuario y las órdenes de compra
 - MIMAIL2= Email que recibe la información de un nuevo registro de usuario y las órdenes de compra
 
 ## Endpoints
 
### /producto
#### GET: "/" Trae todos los productos
```
productos/
 ```
#### GET: "/:productID" Traer un producto por su ID
```
productos/:productID
```
#### GET: "/categoria/:categoria" Retorna los productos de la categoría pedida
```
productos/categoria/:categoria
```
#### POST: "/" Agrega un producto a la base de datos
```
productos/
```
#### DELETE: "/:productID" Elimina un producto de la base de datos por el ID pasado
```
productos/:productID
```
#### DELETE: "/delete/all" Elimina todos los productos de la base de datos
```
productos/delete/all
```
#### PUT "/:productID" Actualiza los productos por su ID
```
productos/:productID
```
 
 
### /carrito
#### GET: "/" Trae todos los carritos
```
/carrito
```
#### GET: "/:id" Trae un carrito por su ID
```
/carrito/:cartID
```
#### POST: "/" Agrega un carrito a la base de datos
```
/carrito/
```
#### POST: "/:cartID/producto/:productID/cantidad/:cant" Agrega un producto al carrito actual
```
/carrito/:cartID/producto/:productID/cantidad/:cant
```
#### DELETE: "/:id" Elimina un carrito por su ID
```
/carrito/:id
```
#### DELETE: "/:cartID/producto/:productID/cantidad/:cant" Elimina un productos del carrito
```
/carrito/:cartID/producto/:productID
```
#### PUT "/:cartID/producto/:productID/cantidad/:cant" Actualiza los productos por ID del carrito seleccionado
```
/carrito/:cartID/producto/:productID/cantidad/:cant
```
 
 
### /orders
#### GET: "/" Trae todas las ordenes
```
/orders/
```
#### GET: "/:id" Trae una orden por su ID
```
/orders/:orderID
```
#### POST: "/:cartID" Agrega un carrito y genera una orden. Al finalizar la orden el carrito se elimina de la colección
```
/orders/:cartID
```
#### DELETE: "/:orderID" Elimina una orden por su ID
```
/orders/:orderID
```
#### DELETE: "/delete/all" Elimina todas las ordenes de compras actuales
```
/orders/delete/all
```
 
 
### /user
#### GET: "/" Traer a todos los usuarios
```
/users/
```
#### GET: "/:id" Traer usuario por ID
```
/users/:id
```
#### DELETE: "/:id" Elimina una orden por ID
```
/users/:id
```
#### DELETE: "/" Elimina a todos los usuarios
```
/users/
```
 
 
### /chat
#### POST: "/" Guarda un mensaje en la base de datos
```
/chat/
```
#### GET: "/" Trae todos los mensajes
```
/chat/
```
#### GET: "/:email" Trae los mensajes filtrados por el email especificado
```
/chat/:email
```
 
 
### /auth
#### POST: "/register" Registra un usuario y lo almacena en la base de datos
```
/chat/register
```
#### POST: "/login" Loguea un usuario con un nombre y contraseña
```
/chat/login
```
 
 
## Rutas Protegidas
El usuario solo podrá acceder a la mayoria de los endpoints si se encuentra logueado en el sistema luego de un registro, así como también chequeos de errores de escritura en las peticiones
