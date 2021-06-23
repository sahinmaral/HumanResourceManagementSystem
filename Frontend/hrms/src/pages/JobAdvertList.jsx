import {React,useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'
import JobAdvertService from '../services/jobAdvertService'

export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])


    //componentDidMount ve componentDidUpdate birleşimi
    //[] kısmı aslında componentDidUpdate kısmıdır
    useEffect(()=>{
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result=>setJobAdverts(result.data.data))
      },[])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>İş pozisyonu</th>
                        <th>Şirket Adı</th>
                        <th>Şehir</th>
                        <th>Maksimum maaş</th>
                        <th>Minimum maaş</th>
                        <th>Deadline</th>
                        
                    </tr>
                </thead>
                <tbody> 
                        {
                            jobAdverts.map(jobAdvert => (
                                <tr key={jobAdvert.id}>
                                    <td>{jobAdvert.id}</td>
                                    <td>{jobAdvert.jobPositionName}</td>
                                    <td>{jobAdvert.companyName}</td>
                                    <td>{jobAdvert.cityName}</td>
                                    <td>{jobAdvert.maxSalary} TL</td>
                                    <td>{jobAdvert.minSalary} TL</td>                               
                                    <td>{jobAdvert.deadline}</td>
                                    
                                    </tr>
                            ))
                        }          
                </tbody>
            </Table>
        </div>
    )
}
