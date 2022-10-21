//Variables
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const sect = document.getElementById('sect');
//Colores de fondo
div1.style.backgroundColor ="#000814"
div2.style.backgroundColor ="#001d3d"
div3.style.backgroundColor ="#003566"
div4.style.backgroundColor ="#ffc300"
//Tamaños
div1.style.width="200px";
div1.style.height="200px";
div2.style.width="200px";
div2.style.height="200px";
div3.style.width="200px";
div3.style.height="200px";
div4.style.width="200px";
div4.style.height="200px";


document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
  /* Cambiar a color 1 */
    div1.style.backgroundColor ="#007f5f"
    div2.style.backgroundColor ="#2b9348"
    div3.style.backgroundColor ="#55a630"
    div4.style.backgroundColor ="#80b918"
  } else if (event.key === 's') {
  /* Cambiar a color 2 */
    div1.style.backgroundColor ="#710000"
    div2.style.backgroundColor ="#a63c06"
    div3.style.backgroundColor ="#c36f09"
    div4.style.backgroundColor ="#eeba0b"
  } else if (event.key === 'd') {
  /* Cambiar a color 3 */
    div1.style.backgroundColor ="#d6d6d6"
    div2.style.backgroundColor ="#ffee32"
    div3.style.backgroundColor ="#333533"
    div4.style.backgroundColor ="#202020"
  }
})

sect.addEventListener('click', () => {
  div1.style.backgroundColor ="#000814"
  div2.style.backgroundColor ="#001d3d"
  div3.style.backgroundColor ="#003566"
  div4.style.backgroundColor ="#ffc300"
})