import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.css";
import "./CustomCarousel.css";
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pixel4k.com/wp-content/uploads/2019/07/marvel-4k-artwork_1562104971.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.pixel4k.com/wp-content/uploads/2019/07/marvel-4k-artwork_1562104971.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
