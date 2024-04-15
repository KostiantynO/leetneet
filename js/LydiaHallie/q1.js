// prettier-ignore
Promise.resolve() // ct + t1.1
  .then(() => console.log(1)); // nt + m2.1

queueMicrotask(() => console.log(2)); // ct + m1.1

setTimeout(() => console.log(3), 0); // nt + t2.1

console.log(4); // ct + t1.2

new Promise(() => console.log(5)); // ct + t1.3

(async () => console.log(6))(); // ct + t1.4


// tick 1
// 4 t task#1
// 5 t task#2 <- argument of a new Promise() is called synchronously
// 6 t task#3 <- body of the async function is executed synchronously before the first "await".
// 1 m <- callback of .then() is a microtask #1
// 2 m <- callback of queueMicrotask() is a microtask#2

// tick 2
// 3 t <- callback of setTimeout() is added to the task queue on the next tick
