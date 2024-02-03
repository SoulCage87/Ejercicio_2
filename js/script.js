let btncal = document.getElementById('cal');
let btneli = document.getElementById('eliminar');

btncal.addEventListener('click', calcular);
btneli.addEventListener('click', eliminar);

function calcular() {
    let n1 = parseFloat(document.getElementById('nota1').value);
    let n2 = parseFloat(document.getElementById('nota2').value);
    let n3 = parseFloat(document.getElementById('nota3').value);
    let resultado = document.getElementById('res');

    if (n1 <= 30 && n2 <= 30 && n3 <= 40) {
      let op = n1 + n2 + n3;
      if (op < 59) {
        alert('Usted está reprobado');
        resultado.innerHTML = 'Su nota final es de: '+op;
      }else if(op >= 60 && op <= 79){
        alert('Usted es Bueno')
        resultado.innerHTML = 'Su nota final es de: '+op;
      }else if(op >= 80 && op <= 89){
         alert('Usted es Muy Bueno')
         resultado.innerHTML = 'Su nota final es de: '+op;
      } else {
        alert('Usted es Sobresaliente')
        resultado.innerHTML = 'Su nota final es de: '+op;
        
      }
    } else {
      alert("La nota máxima para cada parcial es de 30");
    }
  }

  function eliminar(){
   document.getElementById('nota1').value = '';
   document.getElementById('nota2').value = '';
   document.getElementById('nota3').value = '';
   document.getElementById('res').innerHTML = '';

  }
  

