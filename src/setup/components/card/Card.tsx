import logo from "../../../logo.svg";

export const Card = () => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <button type="button" className="btn btn-outline-info">More</button>
          </div>
        </div>
      </div>
    </>
  );
};
