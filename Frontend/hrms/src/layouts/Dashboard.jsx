import React from 'react'
import Sidebar from './Sidebar'
import JobAdvertList from "../pages/JobAdvertList"
import { Row,Container,Col } from 'react-bootstrap'

export default function Dashboard() {
  return (
    <div>
      <Container>
          <Row>
        <Col sm={3}><Sidebar/></Col>
        <Col sm={9}><JobAdvertList/></Col>
      </Row>
        </Container>
    </div>
  )
}
