function longest(s1, s2) {
    // your code

     let Arr1=s1.split('');
     
     let Arr2=s2.split('');
     let FinalArray=Arr2.concat(Arr1);
     let Sorted=FinalArray.sort()
   // let FinalSet= new Set(FinalArray)
   let newSet= new Set(Sorted);
let FinalArray1=Array.from(newSet)
    
    
    
    return FinalArray1
  }

  console.log(longest("aretheyhere", "yestheyarehere"))