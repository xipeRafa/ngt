import { Button, Form, Modal, Alert, Row, Col, Select } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      210,
      280,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });




export const AddAuction = ({ setAuction }) => {
  const [lati, setLati]=useState('no-gps')
  const [longi, setLongi]=useState('no-gps')
  console.log(longi)
  console.log(lati)
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }

  
  function showPosition(position) {
    console.log("Latitude: ", position.coords.latitude)
    setLati(position.coords.latitude)

    console.log("Longitude: ", position.coords.longitude)
    setLongi(position.coords.longitude)
  }
  
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.")
        break;
    }
  }
  
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const itemTitle = useRef();
  const itemDesc = useRef();
  const itemImage = useRef();
  const itemCategorie = useRef();

  const { currentUser } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const imgTypes = ["image/png", "image/jpeg", "image/jpg"];

  const onResize = async (event) => {
    const file = event.target.files[0];
    const image = await resizeFile(file);

    fetch(image)
    .then(res => res.blob())
    .then(blob => {
      const file = new File([blob], Date.now()+'.jpeg',{ type: "image/jpeg" })
      setImg(file)
    })
  };

  const[img, setImg]=useState()


  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    if (!imgTypes.includes(itemImage.current.files[0].type)) {
      return setError("Please use a valid image");
    }

    console.log('imagen:', itemImage.current.files[0])

    let currentDate = new Date();
    let dueDate = currentDate.setHours(
      currentDate.getHours()
    );

    let newAuction = {
      email: currentUser.email,
      title: itemTitle.current.value,
      description: itemDesc.current.value,
      duration: dueDate,
      itemImage: img,
      latitude:lati,
      longitude:longi,
      categorie: itemCategorie.current.value,
      completed: false
    };

    setAuction(newAuction);
    closeForm();
  };

  return (
    <>
      <div className="col d-flex justify-content-center my-3 ">
        <div onClick={openForm} className="btn btn-success mx-5 w-100">
           Guardar Viaje
        </div>
      </div>
      <Modal centered show={showForm} onHide={closeForm} style={{width: '96%', marginLeft: '1%'}} >
        <form onSubmit={submitForm} style={{backgroundColor:'rgb(222,222,222)'}}>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
            <Col className="border mb-4 btn bg-primary mx-2 p-2 text-center text-white">
                  {currentUser.email.slice(0, -10)} 
              </Col>
            </Row>
            <Row>
              <Col className="mb-4">
                <Form.Group>
                  <Form.Label>Unidad</Form.Label>
                  <Form.Control type="text" required ref={itemTitle} />
                </Form.Group>
              </Col>

              </Row>
              <Row>
            <Col className="mb-4">
                <Form.Label>Cliente</Form.Label>
                <Form.Control as="select" multiple={false} ref={itemCategorie}>
                  <option value="oxxo">OXXO</option>
                  <option value="otro">Otro</option>
                  <option value="taller">Taller</option>
                  <option value="pago en efectivo">Pago en Efectivo</option>
                </Form.Control >
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control   as="textarea" placeholder="comentarios..." 
                                  style={{ height: '80px',resize:'none' }} required ref={itemDesc} />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col>
              <Form.Label></Form.Label>
                <Form.Group >
                  <Form.File
                    label="Cargar Foto"
                    custom
                    ref={itemImage}
                    required
                    onChange={onResize}
                  />
                </Form.Group>
              </Col>
            </Row>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
