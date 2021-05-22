import React from 'react';
import PropTypes from 'prop-types';
import { Button, Segment } from 'semantic-ui-react';

export default function LoadMore({ onClickButton }) {
  return (
    <Segment>
      <Button
        onClick={onClickButton}
        fluid
      >
        Load more results
      </Button>
    </Segment>
  );
}

LoadMore.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
