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
    {id: '1', categoria: 'Latas', name:"Lata Golden Ale", price: 160, photo: Foto1, alterna:"Golden", stock:1000, detail:"De intensidad promedio a moderadamente fuerte. La tomabilidad y una cualidad refrescante son componentes críticos del estilo."},
    {id: '2', categoria: 'Latas', name:"Lata Honey", price: 160, photo: Foto2, alterna:"Honey", stock:1000, detail:"Lo característico de la miel es su aporte en la bebida respecto al sabor dulce y al aroma típico de ella."},
    {id: '3', categoria: 'Latas', name:"Lata Irish Red", price: 160, photo: Foto3, alterna:"Irish Red", stock:1000, detail:"Es una cerveza de fermentación alta, fácil de beber, tiene un color ámbar-rojizo, transparente y con una espuma blanquecina a color canela de retención media. Su sabor es bastante neutral pero inclinado hacia las maltas, puede contener algunas notas a caramelo o bizcocho, históricamente más derivadas del proceso de elaboración que del uso de maltas caramelizadas. El aroma es dulce a grano o caramelo tostado y con muy baja o ninguna presencia de lúpulo que de existir le otorgaría notas florales o terrosas. Tiene un cuerpo medio, de final medio-seco con notas amargas por la malta tostada que junto a su graduación alcohólica moderada oscila entre 3,8 y el 5 %, invita a beber. Algunas versiones americanas exhiben mayor grado alcohólico y una “reinvención” del estilo tradicional en Irlanda está apostando por otorgarles mayor amargor."},
    {id: '4', categoria: 'Latas', name:"Lata Red Ipa", price: 180, photo: Foto4, alterna:"Red Ipa", stock:1000, detail:"Un estilo moderno derivado de una IPA Americana, pero con mayor sabor a malta caramelo similar a una Amber Ale. Tan lupulada como la IPA Americana, amarga y moderadamente fuerte añadiendo mayor carácter a malta con algo de caramelo, toffee y/o frutos secos. Conserva el final seco y el cuerpo magro que hace a las IPA tan bebibles, una IPA Roja es un poco más sabrosa y maltosa que una IPA Americana sin ser dulce o pesada. El color varía del rojizo-ámbar a rojo-cobre debiendo ser clara aunque las versiones con dry hopping suelen presentar más turbidez. De espuma blanca a crema de buena retención."},
    {id: '5', categoria: 'Latas', name:"Lata Summer Ipa", price: 180, photo: Foto5, alterna: "Summer Ipa", stock:1000, detail:"Con características cítricas, refrescantes, de baja graduación alcohólica (3,9-5,1%) y color dorado-ámbar."},
    {id: '6', categoria: 'Pack', name:"Pack Canchero 24U", price: 3100, photo: Foto6, alterna:"Pack Canchero", stock:1000, detail:"Pack para compartir."},
    {id: '7', categoria: 'Pack', name:"Pack Fiestero 48U", price: 6000, photo: Foto7, alterna:"Pack Fiestero", stock:1000, detail:"Pack para compartir."},
    {id: '8', categoria: 'Pack', name:"Pack Lupuladas 6U", price: 990, photo: Foto8, alterna:"Pack lupuladas", stock:1000, detail:"Pack para degustar y compartir."},
    {id: '9', categoria: 'Latas', name:"Lata Cream Stout", price: 170, photo: Foto9, alterna:"Cream Stout", stock:1000, detail:"Cerveza con un remolino de tostado, café (resultado de un cold brew de granos Brasil Catuai), chocolate amargo y leves notas dulces (gracias a un sutil agregado de lactosa) que se mezclan en un equilibrio intenso pero muy fácil de tomar."},
    {id: '10', categoria: 'Latas', name:"Lata Equinox", price: 190, photo: Foto10, alterna:"Equinox", stock:1000, detail:"Se caracteriza por su perfil marcado de lúpulo Equinox.Este interesante lúpulo americano puesto al mercado en 2015, ofrece notas de fruta tropical como el Maracuyá y pero también de pimienta verde."},
    {id: '11', categoria: 'Latas', name:"Lata Weisse", price: 190, photo: Foto11, alterna:"Weisse", stock:1000, detail:"Cerveza tipo Belgian Witbier con trigo de cremosidad característica. En su aroma predomina la cáscara de naranja y el coriandro. Una cerveza de una complejidad en aromas que resulta muy fácil de tomar por su elevada refrescancia,  bajo amargor y cuerpo liviano."},
];

export default function task () {
    let condition=true;
    return new Promise ( (res,rej) => {
        if (condition) {
            setTimeout( ()=>{
                res(productos)
            }, 3000);
            /* res(productos); */
        } else {
            rej('404 not found.');
        }
    }
)};