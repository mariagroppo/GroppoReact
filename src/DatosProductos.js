import Foto1 from './components/img/golden.JPG'
import Foto2 from './components/img/honey.jpg'
import Foto3 from './components/img/irish.jpg'
import Foto4 from './components/img/redIpa.JPG'
import Foto5 from './components/img/summer.jpg'
import Foto6 from './components/img/packCanchero.JPG'
import Foto7 from './components/img/packFiestero.JPG'
import Foto8 from './components/img/packLupuladas.JPG'
import Foto9 from './components/img/creamStout.JPG'
import Foto10 from './components/img/equinox.JPG'
import Foto11 from './components/img/weisse.jpg'

const productos = [
    {id: '1', categoria: 'Latas', name:"Lata Golden Ale", price: 160, photo: Foto1, alterna:"Golden"},
    {id: '2', categoria: 'Latas', name:"Lata Honey", price: 160, photo: Foto2, alterna:"Honey"},
    {id: '3', categoria: 'Latas', name:"Lata Irish Red", price: 160, photo: Foto3, alterna:"Irish Red"},
    {id: '4', categoria: 'Latas', name:"Lata Red Ipa", price: 180, photo: Foto4, alterna:"Red Ipa"},
    {id: '5', categoria: 'Latas', name:"Lata Summer Ipa", price: 180, photo: Foto5, alterna: "Summer Ipa"},
    {id: '6', categoria: 'Pack', name:"Pack Canchero 24U", price: 3100, photo: Foto6, alterna:"Pack Canchero"},
    {id: '7', categoria: 'Pack', name:"Pack Fiestero 48U", price: 6000, photo: Foto7, alterna:"Pack Fiestero"},
    {id: '8', categoria: 'Pack', name:"Pack Lupuladas 6U", price: 990, photo: Foto8, alterna:"Pack lupuladas"},
    {id: '9', categoria: 'Lata', name:"Lata Cream Stout", price: 170, photo: Foto9, alterna:"Cream Stout"},
    {id: '10', categoria: 'Lata', name:"Lata Equinox", price: 190, photo: Foto10, alterna:"Equinox"},
    {id: '11', categoria: 'Lata', name:"Lata Weisse", price: 190, photo: Foto11, alterna:"Weisse"},
];

export const task = new Promise( (res,rej) => {
    let condition=true;
    if (condition) {
        setTimeout( ()=>{
            res(productos)
        }, 3000);
        /* res(productos); */
    } else {
        rej('404 not found.');
    }
});