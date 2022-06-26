import { Character } from "./Character"
import {useState,useEffect} from "react"

export const CharacterList = () => {
    const[characters,setCharacters]=useState([]);
    const[isLoading,setIsLoading]=useState(true);
    const[page,setPage]=useState(1);
    function NavPage(){
        return(
            <header>
                <h3 className="text-center">{page}</h3>
                <section className="d-flex justify-content-between w-100 my-3">
                    <button onClick={()=>setPage(page-1)} className="btn btn-primary rounded shadow btn-md">Prev</button>
                    <button onClick={()=>setPage(page+1)}className="btn btn-primary rounded shadow btn-md">Next</button>
                </section>
            </header>
        )
    }
    useEffect(()=>{
        async function fetchData(){
        const response=await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data=await response.json();
        setIsLoading(false);
        setCharacters(data.results);
        }
        fetchData();
    },[page]);
    
    
    return(
        <div className="container bg-dark">
            <NavPage/>
            {
                isLoading?(
                    <div className="container text-center bg-dark">
                        <div className="spinner-border text-primary fs-2" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    ):(
                        <div className="row">
                        {
                        characters.map(character=>(
                            <div key={character.id} className="col-md-4">
                            <Character character={character}/>
                            </div>
                            ))
                        }
                        </div>
                    )
            }
            {
                page>42 || page<1?(
                    <div><h1>Not Found more Characters</h1></div>
                ):(
                    <NavPage/>
                )
            }
        </div>
    )
}