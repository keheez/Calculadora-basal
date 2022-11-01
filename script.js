const mante = document.getElementById('mante');
const mante2 = document.getElementById('mante2');
const peso = document.getElementById('peso');
const botonCalcular = document.getElementById('calcular');

botonCalcular.addEventListener('click', () => {
    const pesokg = parseInt(peso.value);
    if(peso.value === ""){
        mante.innerHTML = 'Ingrese el peso del paciente';
     } else {
        if(pesokg > 0){
            mante.innerHTML = `${calcularFlujo(pesokg)[0]} cc/hr`;
            mante2.innerHTML = `m+m/2 <span class="mant__Medio">${calcularFlujo(pesokg)[1]}</span> cc/hr`;
        }else {
            mante.innerHTML = `El peso debera ser mayor a 0 `;
            mante2.innerHTML = '';
        }
    }
})
calcularFlujo = (peso) => {
    let mante = 0; 
    let mantenimiento = 0;
    let mantenimientoMedio = 0;

    if(peso <= 10){
        mantenimiento = (mante = peso * 100) / 24;
        mantenimientoMedio  = mantenimiento * 1.5;
    } else if(peso <= 20){
        mantenimiento = mante = (((peso - 10) * 50) + 1000) / 24;
        mantenimientoMedio = Math.round(mantenimiento * 1.5);
    } else if(peso <= 30){
        mantenimiento = mante = (((peso - 20) * 20) + 1500) / 24;
        mantenimientoMedio = mantenimiento * 1.5
    } else {
        mantenimiento = mante = ((((peso * 4) + 7) / (peso + 90)) * 1500) / 24;
        mantenimientoMedio = mante = Math.round(mantenimiento / 24);
    }
    return [Math.round(mantenimiento), Math.round(mantenimientoMedio)];
}
