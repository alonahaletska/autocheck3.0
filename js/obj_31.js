// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
function add(...args) {
  // Change code above this line
  let total = 0;
  for (let arg of args) {
    total += arg;
  }
  return total;
}