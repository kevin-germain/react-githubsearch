import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Form } from 'semantic-ui-react';
import './style.scss';

export default function SearchBar({ inputValue, onChangeInputValue, onFormSubmit }) {
  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = () => {
    onFormSubmit();
  };

  return (
    <div className="search-bar">
      <Segment>
        <Form onSubmit={handleOnSubmit}>
          <Form.Input
            fluid
            icon="search"
            iconPosition="left"
            placeholder="Tapez votre recherche"
            value={inputValue}
            onChange={handleOnChange}
          />
        </Form>
      </Segment>
    </div>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};
