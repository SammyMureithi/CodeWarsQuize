var isSquare = function(arr){
    //Your code here
    if(arr.length<0){

        return undefined;
    }
    for(i=1;i<arr.length;i++){
      let sqrt=Math.sqrt(arr[i]);
      let intCount1=0;
      let FloatCount1=0
      
        if(Number.isInteger(sqrt)){
            return true;
          }
          else{
            return false;
          }

      
     
    
  }
}

  console.log(isSquare([1, 2, 4, 15]))