import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css"
import img1 from '../../Img/slider1.jpg'
import img2 from '../../Img/slider2.jpg'
import img3 from '../../Img/slider3.jpg'

function IndividualIntervalsExample() {
    
    return (
        <div className="carouselContainer">
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img
                        className="imgCarousel"
                        src={img1}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="imgCarousel"
                        src={img2}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="imgCarousel"
                        src={img3}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default IndividualIntervalsExample;