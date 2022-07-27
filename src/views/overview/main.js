import SideMenuBar from "./sidemenubar/sidemenubar";
import Card from "./card/card";
import "./main.css";

const Main = () => {
  return (
    <div className="card_content">
      <SideMenuBar />
      <div className="main_overall">
        <div className="main_overview">Overview</div>
        <div className="card_overall">
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Main;
