function convert() {
            let tem = document.getElementById("tempvalue").value;
            let celsius = (parseFloat(tem) - 32) * 5 / 9;
            document.getElementById("Celsius").innerHTML = Celsius + '°C';
            document.getElementById("Fahrenheit").innerHTML = "none";

}
// let tem = document.getElementById("tempValue").value;            
