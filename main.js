function factorialize(num) {

 if(num < 0){//if less than 0 it returns -1
  return -1;
 }else if (num == 0) { //if equals 0 then it returns 1
  return 1;
 }else {
  return(num * factorialize(num - 1));//else it returns the number factorialized
 }

}

console.log(factorialize(5));//This is the number that is the factorial
                             //5 returns the factorial of 120
