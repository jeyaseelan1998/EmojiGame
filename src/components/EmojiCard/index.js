// Write your code here.
import './index.css'

const EmojiCard = props => {
    const {emojiDetails, onSelectEmoji} = props
    const {id, emojiName, emojiUrl} = emojiDetails

    const onHandleClick = () => {
        console.log(id)
        onSelectEmoji(id)
    }

    return (
        <li className="emoji-container">
            <button className="button" type="button" onClick={onHandleClick}>
                <img className="emoji" alt={emojiName} src={emojiUrl}/>
            </button>
        </li>
    )
}

export default EmojiCard