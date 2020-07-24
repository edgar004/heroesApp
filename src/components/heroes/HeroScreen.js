import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroesById(heroeId), [heroeId]); //solo de va a disparar si el heroeId cambia para que no este siempre renderizando todo

  if (!hero) {
    return <Redirect to="/" />;
  }

  const {
    superhero,
    alter_ego,
    first_appearance,
    characters,
    publisher,
  } = hero;

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p>Alter ego: </p> {alter_ego}
          </li>
          <li className="list-group-item">
            <p>Publisher: </p> {publisher}
          </li>
          <li className="list-group-item">
            <p>First appearance: </p> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
