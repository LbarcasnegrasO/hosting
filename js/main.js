/*===== FOCUS =====*/
const inputs = document.querySelectorAll(".form__input")

/*=== Add focus ===*/
function addfocus(){
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/*=== Remove focus ===*/
function remfocus(){
    let parent = this.parentNode.parentNode
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

/*=== To call function===*/
inputs.forEach(input=>{
    input.addEventListener("focus",addfocus)
    input.addEventListener("blur",remfocus)
})

// sweet alert boton
$('#leerMas').click(function(){
    Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'Lo sentimos aun no tenemos la tienda <br> Notificaremos cuando este lista!',
       footer: '<a href="">Why do I have this issue?</a>'
    })
 });
