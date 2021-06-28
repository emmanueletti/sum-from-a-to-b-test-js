function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  console.log("fromN", fromN, "toN", toN);
  if (fromN === toN) {
    return fromN;
  }
  return toN + sum(fromN, toN - 1);
}

module.exports = sum;

/*
1 to 1
// 1
1 to 2
// 1 + 2
1 to 3
// 1 + 2 + 3
1 to 4
// 1 + 2 + 3 + 4

// fromN + sum(fromN + 1, toN - 1)

toN + sum(fromN, toN + 1)

0 to 1

*/
