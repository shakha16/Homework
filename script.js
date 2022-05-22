let str = []
let num = []
let bool = []
let obj = []
let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
let filter = arr.filter(item => item === str)
str.push('hello')
str.push('world')
str.push('error')
let filterTwo = arr.filter(item => item === num)
num.push(1)
num.push(2)
num.push(24)
num.push(22)
let filterThree = arr.filter(item => item === bool)
bool.push(false)
let filterFour = arr.filter(item => item === obj)
obj.push(undefined)
obj.push(null)
console.log(str);
console.log(num);
console.log(bool);
console.log(obj);