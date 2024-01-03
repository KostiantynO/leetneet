// best for array size 10000 and low amount of reps (40)
const forMinusEqual = array => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i -= 1) result.push(array[i] * 2);

  return result;
};

// fastest based on average of 10 runs for 10000000 elements array.
const reverseForLoop = array => {
  const result = [];

  for (let i = array.length - 1; i >= 0; --i) result.push(array[i] * 2);

  return result;
};

// avg. fastest on small and large amounts of reps
const forMinusMinus = array => {
  const result = [];

  for (let i = array.length - 1; i >= 0; i--) result.push(array[i] * 2);

  return result;
};

// best for array size 10000 and mid amount of reps (100)
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

const forPlusPlusSaveLength = array => {
  const result = [];

  for (let i = 0, lastIndex = array.length; i < lastIndex; i++)
    result.push(array[i] * 2);

  return result;
};

const forPlusPlus = array => {
  const result = [];

  for (let i = 0; i < array.length; i++) result.push(array[i] * 2);

  return result;
};

const forPlusEqualSaveLength = array => {
  const result = [];

  for (let i = 0, len = array.length; i < len; i += 1)
    result.push(array[i] * 2);

  return result;
};

const forPlusEqual = array => {
  const result = [];

  for (let i = 0; i < array.length; i += 1) result.push(array[i] * 2);

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

  for (const iterator of object) result.push(iterator * 2);

  return result;
};

const getRef = {
  root: () => document.querySelector('#root'),
  container: () => document.querySelector('[data="container"]'),
  runTestsButton: () => document.querySelector('[data="run"]'),
  tableContainer: () => document.querySelector('[data="table-container"]'),
  tableBody: () => document.querySelector('[data="table-body"]'),
  progressLabel: () => document.querySelector('[data="progress-label"]'),
  progress: () => document.querySelector('[data="progress"]'),
  winnerName: () => document.querySelector('[data="winner-name"]'),
  activeRun: () => document.querySelector('[data="active-run"]'),
  arraySize: () => document.querySelector('[data="array-size"]'),
};

const loops = [
  reverseForLoop,
  minusMinusWhile,
  whileMinusMinus,
  whilePlusPlus,
  forMinusEqual,
  forMinusMinus,
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

const makeTableBody = data => {
  let tbody = '<tbody>';

  data.forEach(({ name, testPassed, avgElapsed }) => {
    let totalAvg = 0;
    const avgArr = Object.values(avgElapsed);

    let elapsedRow = avgArr.reduce((acc, avg) => {
      totalAvg += Number(avg);
      return `${acc}<td>${avg}</td>`;
    }, '');

    totalAvg = (totalAvg / avgArr.length).toFixed(3);

    elapsedRow += `<td>${totalAvg}</td>`;

    tbody += `
    <tr>
      <td>${name}</td>
      <td>${String(testPassed)}</td>
      ${elapsedRow}
    </tr>`;
  });

  tbody += '</tbody>';

  return tbody;
};

const store = {
  activeRun: 0,
  arraySize: 10000,
  reps: [10, 100, 1000, 10000, 100000],
  ids: [],
  entities: {},
};
const arg = new Array(store.arraySize).fill(0).map((_, i) => i);

const exp = arg.map(num => num * 2);

// const run: {
//   name: string;
//   testPassed: boolean;
//   elapsed: number;
// }

//   runs: {
//    10: number[],
//    100: number[]
//   }

const runTests = rep => {
  for (let i = loops.length - 1; i >= 0; --i) {
    const fn = loops[i];

    const { name, testPassed, elapsed } = test({
      callback: fn,
      argument: arg,
      expected: exp,
    });

    const { entities } = store;

    const runs = entities[name]?.runs ?? {};
    const runsRep = runs[rep] ?? [];
    runsRep.push(elapsed);

    entities[name] = {
      ...entities[name],
      name,
      testPassed,
      runs: {
        ...runs,
        [rep]: runsRep,
      },
    };
  }
};

const runRep = rep => {
  for (let i = rep - 1; i >= 0; --i) {
    runTests(rep);
  }
};

const loopOverReps = () => {
  for (let i = store.reps.length - 1; i >= 0; --i) {
    runRep(store.reps[i]);
  }
};

const onClickFindFastestLoop = () => {
  loopOverReps();

  return Object.values(store.entities)
    .map(({ name, testPassed, runs }) => ({
      name,
      testPassed,
      avgElapsed: Object.entries(runs).reduce((acc, [rep, runsRep]) => {
        const sum = runsRep.reduce(
          (totalElapsed, elapsed) => totalElapsed + elapsed,
          0
        );

        const avgElapsedPerRep = (sum / runsRep.length).toFixed(3);

        return { ...acc, [rep]: avgElapsedPerRep };
      }, {}),
    }))
    .sort((a, b) => a.avgElapsed[store.reps[0]] - b.avgElapsed[store.reps[0]]);
};

const Button = () => `
<button class="run-button" type="button" data="run">
  Run
</button>`;

const Progress = () => `
<label class="progress-label" data="progress-label">
  Running tests:
  <progress class="progress" data="progress" max="100">0 %</progress>
</label>
`;

/**
 * @param {number} ms
 */
const wait = async ms =>
  new Promise(res => {
    setTimeout(res, ms);
  });

const arraySizeRef = getRef.arraySize();

const tableContainer = getRef.tableContainer();
tableContainer.insertAdjacentHTML('afterbegin', Button());

const runTestsButton = getRef.runTestsButton();
const activeRunRef = getRef.activeRun();

const runTestsListener = async () => {
  const disableButton = () => {
    runTestsButton.disabled = true;
    runTestsButton.removeEventListener('click', runTestsListener);
  };

  const enableButton = async () => {
    runTestsButton.disabled = false;
    runTestsButton.addEventListener('click', runTestsListener, {
      passive: true,
    });
  };

  disableButton();

  const updateRunsCount = () => {
    arraySizeRef.textContent = `Array size #${store.arraySize}`;
    store.activeRun += 1;
    activeRunRef.textContent = `Active run #${store.activeRun}`;
  };

  const tableBodyRef = getRef.tableBody();
  tableBodyRef.innerHTML = '';

  const createTableWithResults = async () => {
    tableContainer.insertAdjacentHTML('beforeend', Progress());

    const items = onClickFindFastestLoop();

    const makeHardWork = () => {
      const progressLabel = getRef.progressLabel();
      progressLabel.remove();
      tableBodyRef.insertAdjacentHTML('beforeend', makeTableBody(items));
      updateRunsCount();

      setTimeout(enableButton, 0);
    };

    setTimeout(makeHardWork, 0);
  };

  setTimeout(createTableWithResults, 0);
};

runTestsButton.addEventListener('click', runTestsListener, { passive: true });

/* ========================== */

const navButtonsWrappers = document.querySelectorAll(
  '[data="nav-button-wrapper"]'
);

const nav = document.querySelector('[data="nav"]');

const toggleMenu = ({
  target: {
    nodeName,
    parentNode: { dataset },
  },
}) => {
  if (nodeName !== 'BUTTON') return;
  const id = Number(dataset.id);

  for (let i = 0, len = navButtonsWrappers.length; i < len; i += 1) {
    const button = navButtonsWrappers[i];
    const isActive = button.classList.contains('active');

    if (i === id) button.classList.add('active');
    else if (isActive) button.classList.remove('active');
  }

  const navTopBorder = document.querySelector('[data="nav-top-border"]');
  navTopBorder.classList.add('active');

  navTopBorder.style.transform = `scaleY(100%) translateX(${100 * id}px)`;
};

nav.addEventListener('click', toggleMenu, { passive: true });
