function calculator(){
    //alert("You have clicked me!!");
    fnum = fnum.value;
    snum = snum.value;
    sign = signs.value;
   //alert(sign);

   if(fnum && snum && sign) {
        if(sign == "plus") {
            sum = parseInt(fnum) + parseInt(snum);
            alert(fnum + " plus " + snum + " = " + sum);
        } 
        else if (sign == "subtraction") {
            sub = parseInt(fnum) - parseInt(snum);
            alert(fnum + " minus " + snum + " = " + sub);
        } 
        else if (sign == "multiplication") {
            mult = parseInt(fnum) * parseInt(snum);
            alert(fnum + " multuply by " + snum + " = " + mult);
        }
        else if (sign == "division") {
            div = parseInt(fnum) / parseInt(snum);
            alert(fnum + "divide by" + snum + " = " + div);
        }
       
   } else {
    alert("Please input all the required values!!")
   }
}