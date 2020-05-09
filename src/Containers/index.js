import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { photoList } from "../Apis";
import { CustomModal } from "../Components";
import "./index.css";
import CustomInfiniteScroll from "../Components/CustomInfiniteScroll";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export class PhotoList extends Component {
  constructor() {
    super();
    this.state = {
      photoListData: [],
      isVisible: false,
      imageType: true,
      selectedImage: {},
      currentPage: 2,
    };
    this.toggleImageType = this.toggleImageType.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    const currentPage = getLocalStorage("currentPage");
    const pageOffSet = getLocalStorage("pageOffSet");
    debugger;
    if (Number(currentPage) >= 2) {
      const items = 30 + 10 * Number(currentPage);
      photoList(1, items).then((res) => {
        this.setState({ photoListData: res });
        window.scrollTo(0, Number(pageOffSet));
      });
    } else {
      photoList(1, 30).then((res) => this.setState({ photoListData: res }));
    }
    const imageType = getLocalStorage("imageType");
    if (imageType === "true") this.setState({ imageType: false });
    else this.setState({ imageType: true });
  }

  toggleImageType() {
    this.setState((prevState) => {
      return { imageType: !prevState.imageType };
    });
    setLocalStorage("imageType", this.state.imageType);
  }

  setModalVisible(visible) {
    this.setState({ isVisible: visible });
  }

  toggleModal(selectedImage) {
    this.setState({ isVisible: true, selectedImage });
  }

  fetchMoreData() {
    const { currentPage } = this.state;
    photoList(currentPage, 10).then((res) =>
      this.setState(
        (prevState) => {
          return {
            photoListData: [...prevState.photoListData, ...res],
            currentPage: prevState.currentPage + 1,
          };
        },
        () => {
          setLocalStorage("currentPage", this.state.currentPage);
        }
      )
    );
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    setLocalStorage("pageOffSet", window.pageYOffset);
  };

  render() {
    const { photoListData, imageType, isVisible, selectedImage } = this.state;
    return (
      <>
        <section>
          <Button
            onClick={this.toggleImageType}
            variant="primary"
            className="float-right m-2"
          >
            {imageType ? "GrayScale" : "Coloured"}
          </Button>
          <div className="clearfix" />

          <CustomInfiniteScroll
            photoListData={photoListData}
            imageType={imageType}
            fetchMoreData={this.fetchMoreData}
            toggleModal={this.toggleModal}
          />
        </section>
        {isVisible && (
          <CustomModal
            isVisible={isVisible}
            setModalVisible={this.setModalVisible}
            selectedImage={selectedImage}
            imageType={imageType}
          />
        )}
      </>
    );
  }
}

export default PhotoList;
