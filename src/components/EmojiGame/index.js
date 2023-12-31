/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import { Component } from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    selectedEmojiesList: [],
    topScore: 0,
    isGameFinished: false
  }

  getShuffledEmojisList = () => {
    const { emojisList } = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onSelectEmoji = id => {
    const { selectedEmojiesList } = this.state
    const { emojisList } = this.props

    const score = selectedEmojiesList.length

    if (!selectedEmojiesList.includes(id)) {
      if (emojisList.length - 1 === score) {
        this.setState({
          isGameFinished: true
        })
      }
      this.setState(prevState => ({
        selectedEmojiesList: [...prevState.selectedEmojiesList, id]
      }))
    } else {
      this.setState(prevState => ({
        isGameFinished: true
      }))
    }
  }

  onPlayAgain = () => {
    const { selectedEmojiesList } = this.state
    const score = selectedEmojiesList.length
    this.setState(prevState => ({
      isGameFinished: false,
      selectedEmojiesList: [],
      topScore: prevState.topScore < score ? score : prevState.topScore
    }))
  }

  render() {
    const { topScore, isGameFinished, selectedEmojiesList } = this.state
    const { emojisList } = this.props
    const score = selectedEmojiesList.length
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameFinished={isGameFinished} />
        <div className="game-container">
          {
            isGameFinished ? <WinOrLoseCard score={score} winningScore={emojisList.length} onPlayAgain={this.onPlayAgain} /> :
              <ul className="emojies-list">
                {
                  shuffledEmojisList.map(eachEmoji => <EmojiCard key={eachEmoji.id} emojiDetails={eachEmoji} onSelectEmoji={this.onSelectEmoji} />)
                }
              </ul>
          }
        </div>
      </div>
    )
  }
}

export default EmojiGame