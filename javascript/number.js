let disha = [];
function addBtn() {
            let num1 = document.getElementById("num1").value;
            disha.push(num1);
            // console.log(disha)
            let newh = disha.sort(function (a, b){return a-b}); 
            document.getElementById('result').innerHTML = JSON.stringify(newh)  ;

}