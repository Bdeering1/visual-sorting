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
        <p class="size-counter" style={{color: props.colors.dark}}>{props.arraySize}</p>
      </div>
    );
}


export default Graph;