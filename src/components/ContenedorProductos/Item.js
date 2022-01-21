export default function Item ( {producto} ) {
    
    return (
        <div key={producto.id} className="card m-1">
            <img src={producto.photo} className="card-img-top" alt={producto.alterna}/>
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">${producto.price}</p>
            </div>
        </div>
)
}