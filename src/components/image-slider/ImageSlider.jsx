import { useEffect, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./styles.css";

export default function ImageSlider() {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const fetchImageUrl = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchImageUrl();
  }, []);

  const handleNext = () =>
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);

  const handlePrevious = () =>
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);

  return loading ? (
    <p>Loading</p>
  ) : (
    <div className="image-container">
      <SlArrowLeft className="arrow arrow-left" onClick={handlePrevious} />
      {images && images.length ? (
        images.map((image, index) => (
          <img
            key={image.id}
            src={image.download_url}
            className={currentSlide === index ? "image" : "image hide"}
          />
        ))
      ) : (
        <p>No image found</p>
      )}
      <SlArrowRight className="arrow arrow-right" onClick={handleNext} />
    </div>
  );
}
