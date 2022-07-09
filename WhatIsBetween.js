function between(start,end){
    const myArray=[start];
    const loop=end-start
  
 for(i=0;i<loop;i++){
            myArray[i+1]=myArray[i]+1;
    
        
    }
    return myArray;
   
}
console.log(between(-2,2));