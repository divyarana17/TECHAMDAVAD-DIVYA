function calculate(){
            let Amount = parseInt(document.getElementById("bill").value);
            let Tip =parseInt(document.getElementById("tip").value);

            let tip_calculate = Amount * (Tip/100);
            let totalbill= Amount + tip_calculate;


            document.getElementById('result1').innerHTML="Amount: "+ Amount;
            document.getElementById('result2').innerHTML="Tip: "+ tip_calculate;

           document.getElementById('result3').innerHTML="Total: "+ totalbill;
}