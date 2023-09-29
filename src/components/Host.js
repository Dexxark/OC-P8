import React from 'react';

const Host = ({ hostData }) => {
  return (
    <div className='host'>
        <p>{hostData.name}</p>
        <img src={hostData.picture} alt={hostData.name} />
    </div>
  );
};

export default Host;