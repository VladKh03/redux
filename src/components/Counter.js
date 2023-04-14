import {dec, inc, rnd, set} from "../actions"
import { useSelector, useDispatch } from "react-redux"

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return(
        <div className="jumotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">Dec</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">Inc</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
            <button onClick={() => dispatch(set())} className="btn btn-primary">SET</button>
        </div>
    )
}

export default Counter