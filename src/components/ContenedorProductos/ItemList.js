import Item from './Item';

export default function ItemList ({prod}) {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {prod.map( (producto) => <Item producto={producto}/> )}
        </div>
    )
}