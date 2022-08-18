import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
padding-top: 100px;
button,
input {
  border: none;
  outline: none;
}

/****************
      FORM
*****************/
.signup {
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

h1 {
  text-align: center;
  color: #a4243b;
}
h2 {
  text-align: center;
  font-size: 1.2rem;
  font-weight: lighter;

  margin-bottom: 40px;
}

h2 span {
  text-decoration: underline;
  cursor: pointer;
  color: #a4243b;
}

/*  Field */
.signup__field {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-bottom: 50px;
}

.signup__field:before {
  content: "";
  display: inline-block;
  position: absolute;
  width: 0px;
  height: 2px;
  background: #a4243b;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s ease;
}

.signup__field:hover:before {
  width: 100%;
}

/*  Input */
.signup__input {
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  padding: 10px 2px 0;
  border-bottom: 2px solid #e0e0e0;
}

/*  Label */
.signup__label {
  color: #bdbdbd;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.signup__input:focus + .signup__label,
.signup__input:valid + .signup__label {
  top: 0;
  font-size: 1rem;
  background-color: white;
}

/*  Button */
button {
  background: #a4243b;
  color: white;
  padding: 12px 0;
  font-size: 1.2rem;
  border-radius: 25px;
  cursor: pointer;
}

button:hover {
  background: #4b111b;
}
    
`

function Login() {
  return (
    <Wrapper>
             <form class="signup" onsubmit="return false" autocomplete="off">
  <h1>Login to Sparks</h1>
  <h2>Dont have an account? <span><Link to='/create'>Sign Up</Link></span></h2>

  <div class="signup__field">
    <input class="signup__input" type="email" name="email" id="email" required />
    <label class="signup__label" for="email">Email</label>
  </div>

  <div class="signup__field">
    <input class="signup__input" type="password" name="password" id="password" required />
    <label class="signup__label" for="password">Password</label>
  </div>

  
  

  <button>Login</button>
</form>
    </Wrapper>
  )
}

export default Login