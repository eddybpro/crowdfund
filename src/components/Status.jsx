import "./Status.css";

function Status() {
  return (
    <div className="StatusBox">
      <div className="StatusBox-Card">
        <strong>$89,914</strong>
        <span>of $100,000 backed</span>
        <hr className="line" />
      </div>
      <div className="StatusBox-Card">
        <strong>5,007</strong>
        <span>total backers</span>
        <hr className="line" />
      </div>
      <div className="StatusBox-Card">
        <strong>56</strong>
        <span>days left</span>
      </div>
      <div className="StatusBox-Range">
        <div></div>
      </div>
    </div>
  );
}
export default Status;
