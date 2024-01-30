let valorSelect1;
let valorSelect2;
let valorSelect3;


const button = document.querySelector('.btn')

button.addEventListener("click", () => {
    valorSelect1 = (document.querySelector("#select1").value);
    valorSelect2 = (document.querySelector("#select2").value);
    valorSelect3 = (document.querySelector("#select3").value);

const Valor1 = valorSelect1 + valorSelect2 + valorSelect3;
const Valor2 = valorSelect1 + valorSelect2 + valorSelect3; 


 console.log(Valor1);
 console.log(Valor2);

 if( Valor1 == 911 ){
   
  alert("Password 1 Correcto")

 }
 else if 
    (Valor2 == 714){
        alert('Password 2 Correcto')
    }

 else{
    alert('Password Incorrecto')
 }
})



