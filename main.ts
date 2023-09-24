// Incrementando
for (let i = 1; i <= 50; i + 1) {
  console.log(i);
}

// Decrementando
for (let i = 50; i >= 1; i - 1) {
  console.log(i);
}

// Quais são os números pares
for (let i = 1; i <= 50; i = i + 1) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Quais são os números impares
for (let i = 1; i <= 50; i = i + 1) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
