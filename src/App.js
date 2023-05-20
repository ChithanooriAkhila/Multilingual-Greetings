import './App.css'
import {Component} from 'react'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  changeActiveId = activeId => {
    console.log(activeId)
    this.setState({activeId})
  }

  handleLanguage = e => {
    this.changeActiveId(e.target.id)
  }

  render() {
    const {activeId} = this.state

    const activeLanguageObj = languageGreetingsList.filter(
      language => language.id === activeId,
    )

    const {imageUrl, imageAltText} = activeLanguageObj[0]

    return (
      <div className="main-container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(language => (
            <li key={language.id}>
              <button
                type="button"
                onClick={this.handleLanguage}
                id={language.id}
                className={
                  activeId === language.id ? 'active-button' : 'button'
                }
              >
                {language.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <img src={imageUrl} alt={imageAltText} className="image" />
        </div>
      </div>
    )
  }
}

export default App
