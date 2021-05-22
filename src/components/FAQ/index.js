import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

export default function FAQ() {
  return (
    <Segment>
      <Header as="h1">FAQ</Header>
      <Header as="h2">Ca sert à quoi ?</Header>
      <p>L'application permet de trouver des dépôts GitHub en fonction de critère de recherche.</p>
      <Header as="h2">Comment effectuer une recherche ?</Header>
      <p>Complétez simplement le champ de recherche et appuyez sur la touche entrée.</p>
      <Header as="h2">Cela fonctionne avec n'importe quel mot clé ?</Header>
      <p>Et oui, fabubleux !</p>
    </Segment>
  );
}
