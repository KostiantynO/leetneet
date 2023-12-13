// fastest based on average of 10 runs for 10000000 elements array.
const reverseForLoop = array => {
  const result = [];

  for (let i = array.length - 1; i >= 0; --i) result.push(array[i] * 2);

  return result;
};

const minusMinusWhile = array => {
  const result = [];

  let i = array.length - 1;

  while (i >= 0) {
    result.push(array[i] * 2);
    --i;
  }

  return result;
};

const whileMinusMinus = array => {
  const result = [];

  let i = array.length - 1;
  while (i >= 0) {
    result.push(array[i] * 2);
    i--;
  }

  return result;
};

const whilePlusPlus = array => {
  const result = [];

  let i = 0;
  while (i < array.length) {
    result.push(array[i] * 2);
    i++;
  }

  return result;
};

const forMinusEqualSaveLength = array => {
  const result = [];

  for (let i = array.length - 1, lastIndex = 0; i >= lastIndex; i -= 1) {
    result.push(array[i] * 2);
  }

  return result;
};

const forMinusMinus = array => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i] * 2);
  }

  return result;
};

const forMinusMinusSaveLength = array => {
  const result = [];

  for (let i = array.length - 1, lastIndex = 0; i >= lastIndex; i--) {
    result.push(array[i] * 2);
  }

  return result;
};

const forPlusPlusSaveLength = array => {
  const result = [];

  for (let i = 0, lastIndex = array.length; i < lastIndex; i++) {
    result.push(array[i] * 2);
  }

  return result;
};

const forPlusPlus = array => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }

  return result;
};

const forPlusEqualSaveLength = array => {
  const result = [];

  for (let i = 0, len = array.length; i < len; i += 1) {
    result.push(array[i] * 2);
  }

  return result;
};

const forPlusEqual = array => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * 2);
  }

  return result;
};

const forEach = array => {
  const result = [];

  array.forEach(element => {
    result.push(element * 2);
  });

  return result;
};

const forOf = object => {
  const result = [];

  for (const iterator of object) {
    result.push(iterator * 2);
  }

  return result;
};

const getRef = {
  root: () => document.querySelector('#root'),
};

const arg = new Array(10000000).fill(0).map((_, i) => i);

const exp = arg.map(num => num * 2);

const loops = [
  reverseForLoop,
  minusMinusWhile,
  whileMinusMinus,
  whilePlusPlus,
  forMinusEqualSaveLength,
  forMinusMinus,
  forMinusMinusSaveLength,
  forPlusPlusSaveLength,
  forPlusPlus,
  forPlusEqual,
  forPlusEqualSaveLength,
  forEach,
  forOf,
];

/**
 *
 * @param {{callback: (arg:[])=>[]}} param0
 * @returns
 */
const test = ({ callback, argument, expected }) => {
  const { name } = callback;
  const start = performance.now();
  const actual = callback(argument);

  const testPassed =
    actual.length === expected.length &&
    actual.every((actualItem, i) => actualItem === expected[i]);
  const elapsed = performance.now() - start;

  return { name, testPassed, elapsed };
};

const generateTable = data => {
  let table = '<table>';

  const headers = `
  <tr>
    <th>Name</th>
    <th>Test passed</th>
    <th>Elapsed</th>
  </tr>`;

  table += headers;

  data.forEach(({ name, testPassed, elapsed }) => {
    table += `
    <tr>
      <td>${name}</td>
      <td>${String(testPassed)}</td>
      <td>${elapsed}</td>
    </tr>`;
  });

  table += '</table>';

  return table;
};

const items = loops
  .map(cb => test({ callback: cb, argument: arg, expected: exp }))
  .sort((a, b) => a.elapsed - b.elapsed);

const renderToRoot = child => {
  const root = getRef.root();
  root.insertAdjacentHTML('beforeend', child);
};

renderToRoot(generateTable(items));
