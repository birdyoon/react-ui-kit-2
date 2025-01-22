import { PropsWithChildren, useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselItemCls } from "@consts/className";

interface CarouselItemProps extends PropsWithChildren {
  className?: string;
  index: number;
}

const CarouselItem = ({ children, index, className }: CarouselItemProps) => {
  const { carouselIndex } = useContext(CarouselContext);
  const isActive = useMemo(
    () => carouselIndex === index,
    [carouselIndex, index]
  );

  const carouselCls = useMemo(() => {
    return className ? `${className} ${carouselItemCls}` : carouselItemCls;
  }, [className]);

  return (
    <div
      className={carouselCls}
      data-active={isActive}
      style={{ display: index === carouselIndex ? "block" : "none" }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
