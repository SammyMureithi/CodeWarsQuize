function squareDigits(num){
    var digits = num.toString().split('');
    var realDigits = digits.map(Number);
    let arr=[];

    for(i=0;i<realDigits.length;i++){
        arr.push(realDigits[i]*realDigits[i])
    }
    let ans=Number.parseInt(arr.join(''))
    return ans;
  }
  console.log(squareDigits(9119))

