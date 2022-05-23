import type { NextPage, GetStaticProps } from "next";

import { Layout } from "../components/layouts";
import pokeApi from "../api/pokeApi";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import PokemonList from "../components/pokemon/PokemonList";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémons">
      <h1>Listado de Pokémons</h1>

      <PokemonList pokemons={pokemons}/>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons = data.results.map((pokemon) => {
    const id: string = pokemon.url.split("/")[6];

    return {
      ...pokemon,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
