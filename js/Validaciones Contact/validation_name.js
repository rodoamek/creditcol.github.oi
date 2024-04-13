document.addEventListener('DOMContentLoaded', function() {
    var verificarBtn = document.getElementById('button');
    verificarBtn.addEventListener('click', function() {
        verificarCampos();
    });

    function verificarCampos() {
        var formulario = document.getElementById('MyFormContact');
        var campos = formulario.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], select');
        var hayErrores = false;

        for (var i = 0; i < campos.length; i++) {
            if (campos[i].value.trim() === '') {
                campos[i].classList.add('error');
                hayErrores = true;
            } else {
                campos[i].classList.remove('error');
            }
        }

        if (hayErrores) {
            document.getElementById('mensajeError').style.display = 'block';
        } else {
            document.getElementById('mensajeError').style.display = 'none';
        }
    }
});