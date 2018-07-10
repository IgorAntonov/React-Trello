import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import { Card } from '../Card';

export const DraggableCard = ({ card, index, listId }) => (
  <Draggable
    draggableId={card}
    key={card}
    index={index}
    type="LIST"
    disableInteractiveElementBlocking
  >
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Card
          cardId={card}
          listId={listId}
          isDragging={snapshot.isDragging}
        />
      </div>
    )}
  </Draggable>
);

DraggableCard.propTypes = {
  card: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  listId: PropTypes.string.isRequired
};

