let array = [];
let even = [];
let odd = [];
function arrayfiltering() {
            let num = document.getElementById("arrayfiltering").value;
            array.push(num);
            if (num % 2 == 0) {
                        even.push(num);
            }
            else{
                        odd.push(num);
            }
            document.getElementById('even').innerHTML = "Even numbers: " +  JSON.stringify(even);
            document.getElementById('odd').innerHTML = "Odd numbers: " + JSON.stringify(odd)  ;
            document.getElementById('all').innerHTML = "All numbers: " + JSON.stringify(array);   
}
