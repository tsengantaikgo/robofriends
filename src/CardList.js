import React from 'react';
import Card from './Card.js';


const CardList = ({ robots }) => {

    return (
        <div>
            {
                robots.map((user, userIndex) => {
                    return (
                        <Card
                            key={userIndex}
                            id={robots[userIndex].id}
                            name={robots[userIndex].name}
                            email={robots[userIndex].email}
                        />
                    );
                }
                )
            }
        </div>
    );
}

export default CardList;