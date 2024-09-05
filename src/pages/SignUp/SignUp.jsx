import Form from 'react-bootstrap/Form';
import "./SignUp.css"
function SignUp() {
  return (
    <div className='SignUpCon'>
<Form >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
        <button type="submit" className="mb-2">
            Sign Up
        </button>
    </Form>
    </div>
    
  );
}

export default SignUp;