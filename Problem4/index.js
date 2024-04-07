function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// 2. Using the formula for the sum of an arithmetic series
function sum_to_n_b(n) {
    return n * (n + 1) / 2;
}
// 3. Using recursion
function sum_to_n_c(n) {
    if (n === 0) {
        return 0;
    }
    else {
        return n + sum_to_n_c(n - 1);
    }
}
console.log("Option 1: sum = ", sum_to_n_a(10));
console.log("Option 2: sum = ", sum_to_n_b(10));
console.log("Option 3: sum = ", sum_to_n_c(10));
