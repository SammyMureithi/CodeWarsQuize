function strCount(str, letter){ 
    let count=0; 
    //code here
    let arr1=str.split("");
    for(i=0;i<arr1.length;i++){
        if(arr1[i]==letter){
            count+=1;
        }
    }


   return count;
  }
  console.log(strCount("Happy","p"));