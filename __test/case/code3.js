function sleep(sec) {
  return new Promise(resolve => {
    return setTimeout(resolve, sec * 1000, 'done');
  });
}

const res = await sleep(2);
console.log('logFromTopLevelAwait', res);
