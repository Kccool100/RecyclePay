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
              <div className='logintext'> 
                <h3> Sign In With RecyclePay</h3>
              </div>
                  </div>
                  <div className='logininput'>
                    <div className='inputholder'>
                      <div className='inputtext'> <p> Email</p></div>
                      <input type="text" />
                    </div>
                    <div className='inputholder'>
                      <div className='inputtext'> <p> Password</p></div>
                      <input type="text" />
                    </div>
                  </div>
                  <div className='buttlogin'>
                  <button onClick={()=> navigate("/Pick")}> Sign In</button>
                  <p onClick={()=> navigate("/forgetpassword")}> Forget Password?</p>
                  </div>

           </div>
      </div>
       </div>
  )
}

export default Login;