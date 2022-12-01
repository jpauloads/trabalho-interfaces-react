import React, { useState } from 'react';
//import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function BotaoModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" onClick={handleShow}>
          Sobre
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>O que temos nesta página?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Veremos um pouco da integração de react com bootstrap e jsx, aprendidos em sala de aula.
            Utilizando cards e modais como este para testar os conhecimentos.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Fechar
            </Button>
            {/* <Button variant="primary">Understood</Button> */}
          </Modal.Footer>
        </Modal>
      </>
    );
}

class Headers extends React.Component{
    render(){
        return (
            <Card className="text-center">
              <Card.Header><br></br></Card.Header>
              <Card.Body>
                <h1>Testando conhecimentos em React-bootstrap</h1>
                <Card.Title><br></br></Card.Title>
                <Card.Text>
                  Esta é uma landing page desenvolvida para aplicar conhecimentos em React-Bootstrap.
                </Card.Text>
                <br></br>
                <BotaoModal />
                {/* <Button variant="info">Sobre</Button> */}
              </Card.Body> 
            </Card>
        );
    }
}

export default Headers;