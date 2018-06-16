import React from 'react';

const SidebarHeader = () => (
  <div id="sidebarHeader">
    <div className="d-flex justify-content-between">
      <div>
        <h3>Reviews & Ratings</h3>
      </div>

      <div>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
    <div>
      The rating percentage is calculated from customers who booked within the
      last 6 months. All ratings and reviews are based on the feedback and
      opinions of the customers who submitted them and do not express the
      opinions of Hostelworld.com. This way, you get an up-to-the-minute opinion
      of just how good a hostel really is.
    </div>
    <a id="guideLines" href="https://www.hostelworld.com/reviewguidelines">
      <div>Read our review guidelines</div>
    </a>
  </div>
);

export default SidebarHeader;
