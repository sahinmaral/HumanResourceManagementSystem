import React from 'react'
import { Nav } from 'react-bootstrap'
import {Button} from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Nav>
            <Nav.Link> <Button primary onClick={signIn}>Giriş Yap</Button></Nav.Link>
            <Nav.Link> <Button primary>Kayıt ol</Button></Nav.Link>
            </Nav>
        </div>
    )
}
