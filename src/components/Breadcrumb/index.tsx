import React, {
  Children,
  createContext,
  FC,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import { breadcrumbBaseCls } from "../../consts/className";
import BreadcrumbSperator from "./BreadcrumbSperator";

interface BreadcrumbCompoundProps {
  Item: typeof BreadcrumbItem;
}

interface BreadcrumbProps extends PropsWithChildren {
  className?: string;
  width: string;
}

interface BreadcrumbContextProps {
  setItemWidth: React.Dispatch<React.SetStateAction<number>>;
  setSperatorWidth: React.Dispatch<React.SetStateAction<number>>;
}

export const BreadcrumbContext = createContext<BreadcrumbContextProps>({
  setItemWidth: () => {},
  setSperatorWidth: () => {},
});

const Breadcrumb: FC<BreadcrumbProps> & BreadcrumbCompoundProps = (props) => {
  const { children, className: classNameProp, width } = props;
  const [itemWidth, setItemWidth] = useState(0);
  const [speratorWidth, setSperatorWidth] = useState(0);
  const items = Children.toArray(children);

  const containerWidth = parseInt(width);
  console.log("containerWidth ", containerWidth);

  const itemSperatorWidth = itemWidth + speratorWidth;
  console.log("itemSperatorWidth ", itemSperatorWidth);

  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  const contextValue = { setItemWidth, setSperatorWidth };

  const breadcrumbCls = useMemo(() => {
    return classNameProp
      ? `${classNameProp} ${breadcrumbBaseCls}`
      : breadcrumbBaseCls;
  }, [classNameProp]);

  if (itemSperatorWidth > containerWidth) {
    return (
      <>
        <span className={breadcrumbCls}>
          <span>{items[0]}</span>
          <BreadcrumbSperator />
          <span onClick={handleDropdown} style={{ cursor: "pointer" }}>
            ...
          </span>
          {showDropdown && (
            <div>
              {items.slice(1, -1).map((item, index) => (
                <span key={index}>
                  {item}
                  {index < items.length - 1 && <BreadcrumbSperator />}
                </span>
              ))}
            </div>
          )}
          <BreadcrumbSperator />
          <span>{items[items.length - 1]}</span>
        </span>
      </>
    );
  }

  return (
    <>
      <BreadcrumbContext.Provider value={contextValue}>
        <span className={breadcrumbCls}>
          {items.map((item, index) => (
            <span key={index}>
              {item}
              {index < items.length - 1 && <BreadcrumbSperator />}
            </span>
          ))}
        </span>
      </BreadcrumbContext.Provider>
    </>
  );
};

Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;
