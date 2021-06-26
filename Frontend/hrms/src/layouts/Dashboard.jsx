import React from 'react'
import Sidebar from './Sidebar'
import JobAdvertList from "../pages/JobAdvertList"
import { Row, Container, Col } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import JobAdvertDetail from '../pages/JobAdvertDetail'
import AddJobAdvertisement from '../pages/AddJobAdvertisement'

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}><Sidebar /></Col>
          <Col sm={9}>
            <Route exact path="/"></Route>
            <Route exact path="/jobAdverts" component={JobAdvertList}></Route>
            <Route path="/jobAdverts/:id" component={JobAdvertDetail}></Route>
            <Route exact path="/addJobAdvertisement" component={AddJobAdvertisement}></Route>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
