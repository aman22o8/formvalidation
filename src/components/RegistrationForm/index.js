// Write your JS code here
import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    displaysubscribe: false,
    isactive1: true,
    isactive2: true,
  }

  firstchange = event => {
    this.setState({firstname: event.target.value})
  }

  lastchange = event => {
    this.setState({lastname: event.target.value})
  }

  getfirst = event => {
    // const { username } = this.state;
    if (event.target.value === '') {
      this.setState({isactive1: false})
    } else {
      this.setState({isactive1: true})
    }
  }

  getlast = event => {
    // const { username } = this.state;
    if (event.target.value === '') {
      this.setState({isactive2: false})
    } else {
      this.setState({isactive2: true})
    }
  }

  firstnamefunction = () => {
    const {firstname, isactive1} = this.state
    const result1 = isactive1 ? '' : 'onblurinputclass'

    return (
      <>
        <label className="enter" htmlFor="first">
          FIRST NAME
        </label>
        <input
          onBlur={this.getfirst}
          onChange={this.firstchange}
          id="first"
          value={firstname}
          type="text"
          placeholder="Firstname"
          className={`input_details ${result1}`}
        />
      </>
    )
  }

  lastnamefunction = () => {
    const {lastname, isactive2} = this.state
    const result2 = isactive2 ? '' : 'onblurinputclass'
    return (
      <>
        <label className="enter" htmlFor="last">
          LAST NAME
        </label>
        <input
          onBlur={this.getlast}
          onChange={this.lastchange}
          id="last"
          value={lastname}
          type="text"
          placeholder="Lastname"
          className={`input_details ${result2}`}
        />
      </>
    )
  }

  submitting = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({displaysubscribe: true, firstname: '', lastname: ''})
    } else if (firstname === '' && lastname !== '') {
      this.setState({isactive1: false})
    } else if (firstname !== '' && lastname === '') {
      this.setState({isactive2: false})
    } else {
      this.setState({isactive1: false, isactive2: false})
    }
  }

  clicking = () => {
    this.setState({displaysubscribe: false})
  }

  render() {
    const {displaysubscribe, isactive1, isactive2} = this.state
    return (
      <div className="bg_container">
        <h1 className="main_heading">Registration</h1>
        <div className="my_container">
          {displaysubscribe ? (
            <div className="success_container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="sunscribed"
              />
              <p className="successfully">Submitted Successfully</p>
              <button
                onClick={this.clicking}
                className="submitanother"
                type="button"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={this.submitting} className="form_container">
              <div className="input_details_container">
                {this.firstnamefunction()}
                {isactive1 ? '' : <p className="error">Required</p>}
              </div>
              <div className="input_details_container">
                {this.lastnamefunction()}
                {isactive2 ? '' : <p className="error">Required</p>}
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
