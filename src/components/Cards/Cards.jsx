import 'twin.macro';
import {
  Card,
  CardAction,
  CardBody,
  CardCarousel,
  CardCarouselLeftArrow,
  CardCarouselRightArrow,
  CardContent,
  CardContentText,
  CardFooter,
  CardHeader,
  CardImage,
  CardImageShadow,
  CardName,
  CardNameDesignation,
  CardNameText,
} from './CardStyles';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import Button from '../Button/Button';

const Cards = ({ name, job, image, text, nextPerson, prevPerson, randomNumber }) => (
  <Card variant="big" className="card">
    <CardHeader className="card-header">
      <CardImage src={image} className="card-img-top" />
      <CardImageShadow />
    </CardHeader>
    <CardBody>
      <CardName>
        <CardNameText>{name}</CardNameText>
        <CardNameDesignation>{job}</CardNameDesignation>
      </CardName>

      <CardContent>
        <CardContentText>{text}</CardContentText>
      </CardContent>

      <CardCarousel>
        <CardCarouselLeftArrow tw="mr-4">
          <ChevronLeft
            tw="cursor-pointer text-3xl text-purple-600 transform duration-75 hover:text-purple-900"
            onClick={prevPerson}
          />
        </CardCarouselLeftArrow>
        <CardCarouselRightArrow>
          <ChevronRight
            tw="cursor-pointer text-3xl text-purple-600 transform duration-75 hover:text-purple-900"
            onClick={nextPerson}
          />
        </CardCarouselRightArrow>
      </CardCarousel>
    </CardBody>

    <CardFooter>
      <CardAction>
        <Button variant="primary" onClick={randomNumber}>
          Surprise Me!
        </Button>
      </CardAction>
    </CardFooter>
  </Card>
);

export default Cards;
