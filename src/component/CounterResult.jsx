import { useSelector } from "react-redux";

const CounterResult = () => {
    const counter = useSelector(store => store.counter);
  return (
    <>
      <center>
        <p class="card-text botgap">Counter Value : {counter}</p>
      </center>
    </>
  );
};
export default CounterResult;
