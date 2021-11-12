import React from "react";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Banner from "../../assets/slides/Banner.jpg";
import StyledProductCategory from "./ProductCategory.Module.css";

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
      <div className={StyledProductCategory.productContainer}>
        <Row>
          <Col className="Smaller" xs={2}>
            <div className={StyledProductCategory.laptopCheckboxContainer}>
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
            <div className={StyledProductCategory.consolesCheckboxContainer}>
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
            <div className={StyledProductCategory.accessoriesCheckboxContainer}>
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
            <div
              className={StyledProductCategory.SmartWatchesCheckboxContainer}
            >
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
                <Nav.Link
                  eventKey="link"
                  className={StyledProductCategory.navLink}
                >
                  Laptop
                </Nav.Link>
                /
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  onClick={message}
                  className={StyledProductCategory.navLink}
                >
                  Consoles
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-2"
                  onClick={message1}
                  className={StyledProductCategory.navLink}
                >
                  Accessories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-3"
                  className={StyledProductCategory.navLink}
                >
                  SmartWatches
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductCategory;
