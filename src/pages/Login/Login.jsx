import Form from 'react-bootstrap/Form';
import "./Login.css"
import { useNavigate } from 'react-router-dom';


function Login() {
   const navigate = useNavigate()

  return (
    <div className='loginbox'>
      <div className='loginblur'>
           <div className='login'>
             <div className='loginhead'>
                <h3> Sign In With RecyclePay</h3>
             </div>
                  <div className='logininput'>
                    <div className='inputholder'>
                      <input type="text" placeholder='Email'/>
                    </div>
                    <div className='inputholder'>
                      <input type="text" placeholder='Password'/>
                    </div>
                  </div>
                  <div className='buttlogin'>
                  <button onClick={()=> navigate("/Pick")}> Sign In</button>
                  <p onClick={()=> navigate("/forgetpassword")}> Forgot Password?</p>
                  </div>

           </div>
      </div>
       </div>
  )
}

export default Login;