import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import axios from "axios"
const Home = () => {

  const [fullName, setFullName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [mobile, setMobile] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await axios.post('/users',{
    fullName: fullName,
    vehicle: vehicle,
    mobile: mobile
  })
  .then((res) => {
     console.log(res);
     console.log(res.data)
  })
  .catch((error) =>{
    console.log(error);
  })
 

}

  return (
    <div className="home mt-4">
      <Container>
        <Form className="mt-2" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Vehicle</Form.Label>
            <Form.Control
              type="text"
              placeholder="Vehicle Name"
              onChange={(e) => {
                setVehicle(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile Number"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="warning"
            type="submit"
            className="col-lg-6 mb-2 btn "
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Home;
