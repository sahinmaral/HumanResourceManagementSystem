import React from 'react'
import { ListGroup } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <ListGroup>
            <Link to={`/`}><ListGroup.Item action>Anasayfa</ListGroup.Item></Link>
            <Link to={`/jobAdverts`}><ListGroup.Item action>İlanlar</ListGroup.Item></Link>
            </ListGroup>
        </div>
    )
}
