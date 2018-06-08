import React from 'react';

const Pagination = () => (
  <nav aria-label="...">
    <ul className="pagination">
      <li className="page-item disabled">
        <span className="page-link">First</span>
      </li>
      <li className="page-item">
        <span className="page-link">&lt;</span>
      </li>
      <li className="page-item">
        <a className="page-link" href="/">
          1
        </a>
      </li>
      <li className="page-item active">
        <span className="page-link">
          2
          <span className="sr-only">(current)</span>
        </span>
      </li>
      <li className="page-item">
        <a className="page-link" href="/">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="/">
          &gt;
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="/">
          Last
        </a>
      </li>
    </ul>
  </nav>
);

export default Pagination;
