document.addEventListener('DOMContentLoaded', function() {
    //encargado de llamar a las funciones
    iniciarApp();

});
let producto1=1;
let producto2=1;


function iniciarApp() {

    agregarProducto();
    quitarProducto();
}

function agregarProducto() {

    const more = document.querySelectorAll('.more');

    more.forEach((sumar)=>{
        sumar.addEventListener('click',(event)=>{
            const targetProduct = event.target;
            const targetProductAttribute = targetProduct.getAttribute('data-target');

            const cantidadProducto = document.querySelector(targetProductAttribute);
            producto1++;
            cantidadProducto.innerHTML = `${producto1}`;
            
        })
    });    
    
}
function quitarProducto(){
    const more = document.querySelectorAll('.less');

    more.forEach((sumar)=>{
        sumar.addEventListener('click',(event)=>{
            const targetProduct = event.target;
            const targetProductAttribute = targetProduct.getAttribute('data-target');

            const cantidadProducto = document.querySelector(targetProductAttribute);
            producto1--;
            cantidadProducto.innerHTML = `${producto1}`;
            
        })
    });    
}