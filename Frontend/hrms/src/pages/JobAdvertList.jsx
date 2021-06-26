import { React, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import JobAdvertService from '../services/jobAdvertService'
import { Button } from 'semantic-ui-react'

export default function JobAdvertList() {
    const [jobAdverts, setJobAdverts] = useState([])


    //componentDidMount ve componentDidUpdate birleşimi
    //[] kısmı aslında componentDidUpdate kısmıdır
    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getActiveJobAdverts().then(result => setJobAdverts(result.data.data))
    }, [])

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
                        <th>İncele</th>
                        <th>Başvur</th>
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
                                <td><Link to={`/jobAdverts/${jobAdvert.id}`}><Button color="yellow">İncele</Button></Link></td>
                                <td><Button color="green">Başvur</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div >
    )
}
