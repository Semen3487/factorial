// function fact(n){
//   if(n != 0){
//       return n * fact(n - 1);
//   } else{
//       return 1;
//   }
// }
// console.log(fact(4));

function fact(n){
  if((n < 0) || (n % 1 !== 0)){
      return 'The number is incorrect'; 
  } else if(n !== 0){
      return n * fact(n - 1);
  }
  return 1;  
}
console.log(fact(4));