import { useDispatch } from "react-redux";

const ControlsofCounter = () =>{
    let dispatch = useDispatch();
    const decrement = () =>{
        dispatch({type:"DECREMENT"})
    }
    const increment = () =>{
        dispatch({type:"INCREMENT"})
    }
    return (
        <>
            <center><button type="button" class="btn btn-outline-primary gap" onClick={decrement}>-1</button>
            <button type="button" class="btn btn-outline-success gap" onClick={increment}>+1</button></center>
        </>
    );
}
export default ControlsofCounter;