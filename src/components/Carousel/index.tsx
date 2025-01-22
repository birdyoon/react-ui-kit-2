import { createContext, FC, PropsWithChildren, useMemo, useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselitemList from "./CarouselItemList";
import CarouselNavigator from "./Carouselnavigator";
import CarouselIndicator from "./CarouselIndicator";
import { carouselBaseCls } from "@consts/className";

interface CarouselCompoundProps {
  ItemList: typeof CarouselitemList;
  Item: typeof CarouselItem;
  Navigator: typeof CarouselNavigator;
  Indicator: typeof CarouselIndicator;
}

interface CarouselProps extends PropsWithChildren {
  itemLength?: number;
  className?: string;
}

interface CarouselContextProps {
  carouselIndex: number;
  itemLength: number;
  setCarouselIndex: (index: number) => void;
}

export const CarouselContext = createContext<CarouselContextProps>({
  carouselIndex: 0,
  itemLength: 0,
  setCarouselIndex: () => {},
});

const Carousel: FC<CarouselProps> & CarouselCompoundProps = (props) => {
  const { children, itemLength, className: classNameProp } = props;

  const [carouselIndex, setCarouselIndex] = useState(0);
  console.log("carouselIndex ", carouselIndex);
  const contextValue = {
    carouselIndex,
    setCarouselIndex,
    itemLength: itemLength || 0,
  };

  const carouselCls = useMemo(() => {
    return classNameProp
      ? `${classNameProp} ${carouselBaseCls}`
      : carouselBaseCls;
  }, [classNameProp]);

  return (
    <>
      <CarouselContext.Provider value={contextValue}>
        <div className={carouselCls}>{children}</div>
      </CarouselContext.Provider>
    </>
  );
};

Carousel.ItemList = CarouselitemList;
Carousel.Item = CarouselItem;
Carousel.Navigator = CarouselNavigator;
Carousel.Indicator = CarouselIndicator;

export default Carousel;
