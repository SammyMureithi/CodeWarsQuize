function pigIt(str){
    //Code here
    const arr=[]
    const splitted = str.split( "" ).reverse(1)
    let joined;
    for ( i = 0; i < splitted.length; i++ ){
      arr[i] = splitted[i] + "ay"
        
        
    }
    return splitted
}

console.log(pigIt('Pig'))