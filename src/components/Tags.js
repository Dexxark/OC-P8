import React from 'react';
import "../style/components/_tags.scss";

const Tags = ({ content }) => {
  return (
    <p className='tag'>{content}</p>
  );
};

export default Tags;