import './Graph.css';

const Graph = (props) => {
    return (
      <div
        className="graph"
        style={{
          backgroundColor: props.colors.light
        }}
      >
        {
          props.array.map((value, idx) => (
            <div
              key={idx}
              className={props.transition ? "fast-bar-transition"
                          : props.initialized == 2 ? "array-bar"
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