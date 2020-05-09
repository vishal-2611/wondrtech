import React, { Component } from "react";
import { Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { downloadFile } from "../Utils/Download";

export class AdvanceBar extends Component {
  render() {
    const {
      toggleImageType,
      imageType,
      setInputValues,
      downloadUrl,
      shareUrl,
    } = this.props;

    return (
      <>
        <Row>
          <Col>
            <Button
              onClick={toggleImageType}
              variant="outline-secondary"
              className="float-right"
            >
              {imageType ? "GrayScale" : "Coloured"}
            </Button>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Blur</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Blur Level 1-10"
                type="number"
                min="0"
                max="10"
                onChange={setInputValues}
                name="blur"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Width</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Width"
                type="number"
                min="1"
                onChange={setInputValues}
                name="width"
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Height</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Height"
                type="number"
                min="1"
                onChange={setInputValues}
                name="height"
              />
            </InputGroup>
          </Col>
          <Col>
            <Button
              onClick={() => downloadFile(downloadUrl)}
              variant="outline-primary"
              className="float-right"
            >
              Download Image
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Shareable Link</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Shareable Link"
                type="text"
                disabled
                value={shareUrl}
              />
              <InputGroup.Append>
                <Button variant="outline-success">Share</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default AdvanceBar;
