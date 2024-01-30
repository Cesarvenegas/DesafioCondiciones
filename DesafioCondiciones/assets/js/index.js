
    const img = document.getElementById("img");
    let punto = true;
    img.addEventListener("click", function() {
         if(punto){

            img.style.border = "2px solid red";
             punto = false;
         }
         else{

            img.style.border = "none";
            punto= true;
         }
        
    });

