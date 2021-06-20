import React from 'react'
import { Nav , Button } from 'react-bootstrap'


export default function Signup() {
    return (
        <div>
            <Nav>
            <Nav.Link href="#features"> <Button variant="outline-primary">Giriş Yap</Button></Nav.Link>
            <Nav.Link href="#features"> <Button variant="outline-secondary">Kayıt ol</Button></Nav.Link>
            </Nav>
        </div>
    )
}
