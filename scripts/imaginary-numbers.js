//write in form bi, where b in R; use imaginary numbers
function writeBi(number){
    let message='';
    let sqrt=0;
    if (number>0){
        sqrt=findSqrtNumber(number);
        message=number-sqrt*sqrt===0?sqrt:sqrt+'V'+(number-sqrt*sqrt);
    }else{
        sqrt=findSqrtNumber(Math.abs(number));
        message=Math.abs(number)-sqrt*sqrt===0?'('+sqrt+')i':'('+sqrt+'V'+(Math.abs(number)-sqrt*sqrt)+')i';
    }
    return message;
}
function findSqrtNumber(number){
    let i=number;
    for (;i>0;i--){
        if (Math.sqrt(i) % 2==0){
            return Math.sqrt(i);
        }
    }
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