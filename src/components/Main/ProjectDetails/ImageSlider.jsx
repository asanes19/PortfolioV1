import { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const ImageSlider = ({ project }) => {
  const images = [
    project.mainImage,
    ...(Array.isArray(project.gallery) ? project.gallery : []),
  ].filter(img => typeof img === "string" && img.length > 0);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border group bg-bg">
      {/* Slider Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full shrink-0 aspect-video">
            <img
              src={img}
              alt={`${project.title} - Slide ${index + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows (Only if > 1 image) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            aria-label={`Previous image of ${project.title}`}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full cursor-pointer backdrop-blur-sm transition-colors text-white border border-border-subtle"
          >
            <IoChevronBackOutline className="text-white" />
          </button>
          <button
            onClick={goToNext}
            aria-label={`Next image of ${project.title}`}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 p-2 rounded-full cursor-pointer backdrop-blur-sm transition-colors text-white border border-border-subtle"
          >
            <IoChevronForwardOutline className="text-white" />
          </button>
        </>
      )}

      {/* Indicators (Dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1} of ${images.length}`}
              aria-current={index === currentIndex}
              className={`w-2 h-2 rounded-full transition-[width,background-color] duration-300 ${
                index === currentIndex ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
