function compareArrays(arr1, arr2){
    if (arr1.length === arr2.length){
        return arr1.every((item, index) => item === arr2[index]);
    }else{
        return false;
    };    
};       

function memoize(exp, limit){
    let results = {
        args : [], 
        result : []
    };

    let arrayOfResults = [];

    function fn(a, b, c, d){
        if (arrayOfResults.length === 0){
            results.args =  [a, b, c, d];
            results.result = exp(a, b, c, d);
            arrayOfResults.push(results);
            return console.log(results.result);
        }else{    
            if (compareArrays(results.args, [a, b, c, d])){
                return console.log('Результат берется из памяти \n' + results.result);
            }else{ 
                results.args =  [a, b, c, d];
                results.result = exp(a, b, c, d);
                arrayOfResults.push(results);
                return console.log('Функция вызвана не из памяти\n' + results.result); 
            };
        };    
    };

    return fn;
};

const sumfn = (a, b) => a + b;

sumfn (3, 4)
const mSum = memoize(sumfn, 10)

mSum(3, 4)
mSum(4, 5)
mSum(3, 4)
mSum(2, 4)
//больше двух аргументов
const extendedSumfn = (a, b, c, d) => a + b + c + d;
console.log(extendedSumfn(3, 4, 6, 3))

const extendedmSum = memoize(extendedSumfn, 10);
extendedmSum(3, 4, 6, 3) 
extendedmSum(3, 2, 3, 3) 
extendedmSum(3, 2, 4, 3) 