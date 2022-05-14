// 1
let str = 'aaa@bbb@ccc'

console.log(
    str.replace('@', '!')
);


// 2
let row = 'HELLOWORLD'

console.log(
    row.slice(row.search('H'), row.search('H') + 1) + row.toLowerCase() +
    row.slice(row.search('e'), row.search('e') + 1) +
    row.slice(row.search('l'), row.search('l') + 1) +
    row.slice(row.search('o'), row.search('o') + 1) +
    row.slice(row.search('w'), row.search('w') + 1) +
    row.slice(row.search('o'), row.search('o') + 1) +
    row.slice(row.search('r'), row.search('r') + 1) +
    row.slice(row.search('l'), row.search('l') + 1) +
    row.slice(row.search('d'), row.search('d') + 1)
);


// 3
let qwe = 'Hello, it is HTML not Js'

console.log(
    qwe.slice(qwe.search('H'), qwe.search('H')+ 13) +
    qwe.slice(qwe.search('n'), qwe.search('n')+ 7) 
);


// 4
let a = 'alex'
a = a.toUpperCase()

console.log(
    a.slice(a.search('A'), a.search('A') + 1),
    a.toLowerCase(),
    a.slice(a.search('l'), a.search('l') + 3)
);


// 5
let rnd = Math.random()

console.log(
    rnd.slice(rnd.search(0), rnd.search(0) + 1)
);