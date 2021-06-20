import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Sidebar() {
    return (
        <div>
            <ListGroup>
                <ListGroup.Item action>Anasayfa</ListGroup.Item>
                <ListGroup.Item action>İlanlar</ListGroup.Item>
            </ListGroup>
        </div>
    )
}
