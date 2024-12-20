import { useContext } from "react";
import { PaginationContext } from ".";
import { paginationNavigatorCls } from "../../consts/className";

const PaginationNavigator = () => {
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
  return (
    <>
      <div className={paginationNavigatorCls}>
        <button
          className={`${paginationNavigatorCls} button-prev`}
          onClick={handleClickPrev}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <button
          className={`${paginationNavigatorCls} button-next`}
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
