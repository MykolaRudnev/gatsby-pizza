import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey);
  margin: 2rem 0;
  border-radius: 5px;
  text-align: center;
  & > * {
    padding: 1 rem;
    flex: 1;
    margin: 0;
    border-radius: 1px solide var(--gray);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= totalPages;
  return (
    <>
      <PaginationStyles>
        <Link disabled={!hasNextPage} to={`${base}/${prevPage}`}>
          Prev
        </Link>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Link
            className={currentPage === 1 && i === 0 ? 'current' : ''}
            to={`${base}/${i > 0 ? i + 1 : ''}`}
          >
            {i + 1}
          </Link>
        ))}
        <Link disabled={!hasPrevPage} to={`${base}/${nextPage}`}>
          Next
        </Link>
      </PaginationStyles>
    </>
  );
}
