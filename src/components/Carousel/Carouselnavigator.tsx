import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselNavigatorCls } from "@consts/className";

interface CarouselNavigatorProps {
  className?: string;
}
const CarouselNavigator = ({ className }: CarouselNavigatorProps) => {
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

  const carouselCls = useMemo(() => {
    return className
      ? `${className} ${carouselNavigatorCls}`
      : carouselNavigatorCls;
  }, [className]);

  return (
    <div className={carouselCls}>
      <button className={`${carouselCls} button-prev`} onClick={prevHandle}>
        {" "}
        prev{" "}
      </button>
      <button className={`${carouselCls} button-next`} onClick={nextHandle}>
        {" "}
        next{" "}
      </button>
    </div>
  );
};

export default CarouselNavigator;
