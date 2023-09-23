const COUNT_THRESHOLD = 10;
const TIME_THRESHOLD = 60000;

function createCounter() {
  let count = 0;
  let timestampSinceCount;

  return function countAndNotify() {
    count++;

    if (!timestampSinceCount) {
      timestampSinceCount = Date.now();
    }

    if (count < COUNT_THRESHOLD) return;

    const timestampUntilCount = Date.now();
    const timeElapsed = timestampUntilCount - timestampSinceCount;

    if (timeElapsed < TIME_THRESHOLD) return;

    // Send email
    console.error(`Too many errors in ${Number(TIME_THRESHOLD / 1000 / 60).toFixed(2)} minutes... sending email.`);
    count = 0;
    timestampSinceCount = null;
  }
}

const countAndNotify = createCounter();
function logError(error) {
  countAndNotify();
  console.error(error); // This would be the file system log
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  for (let i = 0; i < 11; i++) {
    logError(`Error number ${i}`);
    await sleep(200);
  }
})()
