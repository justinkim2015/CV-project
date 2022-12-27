import '../styles/App.css';
import '../styles/Personal.css';
import React, { useState } from "react";

const SchoolInfo = () => {
  const [school, setSchool] = useState({})

  const handleChange = (e) => {
    e.preventDefault()

    console.log(e.target.name.value)

    setSchool({name: e.target.schoolname.value,
                major: e.target.major.value, 
                year: e.target.year.value
    })

    toggleView()
  }

  const toggleView = () => {
    document.getElementById('school-form').classList.toggle('hidden')
    document.getElementById('school-info').classList.toggle('hidden')
  }

  return (
    <div>
      <div id="school-info" class="hidden">
        <div>{school.name}</div>
        <div>{school.major}</div>
        <div>{school.year}</div>

        <button onClick={toggleView}>Edit</button>
      </div>
      
      <form id="school-form" onSubmit={handleChange}>
        <label for="schoolname">School Name</label>
        <input type='text' name="schoolname" id="schoolname" />

        <label for="major">Major</label>
        <input type='text' name="major" id="major" />

        <label for="year">Year of Graduation</label>
        <input type='date' name="year" id="year" />
        
        <input type="submit" class="btn "/>
      </form>
    </div>
  )
}

export default SchoolInfo;
