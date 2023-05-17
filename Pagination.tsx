import type { FC } from "react";
import { usePagination } from "@src/hooks";
import classnames from "classnames";
import {
  UilAngleDoubleLeft,
  UilAngleDoubleRight,
} from "@iconscout/react-unicons";

interface Props {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: FC<Props> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className = "",
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  const baseStyles =
    "px-2.5 py-1 flex justify-center items-center rounded-md font-inter text-[0.813rem] bg-white hover:bg-grey-300 border border-neutral-200 select-none cursor-pointer";

  return (
    <ul
      className={classnames("flex justify-center flex-wrap gap-2", className)}
    >
      <li
        className={classnames(baseStyles, {
          hidden: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <UilAngleDoubleLeft size={20} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === "DOTS") {
          return (
            <li key={index} className="select-none">
              ...
            </li>
          );
        }
        return (
          <li
            key={index}
            className={classnames(baseStyles, {
              "font-bold border-purple-500": pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(baseStyles, {
          hidden: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <UilAngleDoubleRight size={20} />
      </li>
    </ul>
  );
};

export default Pagination;
