import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Characters from '../Characters'
import './index.css'

class CharacterCounter extends Component {
  state = {nameInput: '', CharacterList: []}

  onChangeInput = event => {
    this.setState({nameInput: event.target.value})
  }

  submitButton = event => {
    event.preventDefault()
    const {nameInput} = this.state
    const count = nameInput.length
    const newCharacterCounter = {
      id: uuidV4(),
      name: nameInput,
      count,
    }
    this.setState(prevState => ({
      nameInput: '',
      CharacterList: [...prevState.CharacterList, newCharacterCounter],
    }))
  }

  render() {
    const {CharacterList, nameInput} = this.state
    const countsLength = CharacterList.length
    return (
      <div className="app-container">
        <div className="character-count-card">
          <div className="counts-card">
            <h1 className="heading">Count the characters like a Boss...</h1>
            <ul className="ul-counter">
              {countsLength > 0 ? (
                CharacterList.map(each => (
                  <Characters Details={each} key={each.id} />
                ))
              ) : (
                <img
                  className="image"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              )}
            </ul>
          </div>
          <div className="characters-inputs-card">
            <h1 className="characters-heading">Character Counter</h1>
            <form className="input-card" onSubmit={this.submitButton}>
              <input
                className="input"
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                value={nameInput}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
