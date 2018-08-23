function getElement(id) {
  const input = document.getElementById(id);
  input.addEventListener("change", function(){inputEvent(input)});

}

function inputEvent (input) {
  console.log(input.name + " = " + input.value + " personnes");
}

function computeRaclette (classCSS) {
  const inputs = document.querySelectorAll(classCSS);
  const inputsA = Array.from(inputs);
  console.log(inputsA);
  inputsA.forEach(function(input) {
    console.log(input);
    getElement(input.id);
  });
}



export { computeRaclette } ;
