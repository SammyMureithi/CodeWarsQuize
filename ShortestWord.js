function findShort(s){
    var splitted=s.split(' ');
    let arr=[];
    for(i=0;i<splitted.length;i++){
        arr.push(splitted[i].length);

    }
   // var myLength=splitted[1].length;
   var min=Math.min(...arr)

    return min;
}

console.log(findShort("Let's travel abroad shall we"));