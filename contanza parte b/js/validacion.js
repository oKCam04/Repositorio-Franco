
    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        
        if (name === "") {
            alert("Por favor, ingresa tu nombre.");
            return false; // Evita que el formulario se envíe
        }
        
        // Validar que el campo correo electrónico no esté vacío
        if (email === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            return false;
        }
        
        // Validar el formato del correo electrónico
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return false;
        }

        // Validar que el campo mensaje no esté vacío
        if (message === "") {
            alert("Por favor, ingresa un mensaje.");
            return false;
        }
        
        // Si todo está bien, se enviará el formulario
        alert("Formulario enviado correctamente.");
        return true;
    }

