import { useState } from 'react';
import Cards from '../Cards/Cards';
import people from '../../data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const nextPerson = () => {
    setIndex((index) => checkNumber(index + 1));
  };

  const prevPerson = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  const randomNumber = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <Cards
      name={name}
      job={job}
      image={image}
      text={text}
      nextPerson={nextPerson}
      prevPerson={prevPerson}
      randomNumber={randomNumber}
    />
  );
};

export default Review;
