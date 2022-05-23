import { Card, Grid } from "@nextui-org/react";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1} css={{ height: "auto" }}>
      <Card hoverable clickable css={{ padding: 10, height: "auto" }}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`pokemon ${id}`}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};
