import { kv } from "@vercel/kv";

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for product 1',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for product 2',
    price: 20.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for product 3',
    price: 30.99,
  },
];

export default async function getProducts(user) {
  const res = []
  products.forEach((product) => {
     kv.hset(`product:${product.id}`, product )});
    
  await kv.set('test:2', {id: 1, name: "test",  price: 100, user: "test", description: "test", image: "test"})
  await kv.set('test:3', {id: 1, name: "test",  price: 100, user: "test", description: "test", image: "test"})
  for(let prod of products){
    const response = await kv.hgetall(`product:${prod.id}`)
    res.push(response)
  }
  // const res = await kv.hgetall('product:1')
  

  return res
}
