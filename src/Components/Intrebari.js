import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
export default function Intrebari() {
    return (
        <Container>
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: "white" }}
            >
                <Navbar.Brand
                    href="/"
                    className="mt-auto mb-auto ml-auto mr-auto"
                    style={{
                        color: "green",
                        fontSize: "1.4rem",
                        fontWeight: "500",
                    }}
                >
                    <img src="logov2.png" style={{ height: "13rem" }} />
                </Navbar.Brand>
            </Navbar>
            <Row>
                <Col>
                    <h3 style={{ fontWeight: "300" }}> Intrebari frecvente</h3>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="0"
                                    style={{ color: "green" }}
                                >
                                    Ce este compostabilitatea?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Transformarea unui material organic în
                                    compost prin trecerea prin procesul de
                                    compostare se numește compostabilitate
                                    Compostarea este definită de norma EN 13432
                                    ca proces de dezintegrare a materiei prime,
                                    în condiții aerobe specifice (în prezența
                                    oxigenului).<br></br> În general, un ciclu
                                    de compostare durează între 6 și 12
                                    săptămâni, în condiții controlate
                                    (umiditate, temperatură).<br></br> Toate
                                    produsele noastre îndeplinesc cerințele de
                                    compostabilitate, cum ar fi "Compostul OK"
                                    și același lucru "Compostul HOME OK".
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="1"
                                    style={{ color: "green" }}
                                >
                                    Ce diferență este între biodegradabil și
                                    compostabil?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    Un produs care are proprietatea de a se
                                    degrada sub acțiunea unor factori biologici
                                    este biodegradabil.<br></br> Uneori
                                    biodegradarea unor produse poate trece prin
                                    etape intermediare care pot fi toxice și
                                    periculoase pentru mediul în care se
                                    desfășoară aceste procese.<br></br> De
                                    asemenea perioada în care un produs este
                                    biodegradat poate fi considerabil de lungă,
                                    acest lucru fiind adeseori nemenționat de
                                    producători. <br></br>Un material
                                    compostabil, acesta este în mod automat
                                    biodegradabil, lucru care nu este valabil
                                    pentru toate materialele biodegradabile.
                                    Compostabilitatea asigură biodegradarea în
                                    siguranță a substanțelor, într-un interval
                                    bine definit de timp, dacă sunt respectate
                                    condițiile de compostabilitate.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle
                                    as={Button}
                                    variant="link"
                                    eventKey="2"
                                    style={{ color: "green" }}
                                >
                                    De ce BioPunga este scutita de taxa de
                                    mediu?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    Pentru ca este certificata TUV Austria si
                                    respecta EN13432, BioPunga este scutita de
                                    taxa de mediu in valoare de 0.15 bani.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}
