import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState, useRef } from "react";
export default function MainPage() {
    const pretRef = useRef(null);
    const scrollPret = () =>
        pretRef.current.scrollIntoView({ block: "center" });

    const cineRef = useRef(null);
    const scrollCine = () => cineRef.current.scrollIntoView({ block: "end" });

    const contactRef = useRef(null);
    const scrollContact = () => contactRef.current.scrollIntoView();

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
                        color: "green",
                        fontSize: "1.4rem",
                        fontWeight: "500",
                    }}
                >
                    <img src="logov2.png" style={{ height: "13rem" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" ml-auto mb-5">
                        <Nav.Link
                            onClick={scrollCine}
                            className="pl-3 pr-3 "
                            style={{ color: "black", fontSize: "1.1rem" }}
                        >
                            Cine suntem?
                        </Nav.Link>
                        <Nav.Link
                            href="#pricing"
                            className="pl-3 pr-3"
                            style={{ color: "black", fontSize: "1.1rem" }}
                        >
                            Certificate
                        </Nav.Link>
                        <Nav.Link
                            onClick={scrollPret}
                            className="pl-3 pr-3"
                            style={{ color: "black", fontSize: "1.1rem" }}
                        >
                            Preturi
                        </Nav.Link>
                        <Nav.Link
                            onClick={scrollContact}
                            className="pl-3 pr-3"
                            style={{ color: "black", fontSize: "1.1rem" }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row>
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
                    <img src="pungabio-min.PNG" width="80%" />
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
                <Col sm={4} className="mt-3 mb-3" ref={cineRef}>
                    <Card
                        style={{
                            boxShadow: "0px 6px 13px 0px rgba(0,0,0,0.1)",
                        }}
                    >
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
                                specializat.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className="mt-3 mb-3">
                    <Card
                        style={{
                            boxShadow: "0px 6px 13px 0px rgba(0,0,0,0.1)",
                        }}
                    >
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
                    <Card
                        style={{
                            boxShadow: "0px 6px 13px 0px rgba(0,0,0,0.1)",
                        }}
                    >
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
                <Col xl={12} className="mt-5" ref={pretRef}>
                    <h3 style={{ fontWeight: "300" }}>
                        {" "}
                        Cate pungi trebuie sa comanzi?
                    </h3>
                    <h5 style={{ fontWeight: "400" }}> Cate vrei! </h5>
                    <p>
                        La noi, comanda minima este de 1000 de pungi, dar cu cat
                        comanzi mai multe, cu atat pretul va fi mai avantajos!{" "}
                        <br></br>Am facut special pentru tine un calculator ca
                        sa fie totul mai usor.
                    </p>
                    <p>
                        {" "}
                        Totusi daca vrei sa descarci oferta completa, o ai{" "}
                        <a
                            href="BioPunga.docx"
                            download
                            style={{ color: "#81F495", fontWeight: "500" }}
                        >
                            aici
                        </a>
                        .
                    </p>
                </Col>
                <Col md={5} className="mt-5 mb-5">
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
                                style={{ textAlign: "center", width: "80%" }}
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
                <Col md={7} className="mt-auto mb-auto">
                    {" "}
                    <p>
                        Pretul unitar este de:{" "}
                        <span style={{ color: "green", fontWeight: "700" }}>
                            {(price * 1.19).toFixed(4).replace(".", ",")} RON{" "}
                        </span>
                        <span style={{ color: "grey" }}>TVA inclus</span>
                    </p>
                    <p>
                        Pretul pentru toata cantitatea introdusa este:{" "}
                        <span style={{ color: "green", fontWeight: "700" }}>
                            {((price * 1.19).toFixed(4) * cantitate)
                                .toFixed(4)
                                .replace(".", ",")}{" "}
                            RON
                        </span>{" "}
                        <span style={{ color: "grey" }}>TVA inclus</span>
                    </p>
                </Col>
                <Col xl={12} ref={contactRef}>
                    <h3 style={{ fontWeight: "300" }}>
                        Iti place oferta noastra?
                    </h3>
                    <h4 style={{ fontWeight: "300" }}>
                        {" "}
                        Ne gasesti in mai multe locuri:
                    </h4>
                    <p>
                        Email:{" "}
                        <a href="mailto:biopunga@gmail.com">
                            biopunga@gmail.com
                        </a>
                        <br></br>
                        Telefon: <a href="tel:+40769683696">0769 683 696</a>
                        <br></br>
                        <br></br>
                        <a href="https://www.facebook.com/biopunga">
                            <img src="Facebook-logo-500x350.png" width="60px" />
                        </a>
                        <a href="https://www.instagram.com/biopunga/">
                            <img src="1024px-Instagram_icon.png" width="40px" />
                        </a>{" "}
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
