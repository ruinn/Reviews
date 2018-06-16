import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReviewsOnPage } from '../../actions/sidebarActions';

class Pagination extends Component {
  render() {
    // state props
    const {
      maxPageIndex,
      minPageIndex,
      currentPageIndex,
      hostelId,
      sortBy,
      isEnglish
    } = this.props;
    // action props
    const { fetchReviewsOnPage } = this.props;

    const renderPagination = () => {
      let pagination = [];
      for (let i = minPageIndex; i <= maxPageIndex; i++) {
        let classname = 'page-item';
        if (i === currentPageIndex) {
          classname += ' active';
        }
        pagination.push(
          <li className={classname} key={i}>
            <span
              className="page-link"
              onClick={() => fetchReviewsOnPage(i, hostelId, sortBy, isEnglish)}
            >
              {i}
            </span>
          </li>
        );
      }
      return pagination;
    };
    return (
      <div id="pagination" className="container d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination">
            <li
              className={`page-item ${this.props.currentPageIndex === 1 &&
                ' disabled'}`}
            >
              <span
                className="page-link"
                onClick={() =>
                  fetchReviewsOnPage(1, hostelId, sortBy, isEnglish)
                }
              >
                First
              </span>
            </li>
            <li
              className={`page-item ${this.props.currentPageIndex <= 1 &&
                ' disabled'}`}
            >
              <span
                className="page-link"
                onClick={() =>
                  fetchReviewsOnPage(
                    this.props.currentPageIndex - 1,
                    hostelId,
                    sortBy,
                    isEnglish
                  )
                }
              >
                &lt;
              </span>
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
            <li
              className={`page-item ${this.props.currentPageIndex ===
                this.props.maxPageIndex && ' disabled'}`}
            >
              <span
                className="page-link"
                onClick={() =>
                  fetchReviewsOnPage(
                    this.props.currentPageIndex + 1,
                    hostelId,
                    sortBy,
                    isEnglish
                  )
                }
              >
                &gt;
              </span>
            </li>
            <li
              className={`page-item ${this.props.currentPageIndex ===
                this.props.maxPageIndex && ' disabled'}`}
            >
              <span
                className="page-link"
                onClick={() =>
                  fetchReviewsOnPage(
                    this.props.maxPageIndex,
                    hostelId,
                    sortBy,
                    isEnglish
                  )
                }
              >
                Last
              </span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ sidebarReducer, overviewReviews }) => ({
  minPageIndex: sidebarReducer.minPageIndex,
  maxPageIndex: sidebarReducer.maxPageIndex,
  sortBy: sidebarReducer.sortBy,
  isEnglish: sidebarReducer.isEnglish,
  currentPageIndex: sidebarReducer.pageNum,
  hostelId: overviewReviews.id
});

export default connect(
  mapStateToProps,
  { fetchReviewsOnPage }
)(Pagination);
