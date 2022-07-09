function sumArray(array) {
    let sum=0;
    
    if(array == null){
        return 0
    }
    else if(array.length >2){
        let min=Math.min(...array);
        let max=Math.max(...array);
        let indexMax=array.indexOf(max);
        let indexMin=array.indexOf(min)
        //const noMax=array.splice(indexMax,1);
        //let noMin=array.splice(indexMin,1);
        for(i=0;i<array.length;i++){
            sum+=array[i];
        }
      
        return sum-max-min;

    }
    else{
        return 0;
    }
  



}
console.log(sumArray(null));