let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
function findIndex() {
            let num1 = document.getElementById("arr").value;
            let index = array.indexOf(num1);
            if (index === -1) {
                        document.getElementById("result").innerHTML = "Element not found";
            }
            else {
                        document.getElementById("result").innerHTML = "Element found at index " + index;
            }
}