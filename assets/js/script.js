/* Modifica el código anterior para poder pasarle un color como argumento a la función pintar. El color debe ser verde (green) por defecto, al hacer clic en el párrafo se debe pasar amarillo como color. (1 Punto).

function pintar("green"){
  ele = document.getElementById("ele1")
  ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);
*/

const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";

ele.addEventListener('click', () => {
  ele.style.backgroundColor = "yellow";
})
