import { useContext, useMemo } from "react";
import { CarouselContext } from ".";
import { carouselIndicatorCls } from "../../consts/className";

interface CarouselIndicatorProps {
  className?: string;
}
const CarouselIndicator = ({ className }: CarouselIndicatorProps) => {
  const { itemLength, carouselIndex, setCarouselIndex } =
    useContext(CarouselContext);
  const items = Array.from({ length: itemLength });

  const carouselCls = useMemo(() => {
    return className
      ? `${className} ${carouselIndicatorCls}`
      : carouselIndicatorCls;
  }, [className]);

  return (
    <>
      <div className={carouselCls}>
        <div
          className={`${carouselCls} indicator`}
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          {items.map((_, index) => (
            <div
              className={`${carouselCls} ${index}`}
              key={index}
              onClick={() => setCarouselIndex(index)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: index === carouselIndex ? "white" : "black",
                cursor: "pointer",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselIndicator;
