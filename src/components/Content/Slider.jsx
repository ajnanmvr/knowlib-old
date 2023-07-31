import Axios from "../../Axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await Axios.get(`/data`);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // Number of slides and delay (in milliseconds) between each slide
  const numSlides = 3;
  const autoSlideDelay = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the currentSlide in a cyclic manner
      setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
    }, autoSlideDelay);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // We handle the auto-slide manually
    initialSlide: currentSlide, // Start with the currentSlide state
  };

  return (
    <section className="px-16 ">
      <Slider {...settings} className="flex ffff">
        {data.map((item, key) => (
          <div>
            <div className="bg-white rounded-xl flex items-center content-center bg-opacity-20 mx-4 ">
              <a href={`/posts/${item.slug}`} key={key}>
                <div className="flex justify-left content-center items-center max-w-1/2 gap-3 p-6">
                  <img
                    className="w-12 h-12 rounded-lg"
                    src={`https://www.google.com/s2/favicons?domain=${item.url}`}
                    alt={item.name}
                  />
                  <div>
                    <h1
                      className="text-yellow-100 opacity-90 h-8  overflow-hidden"
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        marginBottom: 3,
                      }}
                    >
                      {item.name}
                    </h1>
                    <p className={"text-sm 2xl:text-base"}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AutoCarousel;
