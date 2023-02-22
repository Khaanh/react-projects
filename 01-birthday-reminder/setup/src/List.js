import React from "react";

const List = ({ people }) => {
  return (
    <li>
      {people.map((person) => {
        const { id, name, image, age } = person;

        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>years: {age}</p>
            </div>
          </article>
        );
      })}
    </li>
  );
};

export default List;
