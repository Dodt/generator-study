import { createServer } from 'http';

const PORT = 3000;

async function handler ( request, response ) {
  if(
    request.method === 'GET' &&
    request.url.includes('products')
  ){
    
    return response.end('hey!')

  }
  return response.end('hey!')
}

createServer(handler).listen(PORT, () => console.log(`products API is running at ${PORT}`))