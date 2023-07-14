/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    selectedEmojiesList: [],
    topScore: 0,
    isGameFinished: false
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onSelectEmoji = id => {
    const {selectedEmojiesList} = this.state
    if(!selectedEmojiesList.includes(id)) {
      this.setState(prevState => ({
        selectedEmojiesList: [...prevState.selectedEmojiesList, id]
      }))
    } else {
      const score = selectedEmojiesList.length
      this.setState(prevState => ({
        isGameFinished: true,
        topScore: prevState.topScore < score ? score : prevState.topScore,
        selectedEmojiesList:[]
      }))
    }
  }

  render() {
    const {topScore, isGameFinished, selectedEmojiesList} = this.state
    const score = selectedEmojiesList.length
    const shuffledEmojisList = this.getShuffledEmojisList()

    return(
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameFinished={isGameFinished}/>
        <div className="game-container">
          <ul className="emojies-list">
            {
              shuffledEmojisList.map(eachEmoji => <EmojiCard key={eachEmoji.id} emojiDetails={eachEmoji} onSelectEmoji={this.onSelectEmoji}/>)
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame