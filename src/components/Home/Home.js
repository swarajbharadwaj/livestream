import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const Home = () => {
  const [value, setValue] = useState();
  console.log("value", value);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/room/${value}`);
  };
  return (
   
     <div class="container">
     <div class="login-box">
            <form >
                   <div class="page-box">
                          <div class="login-tittle">
                          <h2>Login</h2>
                          <p>Please Enter your roomid to continue</p>
                          </div>
                          <div class="page email-page">
                                 <div class="input-box">
                                       <input type="text" class="email"
                                      autofocus required placeholder="enter your room id" onChange={(e) => setValue(e.target.value)}/>
                                      
                                 </div>
                              
                              
                               <div class="bttn-box">
                               
                                 <button class="bttn-next" onClick={handleClick}>join</button>
                               </div>
                          </div>
                          </div>
                          </form>
                         </div>
                         </div>

);
}

export default Home;
