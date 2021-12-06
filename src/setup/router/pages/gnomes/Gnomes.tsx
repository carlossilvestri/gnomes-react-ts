import { useContext, useEffect, useState } from "react";
import { Card, Loading } from "../../../components";
import { AllBrastlewark, Brastlewark } from '../../../interfaces/brastlewark-requests.interface';
import { AllBrastlewarkContext } from '../../../context/AllBrastlewarkContext';

export const Gnomes = () => {
  const { allBrastlewark, loading } = useContext(AllBrastlewarkContext);
  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <h1 className="display-4">
          Gnomes<small> at Brastlewark</small>
        </h1>
        <hr />
        <div className="card-columns">
          {
            loading ? ( <Loading/> ) : 
            (
              allBrastlewark?.Brastlewark.map( (brastlewark : Brastlewark) => (
                <Card {...brastlewark} key={`card-brastlewark-${brastlewark.id}`}/>
              ))
            )
          }
        </div>
      </div>
    </>
  );
};
