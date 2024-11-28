import { useSelector } from "react-redux";
import ControlsofCounter from "./ControlsofCounter";
import CounterResult from "./CounterResult";

const Cardcounter = () => {
    
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <center><h5 class="card-title">Counter</h5></center>
          <CounterResult></CounterResult>
            <ControlsofCounter></ControlsofCounter>
        </div>
      </div>
    </>
  );
};
export default Cardcounter;
