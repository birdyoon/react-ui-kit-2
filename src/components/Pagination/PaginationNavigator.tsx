import { useContext, useMemo } from "react";
import { PaginationContext } from ".";
import { paginationNavigatorCls } from "@consts/className";

interface PaginationNavigatorProps {
  className?: string;
}

const PaginationNavigator = ({ className }: PaginationNavigatorProps) => {
  const { handleChangePage, currentPage, totalPages } =
    useContext(PaginationContext);

  const handleClickPrev = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 1) {
      handleChangePage(prevPage);
    }
  };
  const handleClickNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      handleChangePage(nextPage);
    }
  };

  const paginationCls = useMemo(() => {
    return className
      ? `${className} ${paginationNavigatorCls}`
      : paginationNavigatorCls;
  }, [className]);
  return (
    <>
      <div className={paginationCls}>
        <button
          className={`${paginationCls} prev`}
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <button
          className={`${paginationCls} next`}
          onClick={handleClickNext}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </>
  );
};

export default PaginationNavigator;
