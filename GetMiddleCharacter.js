function getMiddle(s)
{
    let resultArr=[]
     let arr=s.split('');
     if(arr.length%2 ==0){
        var mid1=arr[arr.length/2];
        var mid2=arr[(arr.length/2)-1];
        resultArr.push(mid2,mid1);
     }
     else{
        let middle=arr[(arr.length-1)/2];
        resultArr.push(middle);
     }
     return resultArr.join('');

}
console.log(getMiddle("A"))