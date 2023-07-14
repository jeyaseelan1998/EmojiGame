// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
    const {score, winningScore, onPlayAgain} = props
    const gameReultText = score === winningScore ? 'You Won' : 'You Lose'
    const imgUrl = `https://assets.ccbp.in/frontend/react-js/${score === winningScore ? 'won' : 'lose'}-game-img.png`

    const onClickHandle = () => onPlayAgain()

    return (
        <div className='win-or-lose-card-container'>
            <div className='win-or-lose-result-container'>
                <h1 className='win-or-lose-result'>{gameReultText}</h1>
                <p className='win-or-lose-result-score-text'>{score === winningScore ? 'Best Score' : 'Score'}</p>
                <p className='win-or-lose-result-score'>{score}/{winningScore}</p>
                <button type='button' className='play-again-btn' onClick={onClickHandle}>Play Again</button>
            </div>
            <img src={imgUrl} alt='win or lose' className='win-or-lose-image'/>
        </div>
    )
}

export default WinOrLoseCard