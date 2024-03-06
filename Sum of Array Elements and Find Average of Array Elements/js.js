let array = [];
function getInput(){
            let num = parseInt(document.getElementById("num").value);
            array.push(num);
            const sum = array.reduce((partialSum, a) => partialSum + a, 0);
            let avg = sum / array.length;

            document.getElementById('sum').innerHTML = "Sum: "+ sum;
            document.getElementById('avg').innerHTML = "Average: "+avg;
        }
            
