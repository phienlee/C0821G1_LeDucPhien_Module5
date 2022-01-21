// @ts-ignore
function fibonacci(number) {
    return number < 1 ? 0 : number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);
}
let j;
let fib = [];
fib[0] = 0;
fib[1] = 1;
let sum = fib[0] + fib[1];
for (let k = 2; k <= 10; k++) {
    fib[k] = fib[k - 2] + fib[k - 1];
    sum += fib[k];
}
console.log(sum);

let sum2 = 0;
for (let i = 0; i <= 10; i++) {
    sum2 += fibonacci(i);
}
console.log(sum2);


