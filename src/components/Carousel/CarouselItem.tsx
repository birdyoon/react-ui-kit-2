import { PropsWithChildren, useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselItemCls } from "../../consts/className";

interface CarouselItemProps extends PropsWithChildren {
  index: number;
}

const CarouselItem = ({ children, index }: CarouselItemProps) => {
  const { carouselIndex } = useContext(CarouselContext);
  const isActive = useMemo(
    () => carouselIndex === index,
    [carouselIndex, index]
  );

  return (
    <div
      className={carouselItemCls}
      data-active={isActive}
      style={{ display: index === carouselIndex ? "block" : "none" }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
