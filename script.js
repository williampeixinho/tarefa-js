const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const valorCampoA = parseFloat(campoA.value);
    const valorCampoB = parseFloat(campoB.value);

    if(valorCampoA < valorCampoB){
        alert("formulario Aceito");
    } else { alert("formulario não Aceito")}        
        
    
}
)