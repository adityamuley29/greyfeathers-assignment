import "./App.css";
import NavigationButton from "./components/NavigationButton";
import Notification from "./assets/Icons/notification.svg";
import User from "./assets/Icons/user.svg";
import SeachBar from "./components/SearchBar";
import Search from "./assets/Icons/search.svg";
import Filter from "./assets/Icons/filter.svg";
import Calander from "./assets/Icons/calendar.svg";
import DownArrow from "./assets/Icons/downArrow.svg";
import OrderTable from "./components/OrderTable";
import { useState } from "react";

function App() {
  const [isFilterHover, setIsFilterHover] = useState(false);

  const handleFilterHover = () => {
    setIsFilterHover(!isFilterHover);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="leftSection">
          <div className="buttonList">
            <NavigationButton name="Orders" />
          </div>
        </div>
        <div className="rightSection">
          <div className="rightSearchContainer">
            <SeachBar />
            <div className="rightButtons">
              <div className="notificationButton">
                <img
                  className="icon"
                  id="notificationIcon"
                  src={Notification}
                  alt="Icon"
                />
              </div>
              <div className="userProfileButton">
                <img className="icon" id="userIcon" src={User} alt="user" />
              </div>
            </div>
          </div>
          <div className="rightMainContainer">
            {isFilterHover && (
              <div className="filterHover">
                <div>
                  <h4>Order status</h4>
                  <span>
                    <input type="checkbox" checked />
                    New order
                  </span>
                  <span>
                    <input type="checkbox" />
                    Updated order
                  </span>
                </div>
                <div>
                  <h4>Payment</h4>
                  <span>
                    <input type="checkbox" checked />
                    Paid
                  </span>
                  <span>
                    <input type="checkbox" />
                    Un-paid
                  </span>
                </div>
                <div>
                  <h4>Order type</h4>
                  <span>
                    <input type="checkbox" checked />
                    Dine in
                  </span>
                  <span>
                    <input type="checkbox" />
                    Delivery
                  </span>
                  <span>
                    <input type="checkbox" />
                    Take away
                  </span>
                </div>
              </div>
            )}
            <p className="mainContainerHeading">Order details</p>
            <div className="mainContainerOptions">
              <div className="rightSearchBar" id="mainSearchBar">
                <img className="icon" id="searchIcon" src={Search} alt="Icon" />
                <input
                  className="seachTextArea"
                  type={"text"}
                  placeholder="search"
                />
              </div>
              <div className="rightOptions">
                <div
                  className="filterOption"
                  onMouseOver={handleFilterHover}
                  // onMouseOut={handleFilterHover}
                >
                  <img
                    onMouseOver={handleFilterHover}
                    // onMouseOut={handleFilterHover}
                    className="icon"
                    id="filterIcon"
                    src={Filter}
                  />
                  <p
                    onMouseOver={handleFilterHover}
                    // onMouseOut={handleFilterHover}
                  >
                    Filter
                  </p>
                </div>
                <div className="currentDayOption">
                  <div className="currentDayBox">
                    <img className="icon" id="calanderIcon" src={Calander} />
                    <p>Today</p>
                  </div>
                  <img className="downArrow" src={DownArrow} />
                </div>
              </div>
            </div>
            <div className="tableContainer">
              <OrderTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
