import Form from 'react-bootstrap/Form';
import "./Login.css"
function Login() {
  return (
    <div className='LoginCon'>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" style={{height:"60px"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" style={{height:"60px"}}/>
      </Form.Group>
      <button type="submit" className="mb-2">
            Submit
      </button>
    </Form>
    </div>
   
  );
}

export default Login;