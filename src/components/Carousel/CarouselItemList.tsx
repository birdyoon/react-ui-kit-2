import { PropsWithChildren } from "react";
import { carouselItemListCls } from "../../consts/className";

const CarouselitemList = ({ children }: PropsWithChildren) => {
  return <div className={carouselItemListCls}>{children}</div>;
};

export default CarouselitemList;
