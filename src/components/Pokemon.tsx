import React from 'react';
import styled from 'styled-components';

import { media, sizes } from '../util/theme';
import {
  Ditto,
  MasterBall,
  Phanpy,
  Staryu
} from '../util/icons';

interface WrapperProps {
  small: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.small ? 40 : 72}px;
  height: ${props => props.small ? 40 : 72}px;

  ${media(sizes.tablet)`
    width: 120px;
    height: 120px;
  `};
`;

export enum Pokemons {
  DITTO="DITTO",
  PHANPY="PHANPY",
  STARYU="STARYU",
  MASTER_BALL="MASTER_BALL"
}

interface PokemonProps {
  pokemon: Pokemons;
  small?: boolean;
  style?: any;
}

const Pokemon = ({ pokemon, small=false, style }: PokemonProps) => {
  
  const WhoIsThatPokemon = () => {
    switch (pokemon) {
      case Pokemons.DITTO:
        return <Ditto />
      case Pokemons.PHANPY:
        return <Phanpy />
      case Pokemons.STARYU:
        return <Staryu />
      case Pokemons.MASTER_BALL:
        return <MasterBall />
      default:
        return <Ditto />
    }
  }

  return (
    <Wrapper small={small} style={style}>
      <WhoIsThatPokemon />
    </Wrapper>
  );
}

export default Pokemon;