let valorInput1;
let valorInput2;
let valorInput3;


const button = document.querySelector('.btn');

button.addEventListener("click", () => {
    valorInput1 = parseInt(document.querySelector("#input1").value);
    valorInput2 = parseInt(document.querySelector("#input2").value);
    valorInput3 = parseInt(document.querySelector("#input3").value);


    const resultado = (valorInput1 + valorInput2 + valorInput3);

    console.log(resultado)

    if(resultado > 10){

        alert('solo puedes llevar 10')
        
       }
       else{
           alert('disfruta tus estickers')
       }



});

