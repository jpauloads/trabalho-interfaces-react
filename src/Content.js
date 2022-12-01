//import React from 'react';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import icon from './img/bs-icon.png';
import iconReact from './img/react-icon.png';
import iconReactBs from './img/react-bs-icon.png';
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';





class Content extends React.Component{
    render(){

      const infosBtn1={texto: "É sério!", titulo: "Não verá mais nada aqui.", nomeBotao: "Saiba mais"};
      const infosBtn2={texto: "...", titulo: "Aqui também não vai ver mais nada!", nomeBotao: "Saiba mais"};
      const infosBtn3={texto: "É só isso mesmo.", titulo: "Acabou.", nomeBotao: "Saiba mais"};

      return (
        <CardGroup className='m-auto col-8'>
          <Card>
            <Card.Img variant="top" src={icon} alt='...'/>
            <Card.Body>
              <Card.Title>Bootstrap</Card.Title>
              <Card.Text>
                O Bootstrap é muito utilizado para facilitar a estilização da página. Este framework facilita a experiência do usuário com sua base de design voltado para tipografia.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <BotaoModal info={infosBtn1}/>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={iconReact} />
            <Card.Body>
              <Card.Title>React</Card.Title>
              <Card.Text>
                O React é usado para renderização da página e com foco na criação de interfaces de usuário em páginas web. 
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <BotaoModal info={infosBtn2}/>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={iconReactBs} />
            <Card.Body>
              <Card.Title>React-Bootstrap</Card.Title>
              <Card.Text>
                O React-Bootstrap é onde a mágica acontece. Através de componentes e da integração react-bootstrap o código fica muito menor e a página completamente responsiva!
              </Card.Text>
            </Card.Body>
            <Card.Footer>

            <BotaoModal info={infosBtn3}/>
            </Card.Footer>
          </Card>
        </CardGroup>
      );
    }
}

function BotaoModal(props) {
  const [smShow, setSmShow] = useState(false);

  return (
    <>
      <Button variant="outline-info" onClick={() => setSmShow(true)} className="me-2">
        {props.info.nomeBotao}
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {props.info.titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.info.texto}</Modal.Body>
      </Modal>
    </>
  );
}

export default Content;