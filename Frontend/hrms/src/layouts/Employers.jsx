import React, { useState , useEffect} from 'react'
import { ListGroup } from 'react-bootstrap'
import EmployerService from "../services/employerService"


export default function Employers() {

    const [employers,setEmployers] = useState([])

    useEffect(()=>{
        let employerService = new EmployerService()
        employerService.getEmployers().then(result=>setEmployers(result.data.data))
    },[])


    return (
        <div>
            <ListGroup>
                {
                employers.map(employer=>(
                    <ListGroup.Item action>{employer.companyName}</ListGroup.Item>
                ))} 
            </ListGroup>
        </div>
    )
}
