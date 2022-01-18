import axios from 'axios';

const myDB = async () => Array.from({length: 10000}, (v, index) => `${index}-cellphone`);

const PRODUCTS_URL = 'http://localhost:3000/products';
const CART_URL = 'http://localhost:4000/cart';

async function processDbData() {
  const products = await myDB();
  const responses = [];
  for (const product of products) {
   const { data: productInfo }= await axios.get(`${PRODUCTS_URL}?productName=${product}`);
   const { data: cartData }= await axios.post(`${CART_URL}`, productInfo);
   responses.push(cartData);
  }

  return responses;
}
console.time('process');
console.table(await processDbData());
console.timeEnd('process');
