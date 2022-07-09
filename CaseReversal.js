function reverseCase(string) {

    for(i=0;i<string.length;i++){
        for(s=1;s<string.length;s++){

            if(string[s]==string[i] && s==string[s].toUpperCase() && i==string[i].toUpperCase){
                s.toLowerCase;
                i.toLowerCase;
            }
            else if(string[s]==string[i] && s==string[s].toLowerCase() && i==string[i].toUpperCase){
                s.toUpperCase;
                i.toLowerCase;

            }
            else if(string[s]==string[i] && s==string[s].toUpperCase() && i==string[i].toLowerCase){
 
                s.toLowerCase;
                i.toUpperCase;

            }
        }
        return string
    }
    }
    //console.log(reverseCase("puzzles"))

    function Susan(number1,number2){

        return number1+number2;
    }


    console.log(Susan(34,4))
   for(greeting=0;greeting<10;greeting++){

    console.log("Hello Susan")
   }
   function IEBC(name,age){

    if(age<18){
        console.log(name +",You are Underage")
    }
    else if(age>=18){
        console.log(name+",You are a proud Voter")
    }
   }

   IEBC("Susan Muthoni",10)


   function Seshy(name,sex,age){
     
    if(sex=="girl" && age>=18){
        console.log(name+" Congragulations your earn yourself a Scholarship");
    }
    else if(sex=="girl" && age<18){
        console.log(name+" Your not an Adult");
    }
    else if(sex=="boy" && age>=18){
        console.log(name+ " Not for Boys");
    }
    else{
        console.log(name+ " Not for Boys");
    }
   }
   Seshy("Susan Muthoni","boy",18)


