import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <div className="margin10 padding10 font-weight600 back-skyblue">
         <Container>
            <Row>
               <Col className="left" >北大情エレ2年情報まとめ</Col>
               <Link to={'/'} >
                  <Col className="" xs={6}>HOME</Col>
               </Link>
               <Col className="right" >osamu</Col>
            </Row>
         </Container>
      </div>
   )
}

export default Navbar
