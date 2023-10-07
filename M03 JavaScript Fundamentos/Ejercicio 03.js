/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x==y){
      return true;
   }else{
      return false;
   }
}

function tienenMismaLongitud(str1, str2) {
   // Devuelve "true" si las dos strings tienen la misma longitud
   // De lo contrario, devuelve "false"
   // Tu código:
   return str1.length === str2.length;
 }
 tienenMismaLongitud("Sol", "Cal");
 tienenMismaLongitud("Lucho", "Luis");

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if (num < 90){
      return true;
   } else {
      return false;
   }
}menosQueNoventa(80);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if (num > 50){
      return true;
   } else {
      return false
   }
}mayorQueCincuenta(80);

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   return (num%2)==0;
}esPar(923);

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   return (num%2)==1;
}esImpar(10);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
