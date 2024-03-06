let xyz = [];
function findMinMax(){
            let num1 = document.getElementById('arrInput').value;
            xyz.push(num1)
            // console.log(xyz)/
            let num2 = xyz.sort(function(a,b){return a-b}); 
            // console.log(xyz)
           let small= xyz[0] ;
           let large = xyz[xyz.length - 1];
           document.getElementById("Largest").innerHTML = "Largest numbet" +  JSON.stringify(large);
           document.getElementById("Smallest").innerHTML = "Smallest numbet" + JSON.stringify(small);
           document.getElementById("all").innerHTML= "All number" + JSON.stringify(xyz);

}