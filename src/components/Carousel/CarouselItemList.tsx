import { PropsWithChildren, useMemo } from "react";
import { carouselItemListCls } from "../../consts/className";

interface CarouselitemListProps extends PropsWithChildren {
  className?: string;
}
const CarouselitemList = ({ children, className }: CarouselitemListProps) => {
  const carouselCls = useMemo(() => {
    return className
      ? `${className} ${carouselItemListCls}`
      : carouselItemListCls;
  }, [className]);

  return <div className={carouselCls}>{children}</div>;
};

export default CarouselitemList;
