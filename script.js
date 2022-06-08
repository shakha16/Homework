function min(a, b) {
    if(typeof a === "number"){
        console.log(Math.min(a,b));
    }
    else if(typeof a[0] === "number"){
        console.log(Math.min(...a));
    } else if(typeof a.a === "number"){
        console.log(Math.min(a.a , a.b));
    } else if(typeof a.a,b, a.b,b === "number"){
        console.log(Math.min(a.a,b.b));
    }
}

min(1, 2)
min([1, 2])
min({a: 1, b: 2})
min({a: 1, b: 2}, {a: 11, b: 12})    