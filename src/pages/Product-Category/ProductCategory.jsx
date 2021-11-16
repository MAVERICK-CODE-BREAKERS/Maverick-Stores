import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import products from "../../products";
import Product from "../../components/Product";
// import product from '../ProductScreen'
import Image from "react-bootstrap/Image";
import Banner from "../../assets/slides/Banner.jpg";
import StyledProductCategory from "./ProductCategory.Module.css";

const ProductCategory = ({ history, match }) => {
  // const product = products.find((p) => p._id === match.params.id)
  // products checkbox states
  const [isShowLaptopForm, setIsShowLaptopForm] = useState(true);
  const [isShowConsolesForm, setIsShowConsolesForm] = useState(false);
  const [isShowAccessoriesForm, setIsShowAccessoriesForm] = useState(false);
  const [isShowSmartWatchesForm, setIsShowSmartWatchesForm] = useState(false);
  const [isShowSmartphonesForm, setIsShowSmartphonesForm] = useState(false);

  // product container states
  const [isShowLaptopProductContainer, setIsShowLaptopProductContainer] =
    useState(true);
  const [isShowConsolesContainer, setIShowConsolesContainer] = useState(false);
  const [isShowAccessoriesContainer, setIsShowAccessoriesContainer] =
    useState(false);
  const [isShowSmartWatchesContainer, setIsShowSmartWatchesContainer] =
    useState(false);
  const [isShowSmartphonesContainer, setIsShowSmartphonesContainer] =
    useState(false);

  const handleClickShow = () => {
    setIsShowConsolesForm(true);
    setIShowConsolesContainer(true);
    setIsShowAccessoriesForm(false);
    setIsShowLaptopForm(false);
    setIsShowSmartWatchesForm(false);
    setIsShowLaptopProductContainer(false);
    setIsShowSmartWatchesContainer(false);
    setIsShowAccessoriesContainer(false);
    setIsShowSmartphonesForm(false);
    setIsShowSmartphonesContainer(false);
  };
  const handleClickShow1 = () => {
    setIsShowAccessoriesForm(true);
    setIsShowAccessoriesContainer(true);
    setIsShowConsolesForm(false);
    setIsShowLaptopForm(false);
    setIsShowSmartWatchesForm(false);
    setIsShowLaptopProductContainer(false);
    setIShowConsolesContainer(false);
    setIsShowSmartWatchesContainer(false);
    setIsShowSmartphonesForm(false);
    setIsShowSmartphonesContainer(false);
  };

  const handleClickShow2 = () => {
    setIsShowSmartWatchesForm(true);
    setIsShowSmartWatchesContainer(true);
    setIsShowAccessoriesForm(false);
    setIsShowLaptopForm(false);
    setIsShowConsolesForm(false);
    setIsShowAccessoriesContainer(false);
    setIsShowLaptopProductContainer(false);
    setIShowConsolesContainer(false);
    setIsShowSmartphonesForm(false);
    setIsShowSmartphonesContainer(false);
  };

  const handleClickShow3 = () => {
    setIsShowSmartWatchesForm(false);
    setIsShowAccessoriesForm(false);
    setIsShowLaptopForm(true);
    setIsShowConsolesForm(false);
    setIsShowLaptopProductContainer(false);
    setIsShowSmartWatchesContainer(false);
    setIsShowAccessoriesContainer(false);
    setIsShowLaptopProductContainer(true);
    setIsShowSmartphonesForm(false);
    setIsShowSmartphonesContainer(false);
  };

  const handleClickShow4 = () => {
    setIsShowSmartWatchesForm(false);
    setIsShowAccessoriesForm(false);
    setIsShowLaptopForm(false);
    setIsShowConsolesForm(false);
    setIShowConsolesContainer(false);
    setIsShowLaptopProductContainer(false);
    setIsShowSmartWatchesContainer(false);
    setIsShowAccessoriesContainer(false);
    setIsShowLaptopProductContainer(false);
    setIsShowSmartphonesForm(true);
    setIsShowSmartphonesContainer(true);
  };

  return (
    <div>
      <div className="image-container my-5">
        <Image src={Banner} thumbnail />
      </div>
      <div className={StyledProductCategory.productContainer}>
        <Row>
          <Col className={StyledProductCategory.Smaller} xs={2}>
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
                  <Form.Check type="checkbox" label="Camera" />
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
            <div
              className={StyledProductCategory.smartphonesCheckboxContainer}
              style={{ display: isShowSmartphonesForm ? "block" : "none" }}
            >
              <Form>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Apple" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Huawei" />
                </Form.Group>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Samsung" />
                </Form.Group>
              </Form>
            </div>
            <div className={StyledProductCategory.PriceAdjustContainer}>
              <Form.Check
                type="radio"
                label="Lowest To Highest"
                className={StyledProductCategory.priceLabel}
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Highest To Lowest"
                className={StyledProductCategory.priceLabel}
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
            </div>

            <div className="random-product">
              <Row>
                {products.map((relatedProducts) => {
                  const randomNumber = Math.floor(Math.random() *  (8 - 1 + 1) + 1);
                  if (relatedProducts._id === randomNumber.toString()) {
                    return (
                      <Col
                        key={relatedProducts._id}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                      >
                        <Product product={relatedProducts} />
                      </Col>
                    );
                  }
                })}
              </Row>
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
                  eventKey="link-4"
                  onClick={handleClickShow4}
                  className={StyledProductCategory.navLink}
                >
                  SmartPhones
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
            <div
              className={StyledProductCategory.laptopsProductsContainer}
              style={{
                display: isShowLaptopProductContainer ? "block" : "none",
              }}
            >
              <Row>
                {products
                  .filter((rel) => rel.category === "Laptop")
                  .map((relatedProducts) => (
                    <Col key={relatedProducts._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={relatedProducts} size />
                    </Col>
                  ))}
              </Row>
            </div>
            <div
              className={StyledProductCategory.consoleProductsContainer}
              style={{
                display: isShowConsolesContainer ? "block" : "none",
              }}
            >
              {" "}
              <Row>
                {products
                  .filter((rel) => rel.category === "Console")
                  .map((relatedProducts) => (
                    <Col key={relatedProducts._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={relatedProducts} size />
                    </Col>
                  ))}
              </Row>
            </div>
            <div
              className={StyledProductCategory.accessoriesProductsContainer}
              style={{
                display: isShowAccessoriesContainer ? "block" : "none",
              }}
            >
              <Row>
                {products
                  .filter((rel) => rel.category === "Accessories")
                  .map((relatedProducts) => (
                    <Col key={relatedProducts._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={relatedProducts} size />
                    </Col>
                  ))}
              </Row>
            </div>
            <div
              className={StyledProductCategory.smartWatchesProductsContainer}
              style={{
                display: isShowSmartWatchesContainer ? "block" : "none",
              }}
            >
              {" "}
              <Row>
                {products
                  .filter((rel) => rel.category === "Watch")
                  .map((relatedProducts) => (
                    <Col key={relatedProducts._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={relatedProducts} size />
                    </Col>
                  ))}
              </Row>
            </div>
            <div
              className={StyledProductCategory.smartphoneProductsContainer}
              style={{
                display: isShowSmartphonesContainer ? "block" : "none",
              }}
            >
              {" "}
              <Row>
                {products
                  .filter((rel) => rel.category === "Phone")
                  .map((relatedProducts) => (
                    <Col key={relatedProducts._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={relatedProducts} size />
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductCategory;
