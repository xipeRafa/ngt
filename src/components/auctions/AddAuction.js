import { Button, Form, Modal, Alert, Row, Col} from "react-bootstrap";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AddAuction = ({ setAuction }) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState("");

  const itemTitle = useRef();
  const itemDesc = useRef();
  const startPrice = useRef();
 /*  const itemDuration = useRef(); */
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

    let currentDate = new Date();
    let dueDate = currentDate.setHours(
      currentDate.getHours() /* + itemDuration.current.value */
    );

    let newAuction = {
      email: currentUser.email,
      title: itemTitle.current.value,
      description: itemDesc.current.value,
      curPrice: startPrice.current.value,
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
      <div className="col d-flex justify-content-center my-3">
        <div onClick={openForm} className="btn btn-success mx-2">
          + viaje
        </div>
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Guardar Viaje</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Taxista</Form.Label>
                  <Form.Control type="text" value={currentUser.email} readOnly />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Numero de Taxi</Form.Label>
                  <Form.Control type="text" required ref={itemTitle} />
                </Form.Group>
              </Col>
      
            <Col>
                <Form.Label>Cliente</Form.Label>
                <Form.Control as="Select" multiple={false} ref={itemCategorie}>
                  <option>Selecciona un Cliente</option>
                  <option value="oxxo">OXXO</option>
                  <option value="otro1">otro 1</option>
                  <option value="otro2">otro2</option>
                </Form.Control >
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control type="number" required ref={startPrice} />
                </Form.Group>
              </Col>
             {/*   <Col>
                <Form.Group>
                  <Form.Label>Item Duration in hours</Form.Label>
                  <Form.Control type="number" required ref={itemDuration} />
                </Form.Group>
              </Col>  */}
            </Row>

            <Row>
            <Col>
                <Form.Group>
                  <Form.Label>Comentarios</Form.Label>
                  <Form.Control type="text" required ref={itemDesc} />
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
                    required
                    ref={itemImage}
                  />
                </Form.Group>
              </Col>
            </Row>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
