import React from 'react';
import {
  Card, Label, Price, Currency, Description,
} from './PlanCard.style';
import Button from '../../shared/Button/Button';

const PlanCard = ({ item }) => {
  return (
    <Card>
      <div>
        <Label>
          {item.name}
        </Label>
        <Price>
          <Currency>$</Currency>
          {item.price}
        </Price>
        <Description>
          {item.description}
        </Description>
      </div>
      <Button>
        Subscribe Now
      </Button>
    </Card>
  );
};

export default PlanCard;
