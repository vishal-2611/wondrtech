import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { photoList } from "../Apis";

import "./index.css";
export class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photoListData: [],
      isLoading: true,
      imageType: true,
    };
    this.toggleImageType = this.toggleImageType.bind(this);
  }

  componentDidMount() {
    photoList(30).then((res) => this.setState({ photoListData: res }));
  }

  toggleImageType() {
    this.setState((prevState) => {
      return { imageType: !prevState.imageType };
    });
  }
  render() {
    const { photoListData, imageType } = this.state;
    return (
      <>
        <Button onClick={this.toggleImageType} variant="primary">
          {imageType ? "GrayScale" : "Coloured"}
        </Button>
        <section>
          <Row>
            {photoListData.map((res) => (
              <Col className="d-flex flex-column align-items-center">
                <img
                  src={`https://picsum.photos/id/${res.id}/250/400?${
                    imageType ? "" : "grayscale"
                  }`}
                  height="300"
                  width="250"
                  alt={res.id}
                  key={res.id}
                  className="photo-gallery"
                />
                <h5>{res.author}</h5>
              </Col>
            ))}
          </Row>
        </section>
      </>
    );
  }
}

export default PhotoList;
