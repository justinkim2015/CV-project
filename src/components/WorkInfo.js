import '../styles/App.css';
import '../styles/Work.css';
import React, { useState } from "react";

const WorkInfo = () => {
  const [work, setWork] = useState({})

  const handleChange = (e) => {
    e.preventDefault()

    setWork({name: e.target.companyname.value,
             position: e.target.position.value, 
             start: e.target.startdate.value,
             end: e.target.quitdate.value,
             tasks: e.target.tasks.value
    })

    toggleView()
  }

  const toggleView = () => {
    document.getElementById('work-form').classList.toggle('hidden')
    document.getElementById('work-info').classList.toggle('hidden')
  }

  return (
    <div>
      <form id='work-form' onSubmit={handleChange}>
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

      <div id="work-info" class="hidden">
        <div>{work.name}</div>
        <div>{work.position}</div>
        <div>{work.start}</div>
        <div>{work.end}</div>
        <div>{work.tasks}</div>

        <button onClick={toggleView}>Edit</button>
      </div>
    </div>
  )
}

export default WorkInfo;


// import {Component} from 'react'
// import '../styles/App.css';
// import '../styles/Work.css';


// class WorkInfo extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       work: {},
//     }

//     this.workInfo = this.workInfo.bind(this)
//     this.workForm = this.workForm.bind(this)
//     this.toggleView = this.toggleView.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }

//   workInfo() {
//     console.log(this.state.work)
//     return (
//     )
//   }

//   handleChange(e) {
//     e.preventDefault()
//     this.setState({
//       work: { name: e.target.companyname.value, 
//                 position: e.target.position.value, 
//                 start: e.target.startdate.value,
//                 end: e.target.quitdate.value,
//                 tasks: e.target.tasks.value
//       }
//     })

//     this.toggleView()
//   }

//   toggleView() {
//     document.getElementById('work-form').classList.toggle('hidden')
//     document.getElementById('work-info').classList.toggle('hidden')
//   }

//   workForm() {
//     return(
//     )
//   }

//   render() {
//     return (
//       <div>
//         <this.workForm />
//         <this.workInfo />
//       </div>
//     );
//   }
// }

// export default WorkInfo;
