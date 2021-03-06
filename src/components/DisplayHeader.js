const DisplayHeader = (props) => {
  return (
    <div className="display-header">
      <form onChange={props.updateMonth}>
        <select>
          <option value="ytd">YTD</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </form>
    </div>
  );
};

export default DisplayHeader;
