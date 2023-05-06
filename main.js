
let Bienvenida = "Bienvenidos a "
let Bienvenido = "Xionnetix tu tienda online"
let Welcome = Bienvenida +""+ Bienvenido;
alert(Welcome)


let cliente = prompt("ingrese su nombre y apellido")

alert("que lo trae por aqui?")
let peticion = prompt("Responda la pregunta anterior")

//Verficacion que sea mayor de edad
function Verificacion() {  
    
    let IngresarEdad = prompt ("Por favor introduce tu edad");
    
    //si es mayor o tiene 18 años se mostrara lo siguiente
    if (IngresarEdad >= 18) { alert ("Usted es mayor de edad"); 
    
    //si es menor que 18 años se mostrara lo siguiente
}else{
    alert("Usted es menor de edad")
    alert("Recargue la pagina")
}
}
Verificacion()


// el cliente pregunta que ofertas hay disponibles
let off = prompt("Desea ver las ofertas Disponibles?")



//
let ofertas = ["25% Off en Diseños", "50% Off en SEO", "Semana de mantenimiento de sitios GRATIS"];
alert(ofertas)

let mensaje = "Elija una oferta escribiendo su número:\n";

//ciclo inicia "i" en 0, se repetira mientras sea menor al array y luego se le sumara 
for (let i = 0; i < ofertas.length; i++) {
  mensaje += (i + 1) + ". " + ofertas[i] + "\n";
}

let eleccion = parseInt(prompt(mensaje));

// Condicional donde se Verifique la eleccion

if (eleccion >= 1 && eleccion <= ofertas.length) {
    
  alert("Usted ha elegido la oferta " + ofertas[eleccion - 1]);
} else {
  alert("Elección inválida");
}


let Chau = prompt("Desea comprar algo mas, escriba SI, sino si desea Salir escriba ESC?")
if(Chau === "SI"){
    alert("Porfavor Recargue la pagina")
}else (Chau === "ESC") 
    alert("Gracias por Visitar este sitio, vuelva Pronto!")




