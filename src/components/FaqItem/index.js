import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isHidden: true}

  onClickBtn = () => {
    this.setState(prevState => ({
      isHidden: !prevState.isHidden,
    }))
  }

  render() {
    const {isHidden} = this.state
    const {details} = this.props
    const {questionText, answerText} = details

    const btnImage = isHidden
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    const altText = isHidden ? 'plus' : 'minus'
    return (
      <li className="item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickBtn}>
            <img src={btnImage} alt={altText} className="btn-icon" />
          </button>
        </div>
        {!isHidden && (
          <>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}

export default FaqItem
