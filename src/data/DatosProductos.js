import { productos } from './Productos'

export default function task () {
    let condition=true;
    return new Promise ( (res,rej) => {
        if (condition) {
            setTimeout( ()=>{
                res(productos)
            }, 3000);
        } else {
            rej('404 not found.');
            
        }
    }
)};