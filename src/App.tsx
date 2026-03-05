import {useState,useEffect} from 'react'
import {getPokemons} from "./services/api";
import './App.css'
interface DPokemons{
    PID: string;
    PName: string;
    PSprite: string;}
function App() {
    const [error1, setError] = useState<string | null>(null)
    const [listPokemon, setlistPokemon] = useState<DPokemons[]>([]);
    useEffect(()=> {
        const loadPokemon = async (num: number) => {
        // llamado a la url que tarde, metodo GET
        try {// llamar función para hacer un llamado a un endpoint de un API
            const temporaryList: DPokemons[] = [];
            for (let i = 1; i <= num; i++) {
                const data = await getPokemons(i)
                temporaryList.push({
                    PID: data.id,
                    PName: data.name,
                    PSprite: data.sprites.front_default
                });
            }
            setlistPokemon(temporaryList);
        }
        catch (error) {setError(error1)}
        finally {console.log('finally');}}
        loadPokemon(151)}, [])
    console.log(`Lista:`,listPokemon)
    return(
        <>
        <div>
            <table><thead><tr><td><h1>ポケットモンスタ!</h1></td></tr>
            <tr><td><h2>KANTO REGIONAL POKEDEX</h2></td></tr></thead>
            <tbody><tr><td>
            {listPokemon.length === 0 ? (
            //En inglés para agregarle dramatismo, saludos profe.
            <p>There aren't pokemons available.</p>
            )
            : (
            <ul>
                {listPokemon.map((p) => (
                <li key={p.PID}>
                    <h3>Nº: {p.PID} - {p.PName}</h3>
                    <img src={p.PSprite}
                    alt={p.PName}
                    style={{width:'150px'}}/>
                </li>
                ))}
            </ul>
            )}
            </td></tr></tbody></table>
        </div>.
        </>
    )
}
export default App