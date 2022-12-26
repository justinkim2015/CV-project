import { Component } from 'react';
import './styles/App.css';
import PersonalInfo from './components/PersonalInfo.js'
import SchoolInfo from './components/SchoolInfo'
import WorkInfo from './components/WorkInfo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      personal: {},
      school: {},
      work: {}
    }
  }

  handleInfo(e) {
    e.preventDefault()
    return(
      <div>hi</div>
    )
  }

  render() {
    return (
      <div id='main' className="form">
        <PersonalInfo />
        <SchoolInfo />
        <WorkInfo />
      </div>
    );
  }
}

export default App;
