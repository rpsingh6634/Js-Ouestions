// for minimum maximum number using rest operator
  
function minofAll(...input) {
    let array = input;
    let min = array[0];
    for(let i = 0 ; i<array.length ; i++){
        if(array[i] < min){
             min = array[i];
        }
    }
    return (min);
   }
   function maxofAll(...input) {
    let array = input;
    let max = array[0];
    for(let i = 0 ; i<array.length ; i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    return (max);
   }
   let a = minofAll(5, 2, 3, 4, 4, 5);
   let b = minofAll(-1, -2, -6, -10, -20);
   let c = minofAll(10, 20, -10, -20, -1, 0);
   let x = maxofAll(5, 2, 3, 4, 4, 5);
   let y = maxofAll(-1, -2, -6, -10, -20);
   let z = maxofAll(10, 20, -10, -20, -1, 0);


   // Array prototype to find if a prime number is present in array

   Array.prototype.checkPrime = function(){
       let ar = this;
       let num =0;
       for (let i =0 ; i<ar.length ;i++){
           let num = isPrime(ar[i]);
           if(num == 1){
               return true;
           }
       }
       return false;
   }
   function isPrime(x){
           let flag =0;
           for(let i = 2 ; i < x ; i++){
               if(x%i == 0){
                   flag = 1;
                   break;
               }
           }
           if(flag == 1){
               return 0;
           }
           else{
               return 1;
           }
       }
    
   let arr = [4,6,8,9,10];
   let prime = arr.checkPrime();