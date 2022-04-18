// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem/index'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="page-container">
          <h1 className="app-heading">FAQs</h1>
          <ul className="questions-container">
            {faqsList.map(eachList => (
              <FaqItem key={eachList.id} details={eachList} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
