

1. new Set([1, 1, 2, 2, 3, 4])
returns new Set([1, 2, 3, 4])

2.[...new Set("referee")].join("")

returns['ref']

3. 0: { Array(3) => true }
1 : { Array(3) => false }


4.

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

