import React, { Component } from 'react';
import Header from '../../Component/ImageContainerComponents/Header';
import ImageGallery from '../../Component/ImageContainerComponents/ImageGallery';
import Sidebar from '../../Component/ImageContainerComponents/Sidebar';
import Footer from '../../Component/ImageContainerComponents/Footer';
import BodyContent from '../../Component/ImageContainerComponents/BodyContent';
import Contact from '../../Component/ImageContainerComponents/Contact';
import Requests from '../../Component/ImageContainerComponents/Requests';
import Showoff from '../../Component/ImageContainerComponents/Showoff';
import DummyComponent from '../../Component/ImageContainerComponents/DummyComponent';

class ImageContainer extends Component {
  render() {
    return (
      <div className="Container">
        <Header />
        <ImageGallery />
        <BodyContent />
        {/* <Contact /> */}
        <DummyComponent />
        {/* <Requests /> */}
        {/* <Showoff /> */}
        <Sidebar />
        <Footer />
      </div>
    );
  }
};

export default ImageContainer;