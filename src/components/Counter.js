
const Counter = ({counter, inc, dec, rnd}) => {
    return(
        <div className="jumotron">
            <h1>{counter}</h1>
            <button onClick={inc} className="btn btn-primary">Dec</button>
            <button onClick={dec} className="btn btn-primary">Inc</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}
export default Counter