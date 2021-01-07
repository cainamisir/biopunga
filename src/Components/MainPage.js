import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
export default function MainPage() {
    const [cantitate, setCantitate] = useState("1000");
    const [capacitate, setCapacitate] = useState(
        "3 KG 14 microni, 22 + 6 + 6 x 40cm"
    );
    const [price, setPrice] = useState("0.16");
    function computePrice(canti, cap) {
        setCantitate(canti);
        console.log(canti);
        if (cap === "3 KG 14 microni, 22 + 6 + 6 x 40cm") {
            if (canti >= 1000 && canti < 10000) {
                setPrice(0.16);
            }
            if (canti >= 10000 && canti < 100000) {
                setPrice(0.148);
            }
            if (canti >= 100000 && canti < 200000) {
                setPrice(0.135);
            }
            if (canti >= 200000 && canti < 500000) {
                setPrice(0.122);
            }
            if (canti >= 500000) {
                setPrice(0.116);
            }
        }
        if (cap === "5 KG 16 microni, 26 + 7 + 7 x 50cm") {
            if (canti >= 1000 && canti < 10000) {
                setPrice(0.26);
            }
            if (canti >= 10000 && canti < 100000) {
                setPrice(0.23);
            }
            if (canti >= 100000 && canti < 200000) {
                setPrice(0.2);
            }
            if (canti >= 200000 && canti < 500000) {
                setPrice(0.187);
            }
            if (canti >= 500000) {
                setPrice(0.178);
            }
        }
        if (cap === "7 KG 18 microni, 32 + 9 + 9 x 58cm") {
            if (canti >= 1000 && canti < 10000) {
                setPrice(0.39);
            }
            if (canti >= 10000 && canti < 100000) {
                setPrice(0.365);
            }
            if (canti >= 100000 && canti < 200000) {
                setPrice(0.34);
            }
            if (canti >= 200000 && canti < 500000) {
                setPrice(0.32);
            }
            if (canti >= 500000) {
                setPrice(0.305);
            }
        }
        if (cap === "9 KG 24 micrpni, 34 + 11 + 11 x 62cm") {
            if (canti >= 1000 && canti < 10000) {
                setPrice(0.6);
            }
            if (canti >= 10000 && canti < 100000) {
                setPrice(0.57);
            }
            if (canti >= 100000 && canti < 200000) {
                setPrice(0.54);
            }
            if (canti >= 200000 && canti < 500000) {
                setPrice(0.51);
            }
            if (canti >= 500000) {
                setPrice(0.48);
            }
        }
    }
    return (
        <Container>
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: "white" }}
            >
                <Navbar.Brand
                    href="#home"
                    className="mt-auto mb-auto"
                    style={{
                        color: "#81F495",
                        fontSize: "1.3rem",
                        fontWeight: "500",
                    }}
                >
                    Bio Punga
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto ml-auto mt-auto mb-auto">
                        <Nav.Link href="#features" className="pl-3 pr-3">
                            Cine suntem?
                        </Nav.Link>
                        <Nav.Link href="#pricing" className="pl-3 pr-3">
                            Certificate
                        </Nav.Link>
                        <Nav.Link href="#pricing" className="pl-3 pr-3">
                            Preturi
                        </Nav.Link>
                        <Nav.Link href="#pricing" className="pl-3 pr-3">
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row className="mt-5">
                <Col xl={6} className="mt-auto mb-auto">
                    <div className="mt-auto mb-auto">
                        <h1
                            className="text-center"
                            style={{ fontSize: "2.3rem", fontWeight: "400" }}
                        >
                            {" "}
                            Pungi{" "}
                            <span style={{ color: "#81F495" }}>
                                biodegradabile
                            </span>{" "}
                            si <span>compostabile</span>{" "}
                        </h1>
                        <h2
                            className="text-center ml-auto mr-auto"
                            style={{
                                fontSize: "1.8rem",
                                color: "grey",
                                width: "70%",
                                fontWeight: "200",
                            }}
                        >
                            {" "}
                            Certificate{" "}
                            <span
                                style={{ color: "#81F495", fontWeight: "300" }}
                            >
                                TUV Austria
                            </span>{" "}
                            si conform{" "}
                            <span style={{ fontWeight: "300" }}>EN13432</span>{" "}
                        </h2>
                        <p>
                            {" "}
                            Scapi de taxa de mediu si ajuti si planeta! Se putea
                            mai bine?<br></br>
                            Da se poate. Pretul Bio Pungii este chiar mai
                            avantajos!
                        </p>
                    </div>
                </Col>
                <Col xl={6}>
                    <img src="pungabio.PNG" width="80%" />
                </Col>
                <Col xl={12} className="mt-4">
                    <h2 style={{ fontWeight: "300" }}>
                        {" "}
                        Tie iti pasa de natura?{" "}
                    </h2>
                    <h4 style={{ fontWeight: "300" }}>
                        {" "}
                        Uite care sunt avantajele BioPungii{" "}
                    </h4>
                </Col>
                <Col sm={4} className="mt-3 mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <img src="bio.svg" width="60px" />
                            </Card.Title>

                            <p
                                className="pl-3 pr-3"
                                style={{ fontWeight: "400" }}
                            >
                                Este 100% biodegradabila fiind produsa din
                                amidon de porumb si compostabila in orice centru
                                specializat
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="mt-3 mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <img src="eco.svg" width="60px" />
                            </Card.Title>

                            <p
                                className="pl-3 pr-3"
                                style={{ fontWeight: "400" }}
                            >
                                Printam doar cu cerneala netoxica in
                                conformitate cu norma europeana orice design al
                                clientilor. #Bio pana la capat.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="mt-3 mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <img src="tree.svg" width="60px" />
                            </Card.Title>

                            <p
                                className="pl-3 pr-3"
                                style={{ fontWeight: "400" }}
                            >
                                Economisesti atat tu, cat si clientii tai
                                deoarece pentru BioPunga nu se aplica taxa de
                                mediu. Suntem certificati TUV Austria si
                                respectam EN13432.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12} className="mt-5">
                    <h3 style={{ fontWeight: "300" }}>
                        {" "}
                        Cate pungi trebuie sa comanzi?
                    </h3>
                    <h5 style={{ fontWeight: "400" }}> Cate vrei! </h5>
                    <p>
                        La noi , comanda minima este de 1000 de pungi, dar cu
                        cat comanzi mai multe, cu atat pretul va fi mai
                        avantajos! <br></br>Am facut special pentru tine un
                        calculator ca sa fie totul mai usor.
                    </p>
                </Col>
                <Col md={6} className="mt-5 mb-5">
                    <Form>
                        <Form.Group size="lg" controlId="cantitatePungi">
                            <Form.Label
                                style={{
                                    fontSize: "1.3rem",
                                    color: "green",
                                    fontWeight: "600",
                                }}
                            >
                                Cantitate
                            </Form.Label>
                            <Form.Control
                                className="ml-auto mr-auto"
                                autoFocus
                                style={{ textAlign: "center", width: "60%" }}
                                min="1000"
                                type="number"
                                value={cantitate}
                                onChange={(e) => {
                                    computePrice(e.target.value, capacitate);
                                }}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="petSpecies">
                            <Form.Label
                                style={{
                                    fontSize: "1.3rem",
                                    color: "green",
                                    fontWeight: "600",
                                }}
                            >
                                Capacitatea pungii
                            </Form.Label>
                            <Form.Control
                                className="ml-auto mr-auto"
                                as="select"
                                style={{ textAlign: "center", width: "60%" }}
                                value={capacitate}
                                onChange={(e) => {
                                    setCapacitate(e.target.value);
                                    computePrice(cantitate, e.target.value);
                                    console.log(e.target.value);
                                }}
                            >
                                <option>
                                    3 KG 14 microni, 22 + 6 + 6 x 40cm
                                </option>
                                <option>
                                    5 KG 16 microni, 26 + 7 + 7 x 50cm
                                </option>
                                <option>
                                    7 KG 18 microni, 32 + 9 + 9 x 58cm
                                </option>
                                <option>
                                    9 KG 24 micrpni, 34 + 11 + 11 x 62cm
                                </option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={6} className="mt-auto mb-auto">
                    {" "}
                    <p>
                        Pretul unitar este de:{" "}
                        <span style={{ color: "green", fontWeight: "700" }}>
                            {price} RON{" "}
                        </span>
                    </p>
                    <p>
                        Pretul total pentru toata cantitatea introdusa este:{" "}
                        <span style={{ color: "green", fontWeight: "700" }}>
                            {(price * cantitate).toFixed(3)} RON
                        </span>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
