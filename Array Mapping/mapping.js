let array = []
function mapFunction(){

            let num1 = document.getElementById('input_array2').value;
            array.push(num1); 
            document.getElementById('result').innerHTML= JSON.stringify('result');
            let  result = array.map((nextValue) => nextValue * 2); 
            document.getElementById('output').innerHTML="Result: " + JSON.stringify(result) ;  
            
}