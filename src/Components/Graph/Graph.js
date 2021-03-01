import './Graph.css';

const Graph = (props) => {
    return (
      <div
        className="graph"
        style={{backgroundColor: props.colors.light, borderColor: props.colors.text}}
      >
        {
          props.array.map((value, idx) => (
            <div
              key={idx}
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