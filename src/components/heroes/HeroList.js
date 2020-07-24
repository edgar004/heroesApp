import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  //solo de va a disparar si el publisher cambia para que no este siempre renderizando todo

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero}></HeroCard>;
      })}
    </div>
  );
};

// si estamos en la pagina de DC solo retornar los heroes de Dc y lo mismo para la de marvel
