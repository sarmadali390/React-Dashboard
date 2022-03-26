import "./Main.css";
import hello from "../../assests/Hello.png";
import Chart from "../charts/Chart";
import { HiUserGroup, HiVideoCamera } from "react-icons/hi";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";
const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Codersbite</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i>
              <HiUserGroup color="lightblue"/>
            </i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Subscribers</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>
          <div className="card">
            <i>
              <BsFillCalendar2WeekFill color="crimson" />
            </i>
            <div className="card_inner">
              <p className="text-primary-p">Times of Watching</p>
              <span className="font-bold text-title">2467</span>
            </div>
          </div>
          <div className="card">
            <i>
              <HiVideoCamera color="goldenrod"  />
            </i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Videos</p>
              <span className="font-bold text-title">340</span>
            </div>
          </div>
          <div className="card">
            <i>
              <BiLike color="green"  />
            </i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Likes</p>
              <span className="font-bold text-title">645</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i><FaHandHoldingUsd /></i>
            </div>
            <Chart />
          </div>
          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i><FaHandHoldingUsd /></i>
            </div>
            <div className="charts__right__cards">
                <div className="card1">
                    <h1>Income</h1>
                    <p>$75,300</p>
                </div>
                <div className="card2">
                    <h1>Sales</h1>
                    <p>$47,356</p>
                </div>
                <div className="card3">
                    <h1>Users</h1>
                    <p>255,568</p>
                </div>
                <div className="card4">
                    <h1>Orders</h1>
                    <p>2564</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
