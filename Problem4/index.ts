function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sum_to_n_b(n: number): number {
  return n * (n + 1) / 2;
}

function sum_to_n_c(n: number): number {
  if (n === 0) {
    return 0;
  } else {
    return n + sum_to_n_c(n - 1);
  }
}

console.log("Option 1: sum = ", sum_to_n_a(10));
console.log("Option 2: sum = ", sum_to_n_b(10));
console.log("Option 3: sum = ", sum_to_n_c(10));
