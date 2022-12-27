import '../styles/App.css';
import '../styles/Personal.css';
import React, { useState } from "react";

const PersonalInfo = () => {
  const [personal, setPersonal] = useState({})

  const handleChange = (e) => {
    e.preventDefault()

    console.log(e.target.name.value)

    setPersonal({name: e.target.name.value,
                email: e.target.email.value, 
                phone: e.target.phone.value
    })

    toggleView()
  }

  const toggleView = () => {
    document.getElementById('personal-form').classList.toggle('hidden')
    document.getElementById('personal-info').classList.toggle('hidden')
  }

  return (
    <div>
      <form id="personal-form" onSubmit={handleChange}>
        <label for="name">Name</label>
        <input type='text' name="name" id="name" />

        <label for="email">email</label>
        <input type='email' name="email" id="email" />

        <label for="phone">phone</label>
        <input type='tel' name="phone" id="phone" />
        
        <input type="submit" class="btn "/>
      </form>
      

      <div id="personal-info" class="hidden">
        <div>{personal.name}</div>
        <div>{personal.email}</div>
        <div>{personal.phone}</div>

        <button onClick={toggleView}>Edit</button>
       </div>
    </div>
  )
}

export default PersonalInfo;
