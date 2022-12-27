import {Component} from 'react'
import '../styles/App.css';
import '../styles/Personal.css';

class PersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personal: {},
    }

    this.handleChange = this.handleChange.bind(this)
    this.personalForm = this.personalForm.bind(this)
    this.personalInfo = this.personalInfo.bind(this)
    this.toggleView = this.toggleView.bind(this)

  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      personal: { name: e.target.name.value, 
                  email: e.target.email.value, 
                  phone: e.target.phone.value
      }
    })

    this.toggleView()
  }

  toggleView() {
    document.getElementById('personal-form').classList.toggle('hidden')
    document.getElementById('personal-info').classList.toggle('hidden')
  }

  personalForm() {
    return(
      <form id="personal-form" onSubmit={this.handleChange}>
        <label for="name">Name</label>
        <input type='text' name="name" id="name" />

        <label for="email">email</label>
        <input type='email' name="email" id="email" />

        <label for="phone">phone</label>
        <input type='tel' name="phone" id="phone" />
        
        <input type="submit" class="btn "/>
      </form>
    )
  }

  personalInfo() {
    return (
      <div id="personal-info" class="hidden">
        <div>{this.state.personal.name}</div>
        <div>{this.state.personal.email}</div>
        <div>{this.state.personal.phone}</div>

        <button onClick={this.toggleView}>Edit</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <this.personalForm />
        <this.personalInfo />
      </div>
    );
  }
}

export default PersonalInfo;
