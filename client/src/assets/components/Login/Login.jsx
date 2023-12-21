import React, { useState, useEffect } from 'react'
import "./Login.css"

const Login = () => {

    // const [customer,setCustomer]=useState({
    //     username:'',
    //     password:''
    // })






    return (
        <>
        <div className='main'>
            <div className="box1">
                <h2>Login</h2>
                <>
  {/* Hello world */}
  
  
  <form>
    
    <div className="mb-3">
    <div className="form-group text-center">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
    
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        style={{padding:"10px"}}
      />
        </label>
     </div>
    </div>
    <div className="form-group text-center">
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        style={{padding:"10px"}}
      />
      </label>
      </div>
    </div>

    <div className="form-group text-center">
    <button type="submit" style={{backgroundColor:"black",color:"white"}} className="btn ">
      Submit
    </button>
    </div>
  </form>
</>

            </div>
        </div>
        </>
    )
}

export default Login;




