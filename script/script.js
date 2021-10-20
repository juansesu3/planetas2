let nombrePlanetas = Array ('Tierra', 'Marte', 'jupiter');
let distancia = [6,3,'67'];
const tamaño = []

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamaño);

let i=0;
while(i <= nombrePlanetas.length -1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i = i + 1    
}
for (let index = 0; index < nombrePlanetas.length; index++){
    console.log(nombrePlanetas[index]);
}
for (const key in object){
    if(Object.hasOwmProperty.call(object, key)){
        const element = object[key];
    }
}
for (const key in nombrePlanetas){
    console.log(nombrePlanetas[key])
}
for (const planeta of nombrePlanetas){
    console.log(planeta)
}
for (const key in distancia){
    if(distancia[key] == '5'){
        console.log('Se encontro la distacia')
    }else{
        console.log('No se encontro la distancia')
    }
}
for (const key in distancia){
    if(distancia[key] === '5'){
        console.log('Se encontro la distacia')
    }else{
        console.log('No se encontro la distancia')
    }
}

let enviarBtn = document.querySelector('#btn_enviar_evaluacion');

enviarBtn.addEventListener(e => {
    alert('le diste a enviar Gg');
    e.preventDefault();
})