import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image1.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image2.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image3.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image4.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image5.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image6.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image7.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image8.jpg"
  },
  {
    src: "https://imagegallerystg.blob.core.windows.net/img/image9.jpg"
  }
];

class ImageGallery extends React.Component {
  render() {
    return <Gallery photos={photos} />;
  }
}
export default ImageGallery;
