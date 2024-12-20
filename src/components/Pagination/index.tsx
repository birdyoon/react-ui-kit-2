import { createContext, FC, PropsWithChildren, useState } from "react";
import PaginationNavigator from "./PaginationNavigator";
import PaginationPageButtons from "./PaginationPageButtons";
import { paginationBaseCls } from "../../consts/className";

interface PaginationCompoundProps {
  PageButtons: typeof PaginationPageButtons;
  Navigator: typeof PaginationNavigator;
}

interface PaginationProps extends PropsWithChildren {
  itemLength: number; // 게시물 총 개수
  value: number; // 현재 페이지 번호
  onPageChange: (page: number) => void; // 페이지 번호가 바뀔때마다 실행되는 함수
  className?: string;
  visiblePageCount: number; // 페이지 단위
  itemsPerPage: number; // 한 페이지에 표시할 아이템 수
}

interface PaginationContextProps {
  totalPages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  visiblePageCount: number; // 페이지 단위
  itemsPerPage: number; // 한 페이지에 표시할 아이템 수
}

export const PaginationContext = createContext<PaginationContextProps>({
  totalPages: 0,
  currentPage: 1,
  handleChangePage: () => {},
  setCurrentPage: () => {},
  visiblePageCount: 0,
  itemsPerPage: 0,
});

const Pagination: FC<PaginationProps> & PaginationCompoundProps = (props) => {
  const {
    children,
    onPageChange,
    itemLength,
    itemsPerPage,
    className: classNameProp,
  } = props;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(itemLength / itemsPerPage);
  // console.log(totalPages);
  const handleChangePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const contextValue = {
    handleChangePage,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalPages,
    visiblePageCount: 10,
  };

  const paginationCls = classNameProp
    ? `${classNameProp} ${paginationBaseCls}`
    : paginationBaseCls;
  return (
    <>
      <PaginationContext.Provider value={contextValue}>
        <div className={paginationCls}>{children}</div>
      </PaginationContext.Provider>
    </>
  );
};

Pagination.Navigator = PaginationNavigator;
Pagination.PageButtons = PaginationPageButtons;

export default Pagination;
