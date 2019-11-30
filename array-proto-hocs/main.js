function sum(...args) { 
  let sum = 0;
  console.log(sum);
  console.log(args);
  for (let arg of args) sum += arg;
  console.log(sum);
  return sum;
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memoize(fn, limit) {
  let memory = [];
  return function (...args) {
    
    let output = memory.find(argument => compareArrays(argument.arg, args));

    if (output) {
      console.log(`Ответ найден в памяти = ${output.result}`);
      return output.result;
    }

    if (memory.length + 1 > limit) {
      memory.splice(0, 1);
      console.log(`Превышение памяти функции. Первый элемент удален`);  
    }

    console.log(`В памяти ответ не найден, ответ раcсчитан функцией`);  
    let functionOutput = fn(...args);
    memory.push({arg: args, result: functionOutput});
    return functionOutput;
    
  }

}

const mSum = memoize(sum, 5);


console.log(mSum(1, 9));
console.log(mSum(2, 8));
console.log(mSum(3, 7));
console.log(mSum(4, 6));
console.log(mSum(4, 6));