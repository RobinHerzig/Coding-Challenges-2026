// Increment a counter. (Closures)

function counter() {
  let count = 1;

  function increment() {
    return count++;
  }

  return increment;
}

const counter1 = counter();
const counter2 = counter();
console.log(counter1(), 1);
console.log(counter2(), 1);
console.log(counter1(), 2);
console.log(counter2(), 2);
console.log(counter1(), 3);

// Use closures to return an "increment" function that increases a counter +1 on every call.