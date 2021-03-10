import './Graph.css';

const Graph = (props) => {
    return (
      <div
        className="graph"
      >
        {
          props.array.map((value, idx) => (
            <div
              key={idx}
              className={props.transition == 0 ? "array-bar"
                          : props.transition == 1 ? "fast-bar-transition"
                          : "slow-bar-transition"}
              style={{
                height: `${value/10}%`,
                backgroundColor: props.selected[idx] ? props.colors.selected : props.colors.accent
              }}
            />
          ))
        }
      </div>
    );
}


export default Graph;