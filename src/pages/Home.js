
import "../components/SliderImages/SliderImagesData.js"
import { Sliderdata } from '../components/SliderImages/SliderImagesData.js';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css"

const Home = () => {
    return (
        <>
        <AliceCarousel autoPlay autoPlayInterval="5000" fadeOutAnimation={true} disableButtonsControls infinite>
                {Sliderdata.map((item,index) =>{
                    return(
                        <img key={index} src={item.path}  alt={item.alt} className="sliderimg"/>
                    )
                }

                ) } 
            </AliceCarousel>
        </>
    )
}

export default Home
