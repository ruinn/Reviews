import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReviewsOnPage } from '../../actions/sidebarActions';

class Pagination extends Component {
  render() {
    // state props
    const { maxPageIndex, minPageIndex, currentPageIndex, hostelId, sortBy, isEnglish } = this.props;
    // action props
    const { fetchReviewsOnPage } = this.props;

    const renderPagination = () => {
      let pagination = [];
      for (let i = minPageIndex; i <= maxPageIndex; i++) {
        let classname = 'page-item';
        if (i=== currentPageIndex) {
          classname += ' active';
        }
        pagination.push(
          <li className={classname} key={i}>
            <a className="page-link" onClick={() => fetchReviewsOnPage(i, hostelId, sortBy, isEnglish)}>
              {i}
            </a>
          </li>
        );
      }
      return pagination;
    };
    return (
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">First</span>
          </li>
          <li className="page-item">
            <span className="page-link">&lt;</span>
          </li>

          {/* page numbers */}
          {/*
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
      */}

          {renderPagination()}

          {/* next last */}
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
  }
}

const mapStateToProps = ({ sidebarReducer, overviewReviews }) => ({
  minPageIndex: sidebarReducer.minPageIndex,
  maxPageIndex: sidebarReducer.maxPageIndex,
  sortBy: sidebarReducer.sortBy,
  isEnglish: sidebarReducer.isEnglish,
  currentPageIndex: sidebarReducer.pageNum,
  hostelId: overviewReviews._id
});

export default connect(
  mapStateToProps,
  { fetchReviewsOnPage }
)(Pagination);
