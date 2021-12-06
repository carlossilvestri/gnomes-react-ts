import { Brastlewark } from '../../../../interfaces/brastlewark-requests.interface';
import { useContext, useEffect, useMemo, useState } from 'react';
import logo from "../../../../../logo.svg";
import { useNavigate, useParams } from 'react-router-dom';
import { AllBrastlewarkContext } from '../../../../context/AllBrastlewarkContext';

export const Gnome = () => {
  const { allBrastlewark, setBrastlewark } = useContext(AllBrastlewarkContext);
  const { id } = useParams();
  const getBrastleWark = (idBrastlewark:number) => allBrastlewark?.Brastlewark.filter( (brastlewark: Brastlewark) => brastlewark.id === idBrastlewark );
  const brastlewark = useMemo( () => getBrastleWark(Number(id)), [ id ]);

  useEffect(() => {
    /*
    const getBrastleWark = (id: number) => {
      // Get
      const brastlewark = allBrastlewark?.Brastlewark.filter( (brastlewark: Brastlewark) => brastlewark.id === id );
    }
    getBrastleWark(Number(id));
    */
   console.log('brastlewark ', brastlewark);
  }, []);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate( -1 );
}
  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img
            src={brastlewark ? brastlewark[0].thumbnail : ""}
            alt=""
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3>{brastlewark ? brastlewark[0].name : "No name"}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Age: {brastlewark ? brastlewark[0].age + " years" : "No age"}</b>
            </li>
            <li className="list-group-item">
              <b>Hair color: {brastlewark ? brastlewark[0].hair_color : "No hair color"}</b>
            </li>
            <li className="list-group-item">
              <b>First Appearance:</b>
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>characters</p>

          <button className="btn btn-outline-info" onClick={handleReturn}>Regresar</button>
        </div>
      </div>
    </>
  );
};
