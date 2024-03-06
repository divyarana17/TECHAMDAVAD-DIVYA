function addition(){
            let num1 = parseInt(document.getElementById("dd").value) ;
            let num2 = parseInt(document.getElementById("dd1").value);
            let result = num1 + num2;
           document.getElementById("dd2").innerHTML =result;
}
function sub(){
           let num11 = parseInt(document.getElementById("dd11").value);
           let num22 = parseInt(document.getElementById("dd22").value);
           let result = num11 - num22;
           document.getElementById("dd33").innerHTML=result;
}

function div(){
            let num3 = parseInt(document.getElementById("dd4").value);
            let num4 = parseInt(document.getElementById("dd5").value);
            let result = num3 / num4;
            document.getElementById("dd6").innerHTML=result;
 }
 function mlt(){
            let num5 = parseInt(document.getElementById("dd7").value);
            let num6 = parseInt(document.getElementById("dd8").value);
            let result = num5 * num6;
            document.getElementById("dd9").innerHTML=result;
 }
 function checkEvenOdd() {
            const number = parseInt(document.getElementById("numberInput").value);

         
                if (number % 2 == 0) {
                    document.getElementById("result").innerHTML = number  + " is even";
                } else {
                    document.getElementById("result").textContent = number + "is odd";
                }
            }
        
  
