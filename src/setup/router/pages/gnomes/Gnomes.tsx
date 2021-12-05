import logo from "../../../../logo.svg";
import { Card } from "../../../components/card/Card";

export const Gnomes = () => {
  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <h1 className="display-4">
          Gnomes<small> at Brastlewark</small>
        </h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <Card/>
        </div>
      </div>
    </>
  );
};
