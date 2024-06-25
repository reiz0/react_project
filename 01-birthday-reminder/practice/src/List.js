import React from "react";

const List = ({ ppl }) => {
    return (
        <>
            {ppl.map((person) => {
                return (
                    <li key={person.id} className="person">
                        <img src={person.image} alt="person" />
                        <div>
                            <h4>{person.name}</h4>
                            <p>{person.age} years</p>
                        </div>
                    </li>
                );
            })}
        </>
    );
};

export default List;
