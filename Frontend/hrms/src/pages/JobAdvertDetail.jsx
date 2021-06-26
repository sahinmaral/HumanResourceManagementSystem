import { React, useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import JobAdvertService from '../services/jobAdvertService'

export default function JobAdvertDetail() {

    let { id } = useParams()

    const [jobAdvert, setJobAdvert] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdvertById(id).then(result => setJobAdvert(result.data.data))
    }, [])

    return (
        <div>
            <Card border="primary">
                <Card.Header>{jobAdvert.jobPositionName}</Card.Header>
                <Card.Body>
                    <Card.Title>{jobAdvert.companyName}</Card.Title>
                    Şehir : {jobAdvert.cityName}<br />
                    Çalışma alanı : {jobAdvert.workingPlace}<br />
                    Çalışma saati : {jobAdvert.workingTime}<br />
                    Bitiş tarihi : {jobAdvert.deadline}<br />
                    İşe alınacak eleman sayısı : {jobAdvert.countOfReceivableCandidate}<br />
                    İş Gereksinimleri : {jobAdvert.jobRequirements}  <br /> <br />

                    <Button variant="success">Başvur</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
