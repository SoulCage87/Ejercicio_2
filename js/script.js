let btncal = document.getElementById('cal');
let btneli = document.getElementById('eliminar');

btncal.addEventListener('click', calcular);
btneli.addEventListener('click', seguro);

function calcular() {
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);
    let resultado = document.getElementById('res');

    if (n1 <= 30 && n2 <= 30 && n3 <= 40) {
      let op = n1 + n2 + n3;
      if (op < 59) {
        mensaje("error","Oh! Mala Suerte :(",`Usted esta reprobado con ${op}`);
        resultado.innerHTML = 'Su nota final es de: '+op;
      }else if(op >= 60 && op <= 79){
        mensaje("question","Hmmm, Creo que debes mejorar :D", `Usted es Bueno con ${op}`);
        resultado.innerHTML = 'Su nota final es de: '+op;
      }else if(op >= 80 && op <= 89){
         mensaje("success","Oye, Creo que eres bueno en esto :)", `Usted es Muy Bueno con ${op}`);
         resultado.innerHTML = 'Su nota final es de: '+op;
      } else {
        mensaje("success", "Enserio lo hiciste? Impresionante...", `Usted es Sobresaliente con ${op}`);
        resultado.innerHTML = 'Su nota final es de: '+op;
        
      }
    } else {
     mensaje("warning", "Cuidado!","Las notas deben ser mayores a 30 y del tercer parcial mayor a 40");
    }
  }

  function eliminar(){
   document.getElementById('nota1').value = '';
   document.getElementById('nota2').value = '';
   document.getElementById('nota3').value = '';
   document.getElementById('res').innerHTML = '';

  }

  function mensaje(icon, title,text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
      });
  }
  
  function seguro(){
    Swal.fire({
        title: "¿Eliminar Resultados?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "NOOOOOOO!",
        denyButtonText: `Si, hazlo :D`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Okok No lo borro y ya esta", "", "error");
        } else if (result.isDenied) {
            eliminar();
          Swal.fire("Tus notas han sido borradas, att: RubRub...", "", "success");
        }
      });
  }

