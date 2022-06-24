
import React from 'react';

//========Function way to create Component========//

const Card = (robots) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${robots.id}?200*200`} alt="Sorry no Card" />
            <div>
                <h2>{robots.name}</h2>
                <p>{robots.email}</p>

            </div>
        </div>
    );
};

export default Card;