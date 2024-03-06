function getInput(){
            let num1 = [1,2,3,4,5];
            let num2=[3,4,5,6,7];
            let num3 =num1.concat(num2);

            let srortarray =  num3.sort((a,b)=> a-b) 

            document.getElementById('result').innerHTML= (num1);

            document.getElementById('result1').innerHTML=(num2);

            document.getElementById('result2').innerHTML=(num3);
            


}