import '../css/componentes.CSS';
//import Reptilg from '../assets/img/Reptilg.png';

export const saludar = (nombre) =>{
    console.log('Creando etiqueta H1');

    const h1= document.createElement('h1');
    h1.innerText = `Hola Bro!!! ${nombre}`;

    document.body.append(h1);

    //creando imagen
    //const img = document.createElement('img');
    //img.src = Reptilg;
    //document.body.append(img);
}