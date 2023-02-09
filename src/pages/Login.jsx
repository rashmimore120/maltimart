import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap'
import {Link} from "react-router-dom"
import '../styles/login.css'

const Login = () => {
  return <Helmet title='Login'>
    <section>
      <Container>
        <Row>
          <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4'>Login</h3>

            <Form className='auth_form'>
              <FormGroup className='form_group'>
                <input type="email" placeholder='Enter your email' />
              </FormGroup>
              <FormGroup className='form_group'>
                <input type="password" placeholder='Enter your password' />
              </FormGroup>
              <button className='buy_btn auth_btn'>Login</button>
              <p>Don't have an account? <link to='/signup'>Create an account</link></p>
            </Form> 
          </Col>
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default Login