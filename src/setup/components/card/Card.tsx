import { Link } from "react-router-dom";
import { Brastlewark } from "../../interfaces/brastlewark-requests.interface";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const defaultImage = 'https://media3.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif';

export const Card = ( {id, thumbnail, name, age, hair_color}: Brastlewark) => {
  return (
    <>
        <div className="card">
          <LazyLoadImage placeholderSrc={defaultImage} src={thumbnail} className="card-img-top" alt="Gnome image" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              This is {name }, has {age} years, its eye's colors are {hair_color }...
            </p>
            <Link to={`/gnome/${id}`} >
            <button type="button" className="btn btn-outline-info">More
              </button>
            </Link>
          </div>
        </div>
    </>
  );
};
