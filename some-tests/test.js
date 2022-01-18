function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


const gen2 = generator();

for (const item of gen2) {
  console.log(item)
}
