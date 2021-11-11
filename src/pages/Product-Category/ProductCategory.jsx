import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Banner from "../../assets/slides/Banner.jpg";
import "./ProductCategory.css";

const ProductCategory = () => {
  const message = () => {
    console.log("Hello-World");
  };
  const message1 = () => {
    console.log("Hello-World1");
  };

  return (
    <div>
      <div className="image-container my-5">
        <Image src={Banner} thumbnail />
      </div>
      <div className="product-container">
        <Row>
          <Col className="Smaller" xs={2}>
            <div className="laptop-checkbox-container">
              <Form>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Apple" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Samsung" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Huawei" />
                </Form.Group>
              </Form>
            </div>
            <div className="consoles-checkbox-container">
              <Form>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Playstation" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Xbox" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Nintendo" />
                </Form.Group>
              </Form>
            </div>
            <div className="accessories-checkbox-container">
              <Form>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Speakers" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Microphone" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Power-Banks" />
                </Form.Group>
              </Form>
            </div>
            <div className="SmartWatches-checkbox-container">
              <Form>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Apple" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Samsung" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Xiaomi" />
                </Form.Group>
              </Form>
            </div>
          </Col>
          <Col className="bigger" xs={10}>
            <Nav fill variant="pills" defaultActiveKey="link">
              <Nav.Item>
                <Nav.Link eventKey="link" className="laptop">
                  Laptop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={message}>
                  Consoles
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={message1}>
                  Accessories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">SmartWatches</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductCategory;
