import '../App.css'

export default function AboutPage() {
    return (
        <>
            <div className="about-page-container">
                <h1>Pokédex Project</h1>
                <p>
                    The Pokédex project is a React-based web application that allows users to explore Pokémons from the official PokéAPI.
                    Users can view Pokémon names, images, types, and other essential information in a paginated format.
                    Clicking on a Pokémon card opens up detailed information about that specific Pokémon.
                </p>
            </div>

            <div className="about-page-container">
                <h2>🛠 Behind the Scenes</h2>
                <p>
                    This project is built using <strong>React</strong> with <strong>Vite</strong> for fast and modern front-end development.
                    It uses the <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a> to fetch real-time data about all existing Pokémon.
                    The app is fully client-side rendered and utilizes hooks like <code>useState</code> and <code>useEffect</code> for state management and data fetching.
                </p>
            </div>

            <div className="about-page-container">
                <h2>✨ Features</h2>
                <ul>
                    <li>Live search and browse Pokémon using PokéAPI</li>
                    <li>Paginated list of Pokémon (15 per page)</li>
                    <li>Color-coded types and styled cards based on Pokémon type</li>
                    <li>Responsive layout and hover animations for interactivity</li>
                    <li>Navigation bar with route switching between home and about pages</li>
                    <li>Modular, component-based structure using best React practices</li>
                </ul>
            </div>

            <div className="about-page-container">
                <h2>⚠ Disclaimer</h2>
                <p>
                    This project is created purely for educational and personal learning purposes.
                    It is not affiliated with, endorsed by, or connected to Nintendo, Game Freak, The Pokémon Company, or any official Pokémon entities.
                    All Pokémon data and imagery is sourced from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokéAPI</a>.
                </p>
            </div>
        </>
    )
}
