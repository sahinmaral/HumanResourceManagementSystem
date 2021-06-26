import { React, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"
import WorkingTimeService from '../services/workingTimeService'
import WorkingPlaceService from '../services/workingPlaceService'
import JobAdvertService from '../services/jobAdvertService'
import CityService from '../services/cityService'
import { Form, Input, Dropdown, Button, TextArea } from 'semantic-ui-react'


export default function AddJobAdvertisement() {

  const [workingTimes, setWorkingTimes] = useState([])
  const [workingPlaces, setWorkingPlaces] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    let workingTimeService = new WorkingTimeService()
    let workingPlaceService = new WorkingPlaceService()
    let jobAdvertService = new JobAdvertService()
    let cityService = new CityService()
    workingTimeService.getWorkingTimes().then(result => setWorkingTimes(result.data.data))
    workingPlaceService.getWorkingPlaces().then(result => setWorkingPlaces(result.data.data))
    cityService.getCities().then(result => setCities(result.data.data))

  }, [])


  const workingTimeOption = workingTimes.map((workingTime, index) => ({
    key: index,
    text: workingTime.name,
    value: workingTime.id,
    name: workingTime.id
  }));

  const workingPlaceOption = workingPlaces.map((workingPlace, index) => ({
    key: index,
    text: workingPlace.name,
    value: workingPlace.id,
    name: workingPlace.id
  }));

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
    name: city.id
  }));



  const validationSchema = Yup.object({
    jobPosition: Yup
      .string()
      .required('İş pozisyonu boş bırakılamaz'),
    workingTimeId: Yup
      .number()
      .required('İş saati kategorisi boş bırakılamaz'),
    workingPlaceId: Yup
      .number()
      .required('İş alanı boş bırakılamaz'),
    countOfCandidate: Yup
      .number()
      .required('Aday alım sayısı boş bırakılamaz'),
    minSalary: Yup
      .number()
      .required('Minimum maaş boş bırakılamaz'),
    maxSalary: Yup
      .number()
      .required('Maksimum maaş boş bırakılamaz'),
    jobRequirements: Yup
      .string()
      .required('İş gereksinimleri boş bırakılamaz')
  });

  const handleChangeSemantic = (prop, value, fieldName) => {
    prop.setFieldValue(fieldName, value);
  };

  const formik = useFormik({

    validationSchema: validationSchema,

    initialValues: {
      cityId: "",
      jobPosition: "",
      workingTimeId: "",
      workingPlaceId: "",
      countOfCandidate: "",
      maxSalary: "",
      minSalary: "",
      jobRequirements: ""
    },

    onSubmit: (values) => {
      console.log(values)
    },

  })

  return (

    <div>


      <h1>İlan ver</h1>

      <Form onSubmit={formik.handleSubmit} style={{ marginLeft: '15em' }}>

        <Form.Group>

          <Form.Field>

            <label>İş pozisyonu</label>

            <Form.Field
              control={Input}
              style={{ width: '200px' }}
              id="jobPosition"
              placeholder="İş pozisyonu"
              onChange={formik.handleChange}
              value={formik.values.jobPosition}
            />

            <label htmlFor="jobPosition" style={{ color: 'darkred' }}>{formik.errors.jobPosition}</label>
          </Form.Field>


          <Form.Field>

            <label>Aday alım sayısı</label>

            <Form.Field
              control={Input}
              placeholder="Aday alım sayısı"
              style={{ width: '200px' }}
              id="countOfCandidate"
              onChange={formik.handleChange}
              value={formik.values.countOfCandidate}
            />

            <label htmlFor="countOfCandidate" style={{ color: 'darkred' }}>{formik.errors.countOfCandidate}</label>

          </Form.Field>

        </Form.Group>

        <Form.Group>
          <Form.Field>

            <label>Minimum maaş</label>

            <Form.Field
              control={Input}
              style={{ width: '200px' }}
              id="minSalary"
              onChange={formik.handleChange}
              placeholder="Minimum maaş"
              value={formik.values.minSalary}
            />

            <label htmlFor="minSalary" style={{ color: 'darkred' }}>{formik.errors.minSalary}</label>

          </Form.Field>


          <Form.Field>

            <label>Maksimum maaş</label>

            <Form.Field
              control={Input}
              style={{ width: '200px' }}
              id="maxSalary"
              placeholder="Maksimum maaş"
              onChange={formik.handleChange}
              value={formik.values.maxSalary}
            />
            <label htmlFor="maxSalary" style={{ color: 'darkred' }}>{formik.errors.maxSalary}</label>

          </Form.Field>

        </Form.Group>


        <Form.Group>
          <Form.Field>
            <label>İş saati kategorisi</label>
            <Form.Select style={{ width: '200px' }}
              placeholder='İş saati kategorisi'
              fluid
              search
              selection
              options={workingTimeOption}
              onChange={(event, data) =>
                handleChangeSemantic(
                  formik,
                  data.value,
                  "workingTimeId"
                )
              }
              value={formik.values.workingTimeId}
            />
          </Form.Field>

          <Form.Field>
            <label>İş alanları</label>
            <Form.Select style={{ width: '200px' }}
              placeholder='İş alanları'
              fluid
              search
              selection
              options={workingPlaceOption}
              onChange={(event, data) =>
                handleChangeSemantic(
                  formik,
                  data.value,
                  "workingPlaceId"
                )
              }
              value={formik.values.workingTimeId}
            />
          </Form.Field>


        </Form.Group>

        <Form.Group>
          <Form.Field>

            <label>İş gereksinimleri</label>

            <Form.Field
              control={TextArea}
              style={{ width: '200px', height: '40px' }}
              id="jobRequirements"
              placeholder="İş gereksinimleri"
              onChange={formik.handleChange}
              value={formik.values.jobRequirements}
            />
            <label htmlFor="jobRequirements" style={{ color: 'darkred' }}>{formik.errors.jobRequirements}</label>

          </Form.Field>

          <Form.Field>

            <label>Şehir</label>
            <Dropdown style={{ width: '200px' }}
              placeholder='Şehir'
              fluid selection search
              options={cityOption}
              onChange={(event, data) =>
                handleChangeSemantic(
                  formik,
                  data.value,
                  "cityId"
                )
              } />
          </Form.Field>

        </Form.Group>


        <br />

        <Button
          variant="contained"
          type="submit"
          disabled={!formik.dirty}
          style={{ marginLeft: '-13em' }}
        >Gönder</Button>


      </Form>



    </div >
  );
}
