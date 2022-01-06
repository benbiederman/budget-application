const Data = (props) => {
  return (
    <div className="data" tabIndex={0}>
      <button onClick={() => props.removeData(props.id)} className="x-btn">
        X
      </button>
      <h3>
        {props.name} | {props.month}
      </h3>
      <p>${props.amount.toFixed(2)}</p>
    </div>
  );
};

export default Data;
