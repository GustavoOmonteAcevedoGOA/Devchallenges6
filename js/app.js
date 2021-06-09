document.addEventListener('DOMContentLoaded', function() {
    //encargado de llamar a las funciones
    iniciarApp();

});


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
            
            cantidadProducto.innerHTML = `${parseInt( cantidadProducto.innerHTML) + 1}`;
            
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
            if(parseInt( cantidadProducto.innerHTML)>0){
                cantidadProducto.innerHTML = `${parseInt( cantidadProducto.innerHTML) - 1}`;
            }
            
            
        })
    });    
}