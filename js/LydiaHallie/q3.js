function* count() {
  yield 1;
  yield 2;
  return 3;
}

for (const value of count()) {
  console.log(value);
}
