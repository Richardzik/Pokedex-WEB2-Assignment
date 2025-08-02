import '../App.css'
import pokeballImage from '../assets/pokeball.png';
import pokeballGIF from '../assets/pokeball.gif';
export default function LoadingPage() {
    return (
        <>
            <div className="loading-container">
                <img className='pokeball-loading-image' src={pokeballImage} alt="Loading..." />
                <h1 className='loading-text'>Loading . . .</h1>
            </div>
        </>
    )
}
