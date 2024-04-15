// current tick

// Promise.resolve() - sync method call
Promise.resolve()
  // .then() - sync method call
  .then(
    // () => console.log(1) - the function is added to the microtask queue on the current tick
    () => console.log(1) // ct m1
  );

// queueMicrotask(); - sync function call
queueMicrotask(
  // () => console.log(2) // the function is added to the microtask queue on the current tick
  () => console.log(2) // ct m2
);

// setTimeout() - sync function call
setTimeout(
  // () => console.log(3) - the function is added to the microtask queue on the current tick
  () => console.log(3), // ct m3
  0
);

// console.log(4) - sync method call
console.log(4); // ct t1

// new Promise() - sync constructor call
new Promise(
  // () => console.log(5) - sync argument function executed immediatelly on current tick
  () => console.log(5) // ct t2
);

// ()() - Immediately Invoked Function Expression (IIFE)
// async arrow func being synchronously created and immediately synchronously invoked on the current tick, so it is like a sync function call, because no await before console.log(6), it is just the return undefined will be wrapped in promise
(async () => console.log(6))(); // ct t3

// ==============================
console.log(1);

new Promise(() => console.log(2));

(async () => console.log(3))();

Promise.resolve().then(() => console.log(4));

queueMicrotask(() => console.log(5));

setTimeout(() => console.log(6), 0);
