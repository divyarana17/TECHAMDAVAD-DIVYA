function palandro(){
            let x = document.getElementById("dh").value;
            let y = x.split("").reverse("").join("");
            if (x == y) {
                        document.getElementById("result").innerHTML = "it is a palandro";
                } 
                else{
                    document.getElementById("result").innerHTML = "It is not a palandro";
                }
            
         };