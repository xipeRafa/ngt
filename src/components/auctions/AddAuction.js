import { Button, Form, Modal, Alert, Row, Col } from "react-bootstrap";
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

  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
      console.log("Geolocation is not supported by this browser.")
    }

  
  function showPosition(position) {
    setLati(position.coords.latitude)

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

  const [cliente, setCliente]=useState('oxxo')

  const handleCliente = (e) =>{
      setCliente(e.target.value)
  }
 
  const[dist, setDist]=useState('uno')

  const distrito = (e) =>{
    setDist(e.target.value)
  }

  const[tienda1, setTienda1]=useState('')

  const handleTienda1 = (e) =>{
    setTienda1(e?.target?.value)
  }

  const[asm, setAsm]=useState(true)

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
      categorie: cliente,
      tiendaOxxo: tienda1,
      atendio:'',
      completed: asm,
      url:URL.createObjectURL(img)
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
                <Form.Control as="select" multiple={false} onChange={handleCliente} value={cliente}>
                  <option value="oxxo">OXXO</option>
                  <option value="otro">Otro</option>
                  <option value="pago en efectivo">Pago en Efectivo</option>
                  <option value="taller">Taller</option>
                </Form.Control >
              </Col>
            </Row>

          <div className={cliente !== 'oxxo' && 'd-none' }>
            <Row>
            <Col>
              <Form.Label>Elige un Distrito de Tiendas oxxo</Form.Label>
              <Form.Control
                as="select"
                multiple={false}
                onChange={distrito}
                className="mb-3"
              >
                <option disabled>Selecciona una Opcion</option>
                <option value="uno">1 Uno</option> 
                <option value="dos">2 Dos</option> 
              </Form.Control>
            </Col>
          </Row> 

            <Row className={dist === 'dos' && 'd-none'} >
            <Col>
              <Form.Label>Tiendas oxxo Distrito #1</Form.Label>
              <Form.Control
                as="select"
                multiple={false}
                onChange={handleTienda1}
                className="mb-3"
              >
                <option>Selecciona Una Tienda de Distrito Uno</option>
                <option value="Altares II-50AUF">Altares II-50AUF</option> 
                <option value="Apolo-50OAP">Apolo-50OAP</option> 
                <option value="Bachoco-50BCC">Bachoco-50BCC</option> 

                <option value="Balderrama-50OBD">Balderrama-50OBD</option> 
                <option value="Banus-509Q1">Banus-509Q1</option> 
                <option value="Basalto-50YFF">Basalto-50YFF</option> 

                <option value="Bosco-50U8C">Bosco-50U8C</option> 
                <option value="Bugambilias-50BUB">Bugambilias-50BUB</option> 
                <option value="BugambiliasII-50BWU">BugambiliasII-50BWU</option> 

                <option value="Canarios-50OTE">Canarios-50OTE</option> 
                <option value="Castanas-50LYW">Castanas-50LYW</option> 
                <option value="Choyal-50GBE">Choyal-50GBE</option> 

                <option value="Colinas-50KLN">Colinas-50KLN</option> 
                <option value="Cordobes-50CDK">Cordobes-50CDK</option> 
                <option value="Cumbres-50HCB">Cumbres-50HCB</option> 

                <option value="Del Cedro-50EIE">Del Cedro-50EIE</option> 
                <option value="Del Sol-50DPU">Del Sol-50DPU</option> 
                <option value="Diego Rivera-50NFC">Diego Rivera-50NFC</option> 

                <option value="DIF-50XIF">DIF-50XIF</option> 
                <option value="Dunas-50DUN">Dunas-50DUN</option> 
                <option value="El Esplendor-50XR6">El Esplendor-50XR6</option> 

                <option value="El Tijerito-500M3">El Tijerito-500M3</option> 
                <option value="El Tronconal-50TWN">El Tronconal-50TWN</option> 
                <option value="El Mezquite-501RM">El Mezquite-501RM</option> 

                <option value="Expo-50EMR">Expo-50EMR</option> 
                <option value="Flamingo-50FEN">Flamingo-50FEN</option> 
                <option value="Gomez Morin-50MSH">Gomez Morin-50MSH</option> 

                <option value="Hacienda-50HOH">Hacienda-50HOH</option> 
                <option value="Himes-50ARS">Himes-50ARS</option> 
                <option value="Isabeles-50ILS">Isabeles-50ILS</option> 

                <option value="Jardines-50JIN">Jardines-50JIN</option> 
                <option value="Jesus Garcia-50IVF">Jesus Garcia-50IVF</option> 
                <option value="Kino II-50YUQ">Kino II-50YUQ</option> 

                <option value="La Coyotita-50CYY">La Coyotita-50CYY</option> 
                <option value="La Floresta-50OWO">La Floresta-50OWO</option> 
                <option value="La Salida-50Q07">La Salida-50Q07</option> 

                <option value="Las Huertas-50EVQ">Las Huertas-50EVQ</option> 
                <option value="Lazaro-501QF">Lazaro-501QF</option> 
                <option value="Libertad-50HLI">Libertad-50HLI</option> 

                <option value="Maxxi-50QAE">Maxxi-50QAE</option> 
                <option value="Mendoza-50MDZ">Mendoza-50MDZ</option> 
                <option value="Montecarlo-50JMC">Montecarlo-50JMC</option> 

                <option value="Morelos-50IHD">Morelos-50IHD</option> 
                <option value="Narvaez-50VEV">Narvaez-50VEV</option> 
                <option value="Novena-50DKV">Novena-50DKV</option> 

                <option value="Nueva Palmira-50S2X">Nueva Palmira-50S2X</option> 
                <option value="Nuevo Hermosillo-50ONH">Nuevo Hermosillo-50ONH</option> 
                <option value="oceguera-507tq">oceguera-507tq</option> 

                <option value="Olivares-50IVA">Olivares-50IVA</option> 
                <option value="Oriente-50OTY">Oriente-50OTY</option> 
                <option value="Papagos-50AL3">Papagos-50AL3</option> 

                <option value="Paseo Real-50N05">Paseo Real-50N05</option> 
                <option value="Perinorte-50QPI">Perinorte-50QPI</option> 
                <option value="Prados del Sol-50HPS">Prados del Sol-50HPS</option> 

                <option value="Progreso-50PGG">Progreso-50PGG</option> 
                <option value="Pueblitos-50EBL">Pueblitos-50EBL</option> 
                <option value="Real del Arco-50RAD">Real del Arco-50RAD</option> 

                <option value="Real del Carmen-50KOW">Real del Carmen-50KOW</option> 
                <option value="Republica-50UMR">Republica-50UMR</option> 
                <option value="Reyes-50HRY">Reyes-50HRY</option> 

                <option value="Rio-50YHZ">Rio-50YHZ</option> 
                <option value="Romanza-50QAJ">Romanza-50QAJ</option> 
                <option value="Sahuaro-50SAH">Sahuaro-50SAH</option> 

                <option value="San Francisco-50SOH">San Francisco-50SOH</option> 
                <option value="Santa Clara-50SKA">Santa Clara-50SKA</option> 
                <option value="Supremo-50XDH">Supremo-50XDH</option> 

                <option value="Topografos-50UWS">Topografos-50UWS</option> 
                <option value="Tops-50WOT">Tops-50WOT</option> 
                <option value="Valencia-50VLY">Valencia-50VLY</option> 

                <option value="Villa Verde-50VNU">Villa Verde-50VNU</option> 
                <option value="Vinedos-50QZZ">Vinedos-50QZZ</option> 
                <option value="Yunke-50hzy">Yunke-50hzy</option> 

              </Form.Control>
            </Col>
          </Row> 

          <Row className={dist === 'uno' && 'd-none'} >
            <Col>
              <Form.Label>Tiendas oxxo Distrito #2</Form.Label>
              <Form.Control
                as="select"
                multiple={false}
                onChange={handleTienda1}
                className="mb-3"
              >
                <option>Selecciona Una Tienda de Distrito Dos</option>

                <option value="14 De Abril-503FS">14 De Abril-503FS</option> 
                <option value="20 de Noviembre-50NOM">20 de Noviembre-50NOM</option> 
                <option value="Abastos-50ABK">Abastos-50ABK</option> 

                <option value="Adelina-5075V">Adelina-5075V</option> 
                <option value="Agualurca-50AWL">Agualurca-50AWL</option> 
                <option value="Alborada-50GVZ">Alborada-50GVZ</option> 

                <option value="Alegranza-50X6D">Alegranza-50X6D</option> 
                <option value="Bacadehuachi-50V0O">Bacadehuachi-50V0O</option> 
                <option value="Baviacora-50LYQ">Baviacora-50LYQ</option> 

                <option value="Belice-50BEJ">Belice-50BEJ</option> 
                <option value="Boulevard-50OBU">Boulevard-50OBU</option> 
                <option value="California-505QJ">California-505QJ</option> 

                <option value="Campestre-50VJT">Campestre-50VJT</option> 
                <option value="Casa Bonita-506I7">Casa Bonita-506I7</option> 
                <option value="Catedral-50JNC">Catedral-50JNC</option> 

                <option value="caturegli-50J25">caturegli-50J25</option> 
                <option value="Centenario-507HN">Centenario-507HN</option> 
                <option value="Central-50QQF">Central-50QQF</option> 

                <option value="Centro-50CVU">Centro-50CVU</option> 
                <option value="Chavez-50GIY">Chavez-50GIY</option> 
                <option value="Cien-50CNI">Cien-50CNI</option> 

                <option value="Cinco de Mayo-50HSM">Cinco de Mayo-50HSM</option> 
                <option value="Clinica 14-50DLC">Clinica 14-50DLC</option> 
                <option value="ClInica 37-50E5D">ClInica 37-50E5D</option> 

                <option value="Clinica 68-500N5">Clinica 68-500N5</option> 
                <option value="Coahuila-50HUC">Coahuila-50HUC</option> 
                <option value="Colosio-50YIP">Colosio-50YIP</option> 

                <option value="Condesa-50HOC">Condesa-50HOC</option> 
                <option value="Conquistadores-50COQ">Conquistadores-50COQ</option> 
                <option value="Constitucion-50DOM">Constitucion-50DOM</option> 

                <option value="Coras-50ZYF">Coras-50ZYF</option> 
                <option value="Country Club-50RPM">Country Club-50RPM</option> 
                <option value="Crit-50FYC">Crit-50FYC</option> 

                <option value="Cuauhtemoc-50CCE">Cuauhtemoc-50CCE</option> 
                <option value="De la Nacion-50DLB">De la Nacion-50DLB</option> 
                <option value="Del Prado-50HBB">Del Prado-50HBB</option> 

                <option value="Diez-50W9V">Diez-50W9V</option> 
                <option value="Doctor Noriega-50V1T">Doctor Noriega-50V1T</option> 
                <option value="Donato Guerra-50AIX">Donato Guerra-50AIX</option> 

                <option value="Ebanos-50UFA">Ebanos-50UFA</option> 
                <option value="El Puente-50LYZ">El Puente-50LYZ</option> 
                <option value="El Seri-50HQR">El Seri-50HQR</option> 

                <option value="El Triunfo-50EU4">El Triunfo-50EU4</option> 
                <option value="Estacion 26-50ESV">Estacion 26-50ESV</option> 
                <option value="Fresnos-502JH">Fresnos-502JH</option> 

                <option value="Gala-501P9">Gala-501P9</option> 
                <option value="Ganadera-50GDR">Ganadera-50GDR</option> 
                <option value="Garcia Morales-50004">Garcia Morales-50004</option> 

                <option value="Garcia-50YIW">Garcia-50YIW</option> 
                <option value="Garmendia-50QWQ">Garmendia-50QWQ</option> 
                <option value="Gomez Farias-50DDM">Gomez Farias-50DDM</option> 

                <option value="Guamuchil-508EN">Guamuchil-508EN</option> 
                <option value="Guerrero-50MMU">Guerrero-50MMU</option> 
                <option value="Haciendas del Sur-50IHP">Haciendas del Sur-50IHP</option> 

                <option value="Healy-50IVJ">Healy-50IVJ</option> 
                <option value="Hermosillo-50BIB">Hermosillo-50BIB</option> 
                <option value="Industrial-Industrial">Industrial-Industrial</option> 

                <option value="Infonavit-50FON">Infonavit-50FON</option> 
                <option value="Internacional-50ITE">Internacional-50ITE</option> 
                <option value="Israel-50LSR">Israel-50LSR</option> 

                <option value="jefatura-50p52">jefatura-50p52</option> 
                <option value="Jose Carmelo-50LXB">Jose Carmelo-50LXB</option> 
                <option value="Juarez-50UMU">Juarez-50UMU</option> 

                <option value="Justo Sierra-50ACK">Justo Sierra-50ACK</option> 
                <option value="La Caridad-50XNU">La Caridad-50XNU</option> 
                <option value="La Morrita-50EIW">La Morrita-50EIW</option> 

                <option value="Las Palmas-50HPM">Las Palmas-50HPM</option> 
                <option value="Las Quintas-50XJB">Las Quintas-50XJB</option> 
                <option value="Lauro Galvez-50YVR">Lauro Galvez-50YVR</option> 

                <option value="Lazaro Cardenas-50JWV">Lazaro Cardenas-50JWV</option> 
                <option value="Lazaro Mercado-50FLM">Lazaro Mercado-50FLM</option> 
                <option value="Loma Linda-50LOL">Loma Linda-50LOL</option> 

                <option value="Lomas del Sur-50HSL">Lomas del Sur-50HSL</option> 
                <option value="Lomas Pitic-50LPT">Lomas Pitic-50LPT</option> 
                <option value="Lopez Mateos-50SOD">Lopez Mateos-50SOD</option> 

                <option value="Los Arcos-50ARC">Los Arcos-50ARC</option> 
                <option value="Madero-50INY">Madero-50INY</option> 
                <option value="Madrid-50XND">Madrid-50XND</option> 

                <option value="Mallorca-50XJC">Mallorca-50XJC</option> 
                <option value="Manglar-50JAB">Manglar-50JAB</option> 
                <option value="Manzanares-50NZN">Manzanares-50NZN</option> 

                <option value="Mariachi-50HEM">Mariachi-50HEM</option> 
                <option value="Marquez-50MHG">Marquez-50MHG</option> 
                <option value="Marsella-50KMZ">Marsella-50KMZ</option> 

                <option value="Matamoros-50MWT">Matamoros-50MWT</option> 
                <option value="Mercedes-50HGC">Mercedes-50HGC</option> 
                <option value="Milenium-50AZW">Milenium-50AZW</option> 

                <option value="Mocorito-50XKI">Mocorito-50XKI</option> 
                <option value="Modelo-50MOD">Modelo-50MOD</option> 
                <option value="Monaco-500I8">Monaco-500I8</option> 

                <option value="Monterrey-50NWY">Monterrey-50NWY</option> 
                <option value="Monteverde-50OMV">Monteverde-50OMV</option> 
                <option value="Morelia-50LIA">Morelia-50LIA</option> 

                <option value="Nacori Grande-50JQY">Nacori Grande-50JQY</option> 
                <option value="Naranjos-50NJO">Naranjos-50NJO</option> 
                <option value="Navarrete-50NRR">Navarrete-50NRR</option> 

                <option value="Navojoa-50FJU">Navojoa-50FJU</option> 
                <option value="Nayarit-50NYT">Nayarit-50NYT</option> 
                <option value="Noroeste-50NRO">Noroeste-50NRO</option> 

                <option value="Nueva Esperanza-507ZG">Nueva Esperanza-507ZG</option> 
                <option value="Palacios-50JRJ">Palacios-50JRJ</option> 
                <option value="Palma Dorada-503R3">Palma Dorada-503R3</option> 

                <option value="Periferico-50HPR">Periferico-50HPR</option> 
                <option value="Perimetral-50PRL">Perimetral-50PRL</option> 
                <option value="Periodista-509S1">Periodista-509S1</option> 

                <option value="Perisur-50RPS">Perisur-50RPS</option> 
                <option value="Pina-50HPI">Pina-50HPI</option> 
                <option value="Pirul-504AU">Pirul-504AU</option> 

                <option value="Pitahaya Madura-50WL2">Pitahaya Madura-50WL2</option> 
                <option value="Pitic-50OPT">Pitic-50OPT</option> 
                <option value="Planetario-50DNQ">Planetario-50DNQ</option> 

                <option value="Pueblo Nuevo">Pueblo Nuevo</option> 
                <option value="Puerta del rey-50LRO">Puerta del rey-50LRO</option> 
                <option value="Puerta Real-50PUT">Puerta Real-50PUT</option> 

                <option value="Quinta Emilia-50IVQ">Quinta Emilia-50IVQ</option> 
                <option value="Quintas del Sol-50CYX">Quintas del Sol-50CYX</option> 
                <option value="Quiroga-50IDF">Quiroga-50IDF</option> 

                <option value="Real de Minas-50MDM">Real de Minas-50MDM</option> 
                <option value="Real-50RJP">Real-50RJP</option> 
                <option value="Rebeico-50LT1">Rebeico-50LT1</option> 

                <option value="Reforma-50REF">Reforma-50REF</option> 
                <option value="Revolucion-50VOL">Revolucion-50VOL</option> 
                <option value="Romero-50JRB">Romero-50JRB</option> 

                <option value="Ruba-50RBI">Ruba-50RBI</option> 
                <option value="Salazar-50AUD">Salazar-50AUD</option> 
                <option value="San Agustin-50YAB">San Agustin-50YAB</option> 

                <option value="San Angel-50SAA">San Angel-50SAA</option> 
                <option value="San Benito-50HSB">San Benito-50HSB</option> 
                <option value="san bernardino-50X9V">san bernardino-50X9V</option> 

                <option value="Seguro Social-50OXS">Seguro Social-50OXS</option> 
                <option value="Serna-50SEA">Serna-50SEA</option> 
                <option value="Solidaridad-50FSL">Solidaridad-50FSL</option> 

                <option value="Sonacer-50SQJ">Sonacer-50SQJ</option> 
                <option value="Sonora-50FYU">Sonora-50FYU</option> 
                <option value="Super Salcido-50FFV">Super Salcido-50FFV</option> 

                <option value="Super Tierra Nueva II-50BHR">
                  Super Tierra Nueva II-50BHR
                </option> 
                <option value="Tepoca-50NCG">Tepoca-50NCG</option> 
                <option value="Topahue-50TPU">Topahue-50TPU</option> 

                <option value="Transversal-50HTV">Transversal-50HTV</option> 
                <option value="Transversal-Monteverde-50OMV">
                  Transversal-Monteverde-50OMV
                </option> 
                <option value="Triana-50WSY">Triana-50WSY</option> 

                <option value="Universidad II-50USI">Universidad II-50USI</option> 
                <option value="Valentina-50AUM">Valentina-50AUM</option> 
                <option value="Valle de Lago-50VGK">Valle de Lago-50VGK</option> 

                <option value="Verbena-50AJV">Verbena-50AJV</option> 
                <option value="Vergel-50BYP">Vergel-50BYP</option> 
                <option value="Vertedor-50VDK">Vertedor-50VDK</option> 

                <option value="Villa Bonita-50KVB">Villa Bonita-50KVB</option> 
                <option value="Villa Dorada-50VDB">Villa Dorada-50VDB</option> 
                <option value="Villa Hermosa-50FXI">Villa Hermosa-50FXI</option> 

                <option value="Villa Quintero-50R5C">Villa Quintero-50R5C</option> 
                <option value="Villas del Sur-50VIW">Villas del Sur-50VIW</option> 
                <option value="Volcanes-50UTB">Volcanes-50UTB</option> 

                <option value="Y Griega-50GRI">Y Griega-50GRI</option> 
                <option value="Yanez-50BYY">Yanez-50BYY</option> 

              </Form.Control>
            </Col>
          </Row> 
        </div>{/* select tiendas */}

            <Row>
            <Col>
                <Form.Group>
                  <Form.Control   as="textarea" placeholder="comentarios..." 
                                  style={{ height: '80px',resize:'none' }} required ref={itemDesc} />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col>
              <Form.Label>foto</Form.Label>
                <Form.Group >
                  <Form.File
                    /* label="Cargar Foto" */
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
         
            <Button variant={!asm ? 'danger' : 'outline-secondary'} onClick={()=>setAsm(!asm)}>
               {!asm ? 'Viaje Incompleto' : 'Viaje Completado'}
            </Button>
            
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
