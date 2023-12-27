import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './LandingPage.css'
import { Button } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                    <div>
                        <h1 className='title'>Welcome to My app 1.1</h1>
                        <p className='subtitle'>content.................content</p>
                    </div>
                    <div className='ButtonContainer'>
                        <a href='/login'>
                            <Button size='lg' className='landingbutton'>
                                Login
                                </Button>
                        </a>
                        <a href='/register'>
                            <Button size='lg' className='landingbutton' variant='outline-primary'>
                                Signup
                                </Button>
                        </a>

                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage