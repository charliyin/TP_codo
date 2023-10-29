const $form = document.querySelector('#formulario')
const $buttonMailto = document.querySelector('#trucazo')
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('nombre'))
    $buttonMailto.setAttribute('href', `mailto:c.a.r.c.h.u.s.s01@gmail.com?subject=Nombre: ${form.get('nombre')} /// Correo: ${form.get('correo')} /// Asunto: ${form.get('asunto')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}