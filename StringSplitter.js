function solution( str ) {
    let regex = /[a-z|\_]{2}/gi;
    let regex1 = /[a-z]{2}/gi;
    let res = [];
    if ( str.length % 2 !== 0 && str.length>0 ) {
        var newString=str+ "_"
        return newString.match( regex );
    }
    else if(str.length>0) {
        return str.match( regex1 );
    }
    else  {
        return res;
    }

  
}
console.log( solution( "abcdefg" ) );