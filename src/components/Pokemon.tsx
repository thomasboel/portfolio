import React from 'react';
import styled from 'styled-components';

import {
  Ditto,
  Phanpy,
  Staryu
} from '../util/icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;
`;

export enum Pokemons {
  DITTO="DITTO",
  PHANPY="PHANPY",
  STARYU="STARYU",
  MASTER_BALL="MASTER_BALL"
}

interface PokemonProps {
  pokemon: Pokemons;
  style?: any;
}

const Pokemon = ({ pokemon, style }: PokemonProps) => {
  
  const WhoIsThatPokemon = () => {
    switch (pokemon) {
      case Pokemons.DITTO:
        return <Ditto />
      case Pokemons.PHANPY:
        return <Phanpy />
      case Pokemons.STARYU:
        return <Staryu />
      default:
        return <Ditto />
    }
  }

  return (
    <Wrapper style={style}>
      <WhoIsThatPokemon />
    </Wrapper>
  );
}

export default Pokemon;