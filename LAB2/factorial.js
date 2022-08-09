function factorial(n){
    //ioop
    let result = 0;
    do{
        result = n * (n-1);

    }while(n > 2)
    // 5 * (5-1) * (5-2) * (5-3) * (5-4)
    result = n * (n-1);
    //if n = 1 return 1 or break
    return result;
}

let factorial = 5;
const facResult = factorial(facNumber);
console.log(facResult);