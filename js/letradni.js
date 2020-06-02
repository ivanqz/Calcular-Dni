/**
 * Práctica 9. Averiguar la letra del DNI
 * ---------------------------------------
 * Hay un calculo matemático que usan en la policia para calcularlo:
 * Son 23 letras y hay que sacar el ‘resto’ de la división sobre el número del dni.
 * 
 */

 //Variables
 //Array con la lista de posibles letras que puede tener el DNI
 var letrasDNI = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  
  var numeroDNI = Number(prompt('Introduce el numero del DNI del qual quieres saber la letra:'));
  
  //Funcion para verificar si es correcto el DNI introducido
  function verificar(dni) {
    var valido = false;
    var comprovacion = dni.toString().length;
  
    if (comprovacion < 8 | comprovacion > 8) {
      document.write('Numero de dni no válido, por favor vuelva a introducir su DNI');
    } else if (comprovacion === 8) {
      valido = true;
    }
  
    return valido;
  }
  
  function calcular(dni) {
    if (verificar(dni)) {
    //Esta variable calcula la posicion de la letra del DNI (que es el resto de dividir el numero entre 23).
      var calculo = dni % 23;
      var letraCorrecta = letrasDNI[calculo];
      //Nos muestra el resultado de el numero de dni con su letra por pantalla y en la consola.
      console.log(`La letra del numero de DNI ${dni} es: ${letraCorrecta}`)
      document.write(`Tu DNI es: ${dni} ${letraCorrecta}`);
    }
  }
  
  calcular(numeroDNI);
