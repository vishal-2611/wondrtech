import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AdvanceBar from "./AdvanceBar";
export class CustomModal extends Component {
  constructor() {
    super();
    this.state = { imageType: false, blur: 0, height: 500, width: 400 };
    this.toggleImageType = this.toggleImageType.bind(this);
    this.setInputValues = this.setInputValues.bind(this);
  }

  componentDidMount() {
    this.setState({ imageType: this.props.imageType });
  }

  toggleImageType() {
    this.setState((prevState) => {
      return { imageType: !prevState.imageType };
    });
  }
  setInputValues(e) {
    this.setState({ [e.target.name]: Number(e.target.value) });
  }
  render() {
    const { isVisible, setModalVisible, selectedImage } = this.props;
    const { imageType, blur, height, width } = this.state;

    let url = `https://picsum.photos/id/${
      selectedImage.id
    }/${width}/${height}?${imageType ? "" : `grayscale`}${
      blur > 0 ? `&blur=${blur}` : ""
    }
    `;
    let downloadUrl = `https://i.picsum.photos/id/${
      selectedImage.id
    }/${width}/${height}.jpg?${imageType ? "" : `grayscale`}${
      blur > 0 ? `&blur=${blur}` : ""
    }`;

    return (
      <Modal
        size="xl"
        show={isVisible}
        onHide={() => setModalVisible(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {selectedImage.author}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AdvanceBar
            imageType={imageType}
            toggleImageType={this.toggleImageType}
            setInputValues={this.setInputValues}
            downloadUrl={downloadUrl}
            shareUrl={url}
          />
          <img src={url} alt={selectedImage.id} className="photo-gallery" />
        </Modal.Body>
      </Modal>
    );
  }
}
