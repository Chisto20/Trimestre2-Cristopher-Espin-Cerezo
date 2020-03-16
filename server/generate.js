var faker = require('faker');

var database = { products: []};

for (var i = 1; i<= 300; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    color: faker.commerce.color(),
    email: faker.internet.email(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    dia: faker.date.weekday(),
    mes: faker.date.month(),
    rece: faker.date.recent(),
    imageUrl: "https://source.unsplash.com/1600x900/?product&sig="+i,
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));