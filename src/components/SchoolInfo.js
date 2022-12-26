import {Component} from 'react'
import '../styles/App.css';
import '../styles/School.css';

class SchoolInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      school: {},
    }

    this.SchoolInfo = this.SchoolInfo.bind(this)
    this.SchoolForm = this.SchoolForm.bind(this)
    this.toggleView = this.toggleView.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      school: { name: e.target.schoolname.value, 
                major: e.target.major.value, 
                year: e.target.year.value
      }
    })

    this.toggleView()
  }

  SchoolInfo() {
    return (
      <div id="school-info" class="hidden">
        <div>{this.state.school.name}</div>
        <div>{this.state.school.major}</div>
        <div>{this.state.school.year}</div>
      </div>
    )
  }

  toggleView() {
    document.getElementById('school-form').classList.add('hidden')
    document.getElementById('school-info').classList.remove('hidden')
  }

  SchoolForm() {
    return(
      <form id="school-form" onSubmit={this.handleChange}>
        <label for="schoolname">School Name</label>
        <input type='text' name="schoolname" id="schoolname" />

        <label for="major">Major</label>
        <input type='text' name="major" id="major" />

        <label for="year">Year of Graduation</label>
        <input type='date' name="year" id="year" />
        
        <input type="submit" class="btn "/>
      </form>
    )
  }

  render() {
    return (
      <div>
        <this.SchoolForm />
        <this.SchoolInfo />
      </div>
    );
  }
}

export default SchoolInfo;
