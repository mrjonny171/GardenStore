
import "../components/SliderImages/SliderImagesData.js"
import { Sliderdata } from '../components/SliderImages/SliderImagesData.js';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css"

const Home = () => {
    return (
        <>
        <AliceCarousel autoPlay autoPlayInterval="3000">
                {Sliderdata.map(item =>{
                    return(
                        <>
                        <img src={item.path} alt={item.alt} className="sliderimg"/>
                        <p>ola</p>
                        </>
                    )
                }

                ) } 
            </AliceCarousel>
        </>
    )
}

export default Home
