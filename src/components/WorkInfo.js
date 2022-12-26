import {Component} from 'react'
import '../styles/App.css';
import '../styles/Work.css';


class WorkInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      work: {},
    }

    this.workInfo = this.workInfo.bind(this)
    this.workForm = this.workForm.bind(this)
    this.toggleView = this.toggleView.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  workInfo() {
    console.log(this.state.work)
    return (
      <div id="work-info" class="hidden">
        <div>{this.state.work.name}</div>
        <div>{this.state.work.position}</div>
        <div>{this.state.work.start}</div>
        <div>{this.state.work.end}</div>
        <div>{this.state.work.tasks}</div>
      </div>
    )
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      work: { name: e.target.companyname.value, 
                position: e.target.position.value, 
                start: e.target.startdate.value,
                end: e.target.quitdate.value,
                tasks: e.target.tasks.value
      }
    })

    this.toggleView()
  }

  toggleView() {
    document.getElementById('work-form').classList.add('hidden')
    document.getElementById('work-info').classList.remove('hidden')
  }

  workForm() {
    return(
      <form id='work-form' onSubmit={this.handleChange}>
        <div class="container">
          <div id="work-form">
            <label for="companyname">company name</label>
            <input type='text' name="companyname" id="companyname" />
            <label for="position">position title</label>
            <input type='text' name="position" id="position" />
            <label for="startdate">Start date</label>
            <input type='date' name="startdate" id="startdate" />
          
            <label for="quitdate">Quitting date</label>
            <input type='date' name="quitdate" id="quitdate" />
          </div>

          <div id="task-container">
            <label for="tasks">tasks</label>
            <input type='textarea' rows="40" cols="30" name="tasks" id="tasks" />
            <input type="submit" class="btn "/>
          </div>
        </div>

      </form>
    )
  }

  render() {
    return (
      <div>
        <this.workForm />
        <this.workInfo />
      </div>
    );
  }
}

export default WorkInfo;
