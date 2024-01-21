//write in form bi, where b in R; use imaginary numbers
function writeBi(number) {
  let message = "";
  let sqrt = 0;
  if (number > 0) {
    //если число положительное
    sqrt = findSqrtNumber(number); //ищем корень
    if (sqrt === number) {
      //если вернулось чилсо равное исходному, значит целого корня у числа нет
      message = "V" + sqrt; //записываем ответ
    } else {
      //если целый корень у числа есть
      message =
        number - sqrt * sqrt === 0 ? sqrt : sqrt + "V" + number / (sqrt * sqrt);
    }
  } else {//если число отрицательное
    sqrt = findSqrtNumber(Math.abs(number));//ищем корень 
    if (sqrt === Math.abs(number)) {//если вернулось исходное число, значит корня нет
      message = "V" + sqrt + "i";//записываем ответ
    } else {//если вернулось число отличное от исходного, значит корень есть
      message =
        Math.abs(number) - sqrt * sqrt === 0
          ? sqrt + "i"
          : "(" + sqrt + "V" + Math.abs(number) / (sqrt * sqrt) + ")i";
    }
  }
  return message;
}
//функция поиска корня числа
function findSqrtNumber(number) {
  let result = number;
  if (Math.sqrt(number) % 1 === 0) {
    result = Math.sqrt(number);
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        let tmp = Math.sqrt(number / i);
        if (tmp % 1 === 0) {
          result = tmp;
          break;
        }
      }
    }
  }
  return result;
}

console.log(writeBi(-9));
console.log(writeBi(-49));
console.log(writeBi(-121));
console.log(writeBi(-10000));
console.log(writeBi(-225));
console.log(writeBi(-5));
console.log(writeBi(-12));
console.log(writeBi(-45));
console.log(writeBi(-200));
console.log(writeBi(-147));
console.log(writeBi(147));
console.log(writeBi(121));
