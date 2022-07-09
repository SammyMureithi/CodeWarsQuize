function reverseWords(str) {
    let arr=[];
    let str1;
    let splitted=str.split('');
    let rvs=splitted.reverse();
    for(i=0;i<splitted.length;i++){
        arr.push(rvs[i]);
    }
    let joined=arr.join('')
    for(p=joined.length;p>0;p--){

        str1+=joined[p];
    }
    
    return joined;
  }
  console.log(reverseWords("double  spaced  words"));




