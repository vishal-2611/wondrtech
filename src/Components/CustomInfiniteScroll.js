import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Col, Row } from "react-bootstrap";

function CustomInfiniteScroll({
  photoListData,
  imageType,
  fetchMoreData,
  toggleModal,
}) {
  return (
    <InfiniteScroll
      dataLength={photoListData.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4 className="text-center">Loading...</h4>}
    >
      <Row>
        {photoListData.map((res, index) => (
          <Col
            md="2"
            className="d-flex flex-column align-items-center"
            onClick={() => toggleModal(res)}
            key={index}
          >
            <img
              src={`https://picsum.photos/id/${res.id}/250/400?${
                imageType ? "" : "grayscale"
              }`}
              height="300"
              width="250"
              alt={res.id}
              className="photo-gallery"
            />
            <h5>{res.author}</h5>
          </Col>
        ))}
      </Row>
    </InfiniteScroll>
  );
}
export default CustomInfiniteScroll;
