function isPalindrome(x) {
    // your code here
    const arr1=x.split('');
    const arr2=arr1.reverse();
    const arr3=arr2.join('')

    if (x.toLowerCase()==arr3.toLowerCase()){
        return true
    }
    else{
        return false
    }
  
  }
  console.log(isPalindrome('Aaa'))
