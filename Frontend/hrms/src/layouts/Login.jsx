import React from 'react'
import { Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    return (
        <div>
            <Nav>
                <Nav.Link href="#features">
                    <Button variant="primary">
                        Profil  <FontAwesomeIcon icon={faUser} />
                    </Button>
                </Nav.Link>
            </Nav>
        </div>
    )
}
