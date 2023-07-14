// Write your code here.
import './index.css'

const NavBar = props => {
    const {isGameFinished, score, topScore} = props
    
    return (
        <nav className="navbar-container">
            <div className="navbar-logo-section">
                <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji logo" className="game-logo"/>
                <h1 className="game-logo-heading">Emoji Game</h1>
            </div>
            {
                !isGameFinished && (<div className="navbar-status-section">
                    <p className="score-status">Score: {score}</p>
                    <p className="score-status">Top Score: {topScore}</p>
                </div>)
            }
        </nav>
    )
}


export default NavBar