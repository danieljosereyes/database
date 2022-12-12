//Creando usuarios
use admin
db.getUsers()
//usuario lector
db.createUser({ user: "pepe", pwd: "asd456", roles: [{ role: "read", db: "ecommerce" }]});


//usuario admin
db.createUser({ user: "admin", pwd: "88888888", roles: [{ role: "readWrite", db: "ecommerce" }]});



//Crea la base de datos ecomerce
use ecommerce;


//Agregar los documentos a la colecciion de productos
db.productos.insertMany([
  {
    "title": "Escuadra",
    "price": 120,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    "title": "Calculadora",
    "price": 580,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    "title": "Globo Terráqueo",
    "price": 900,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
  {
    "title": "YT",
    "price": 1280,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-64.png",
  },
  {
    "title": "Angel",
    "price": 1700,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/43-angel-holiday-christmas-64.png",
  },
  {
    "title": "Candle",
    "price": 2300,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/25-christmas-candle-xmas-64.png",
  },{
    "title": "Gift",
    "price": 2860,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/46-gift-christmas-holiday-64.png",
  },{
    "title": "Snowman",
    "price": 3350,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/z3-snowman-winter-new-year-64.png",
  },{
    "title": "Sock Chrismas",
    "price": 4320,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/14-christmas-sock-socks-64.png",
  },{
    "title": "Ball Chrismas Snowman",
    "price": 4990,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/47-crystal-snow-ball-christmas-64.png",
  }
]
)
//Agregar los documentos a la colecciion de mensajes
db.mensajes.insertMany([
  {
    "email": "juan@gmail.com",
    "text": "¡Hola! ¿Que tal?",
    "time": "15/11/2022 05:21:58"
  },
  {
    "email": "pedro@gmail.com",
    "text": "¡Muy bien! ¿Y vos?",
    "time": "15/11/2022 05:21:58"
  },
  {
    "email": "ana@gmail.com",
    "text": "¡Genial!",
    "time": "15/11/2022 05:21:58"
  },
  {
    "email": "kevin_asf@hotmail.es",
    "text": "Hola txt",
    "time": "15/11/2022 05:28:26"
  },
  {
    "email": "nicole@hotmail.es",
    "text": "Que tal!",
    "time": "15/11/2022 05:28:28"
  },
  {
    "email": "angel@hotmail.es",
    "text": "Prueba",
    "time": "15/11/2022 05:30:26"
  },
  {
    "email": "ticho@hotmail.es",
    "text": "No puede ser",
    "time": "15/11/2022 05:40:26"
  },
  {
    "email": "Freya@hotmail.es",
    "text": "Saludos desde el Vallhala",
    "time": "15/11/2022 05:50:01"
  },
  {
    "email": "Odin@hotmail.es",
    "text": "Saludos desde el Vallhala",
    "time": "15/11/2022 05:56:02"
  },
  {
    "email": "Thor@hotmail.es",
    "text": "Saludos desde el Vallhala",
    "time": "15/11/2022 05:57:29"
  }
])


//Lista de documentos en cada coleccion
db.productos.find();
db.mensajes.find();


//Cantidad de documentos en cada colecion
db.productos.estimatedDocumentCount();
db.mensajes.estimatedDocumentCount();


//CRUD sobre la coleccion de productos
//Agrega un producto
db.productos.insertOne({
    "title": "Tree",
    "price": 5000,
    "thumbnail": "https://cdn0.iconfinder.com/data/icons/merry-christmas-41/512/z2-christmas-tree-xmas-64.png",
  })
  
  
//CONSULTAS
//    Precio menor a 1000
db.productos.find({ price: { $lt: 1000 } })
//    Precio entre los 1000 a 3000
db.productos.find({ $and: [ { price: { $gte: 1000 } }, { price: { $lte: 3000 } } ] })
//    Mayor a 3000
db.productos.find({ price: {$gt: 3000 } })
//Nombre del 3er producto mas barato
db.productos.find( {}, { "title": 1 } ).sort({ price: 1 }).limit(1).skip(2)

//Actualizacion de todos los productos agregando el campo stock
db.productos.update({}, { $set: { "stock": 100 } }, { upsert:false,multi:true });

//Cambiar stock a cero a todos los productos mayores a 4000
db.productos.updateMany( {price: { $gt: 4000 } }, { $set: {stock: 0} } );

//Borrar productos con precio menor a 1000
db.productos.deleteMany( { price: { $lt: 1000 } } )
