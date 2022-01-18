import axios from 'axios';

const myDB = async () => Array.from({length: 1000}, (v, index) => `${index}-cellphone`);

const PRODUCTS_URL = 'localhost:3000/products';
const CART_URL = 'localhost:4000/cart';

async function processDbData() {
  const products = await myDB();

  for (const product of products) {
   const { data: productInfo }= await axios.get(`${PRODUCTS_URL}?productName=${product}`)
   console.log('ProductInfo: ', productInfo)
  }
}

await processDbData();