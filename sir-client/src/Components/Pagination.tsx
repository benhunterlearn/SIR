import React, { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type paginationProps = {
  pages: number;
  size: number;
  firstPage: boolean;
  lastPage: boolean;
  totalCount: number;
  currentPage: number;
  offset: number;
  navigatePage: (page: number, size: number) => void;
};

const Pagination: React.FC<paginationProps> = ({
  pages,
  size,
  firstPage,
  lastPage,
  totalCount,
  currentPage,
  offset,
  navigatePage,
}: paginationProps) => {
  for (let x = 0; x < 1; x = +1) console.log('');
  console.log(
    pages,
    size,
    firstPage,
    lastPage,
    totalCount,
    currentPage,
    offset,
    navigatePage,
  );
  return (
    <div className="pagination">
      <div className="size-container">
        {`Rows per page: ${size}`}
        <button type="button">
          <i className="gg-chevron-down" />
        </button>
      </div>
      <span>
        {`${offset + 1}-${offset + size} of ${totalCount}`}
      </span>
      <div className="page-controls">
        <button type="button" disabled={firstPage} onClick={() => navigatePage(currentPage - 1, size)}>
          <i className="gg-chevron-left" />
        </button>
        <button type="button" disabled={lastPage} onClick={() => navigatePage(currentPage + 1, size)}>
          <i className="gg-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

/*
 Rows per page: 5 \/
 1-5 of 13 <----
 < >
*/