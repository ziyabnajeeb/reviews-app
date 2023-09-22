import React from 'react';
import Cards from '../Cards/Cards';
import people from '../../data';

const Review = () => {
  const { name, job, image, text } = people[3];
  return <Cards name={name} job={job} image={image} text={text} />;
};

export default Review;
