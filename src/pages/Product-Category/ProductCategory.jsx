import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Banner from "../../assets/slides/Banner.jpg";
import StyledProductCategory from "./ProductCategory.Module.css";

const ProductCategory = () => {
  const [isShowLaptopForm, setIsShowLaptopForm] = useState(true);
  const [isShowConsolesForm, setIsShowConsolesForm] = useState(false);
  const [isShowAccessoriesForm, setIsShowAccessoriesForm] = useState(false);
  const [isShowSmartWatchesForm, setIsShowSmartWatchesForm] = useState(false);

  const handleClickShow = () => {
    setIsShowConsolesForm(true);
    setIsShowAccessoriesForm(false);
    setIsShowLaptopForm(false);
    setIsShowSmartWatchesForm(false);
  };
  const handleClickShow1 = () => {
    setIsShowAccessoriesForm(true);
    setIsShowConsolesForm(false);
    setIsShowLaptopForm(false);
    setIsShowSmartWatchesForm(false);
  };

  const handleClickShow2 = () => {
    setIsShowSmartWatchesForm(true);
    setIsShowAccessoriesForm(false);
    setIsShowLaptopForm(false);
    setIsShowConsolesForm(false);
  };

  const handleClickShow3 = () => {
    setIsShowSmartWatchesForm(false);
    setIsShowAccessoriesForm(false);
    setIsShowLaptopForm(true);
    setIsShowConsolesForm(false);
  };

  return (
    <div>
      <div className="image-container my-5">
        <Image src={Banner} thumbnail />
      </div>
      <div className={StyledProductCategory.productContainer}>
        <Row>
          <Col className="Smaller" xs={2}>
            <div
              className={StyledProductCategory.laptopCheckboxContainer}
              style={{ display: isShowLaptopForm ? "block" : "none" }}
            >
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
            <div
              className={StyledProductCategory.consolesCheckboxContainer}
              style={{ display: isShowConsolesForm ? "block" : "none" }}
            >
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
            <div
              className={StyledProductCategory.accessoriesCheckboxContainer}
              style={{ display: isShowAccessoriesForm ? "block" : "none" }}
            >
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
              style={{ display: isShowSmartWatchesForm ? "block" : "none" }}
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
                  onClick={handleClickShow3}
                >
                  Laptop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  onClick={handleClickShow}
                  className={StyledProductCategory.navLink}
                >
                  Consoles
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-2"
                  onClick={handleClickShow1}
                  className={StyledProductCategory.navLink}
                >
                  Accessories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="link-3"
                  onClick={handleClickShow2}
                  className={StyledProductCategory.navLink}
                >
                  SmartWatches
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className={StyledProductCategory.laptopsProductsContainer}>
              <p>lllllll</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductCategory;
