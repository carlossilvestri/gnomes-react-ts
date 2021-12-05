import logo from "../../../../../logo.svg";

export const Gnome = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={logo}
            alt=""
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3> hero.superhero</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego:</b>
            </li>
            <li className="list-group-item">
              <b>Publisher:</b>
            </li>
            <li className="list-group-item">
              <b>First Appearance:</b>
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>characters</p>

          <button className="btn btn-outline-info">Regresar</button>
        </div>
      </div>
    </>
  );
};
