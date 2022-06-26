export const Character = ({character}) => {
    return(
        <div className="card card-body text-center bg-dark fw-bold p-5 m-2 shadow-xl">
            <h2>{character.name}</h2>
            <img src={character.image} className="img-fluid rounded-pill" alt={character.name}/>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <span className="bg-light text-dark">{character.origin.name}</span>
        </div>
    )
}