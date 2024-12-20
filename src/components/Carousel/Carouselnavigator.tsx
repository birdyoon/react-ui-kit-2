import { useContext } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorCls } from "../../consts/className";

const CarouselNavigator = () => {
  const {
    setCarouselIndex,
    carouselIndex,
    itemLength = 0,
  } = useContext(CarouselContext);

  const prevHandle = () => {
    const isFirstSlide = carouselIndex === 0;
    const newIndex = isFirstSlide ? itemLength - 1 : carouselIndex - 1;
    setCarouselIndex(newIndex);
  };

  const nextHandle = () => {
    const isLastSlide = carouselIndex === itemLength - 1;
    const newIndex = isLastSlide ? 0 : carouselIndex + 1;
    setCarouselIndex(newIndex);
  };
  return (
    <div className={carouselNavigatorCls}>
      <button
        className={`${carouselNavigatorCls} button-prev`}
        onClick={prevHandle}
      >
        {" "}
        prev{" "}
      </button>
      <button
        className={`${carouselNavigatorCls} button-next`}
        onClick={nextHandle}
      >
        {" "}
        next{" "}
      </button>
    </div>
  );
};

export default CarouselNavigator;
