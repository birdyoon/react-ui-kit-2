import { useContext, useMemo } from "react";
import { PaginationContext } from ".";
import { paginationPageButtons } from "../../consts/className";

interface PaginationPageButtonsProps {
  className?: string;
}
const PaginationPageButtons = ({ className }: PaginationPageButtonsProps) => {
  const { currentPage, setCurrentPage, visiblePageCount, totalPages } =
    useContext(PaginationContext);

  const currentPageBase =
    Math.floor((currentPage - 1) / visiblePageCount) * visiblePageCount; // 시작페이지

  const pageList = useMemo(() => {
    const startPage = currentPageBase + 1;
    const endPage = Math.min(currentPageBase + visiblePageCount, totalPages);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  }, [visiblePageCount, totalPages, currentPageBase]);

  const paginationCls = useMemo(() => {
    return className
      ? `${className} ${paginationPageButtons}`
      : paginationPageButtons;
  }, [className]);

  return (
    <>
      <div className={paginationCls}>
        <ul
          className={`${paginationCls} ul`}
          style={{ display: "flex", justifyContent: "center", gap: "8px" }}
        >
          {pageList.map((item) => (
            <li
              className={`${paginationCls}-${item}`}
              key={item}
              onClick={() => setCurrentPage(item)}
              style={{
                display: "flex",
                padding: "8px 12px",
                backgroundColor: item === currentPage ? "black" : "white",
                color: item === currentPage ? "white" : "black",
                cursor: "pointer",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PaginationPageButtons;
