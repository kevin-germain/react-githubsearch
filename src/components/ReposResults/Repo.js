import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

import './style.scss';

export default function Repo({
  imageUrl,
  title,
  owner,
  description,
  repoUrl,
}) {
  return (
    <Card href={repoUrl} target="_blank">
      <Image src={imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header className="card-title">{title}</Card.Header>
        <Card.Meta>
          <span>{owner}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Repo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  description: PropTypes.string,
  repoUrl: PropTypes.string.isRequired,
};

Repo.defaultProps = {
  description: 'No description available',
};
