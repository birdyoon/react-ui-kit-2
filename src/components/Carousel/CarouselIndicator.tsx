import { useContext } from "react";
import { CarouselContext } from ".";
import { carouselIndicatorCls } from "../../consts/className";

const CarouselIndicator = () => {
  const { itemLength, carouselIndex, setCarouselIndex } =
    useContext(CarouselContext);
  const items = Array.from({ length: itemLength });
  return (
    <>
      <div className={carouselIndicatorCls}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {items.map((_, index) => (
            <div
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
