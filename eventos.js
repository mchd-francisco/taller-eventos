function saludar(){
    alert('Hola! Soy el div')
}

document.addEventListener('DOMContentLoaded', function() {
    const botondiv = document.querySelector('.boton-con-div');
    
    botondiv.addEventListener('click', function() {
        saludar();
    });
});

//* Lo tuve que hacer con querySelector porque no me andaba con getElementsByClassName

//* No se especificaba en la letra pero al crear el archivo.js eliminé el onclick del HTML para no hacer trampa al solitario