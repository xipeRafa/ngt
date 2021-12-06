import { Button, Form, Modal, Alert, Row, Col, Select } from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AddAuction = ({ setAuction }) => {
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
      itemImage: itemImage.current.files[0],
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
                  {currentUser.email} 
              </Col>
            </Row>
            <Row>
              <Col className="mb-4">
                <Form.Group>
                  <Form.Label>KL</Form.Label>
                  <Form.Control type="text" required ref={itemTitle} />
                </Form.Group>
              </Col>

              </Row>
              <Row>
            <Col className="mb-4">
                <Form.Label>Cliente</Form.Label>
                <Form.Control as="select" multiple={false} ref={itemCategorie}>
                  <option value="oxxo">OXXO</option>
                  <option value="otro1">Otro</option>
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
