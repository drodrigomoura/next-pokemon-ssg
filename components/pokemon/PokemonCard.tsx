import { Card, Grid, Row, Text } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img } = pokemon;

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable>
        <Link href={`/pokemon/${id}`}>
          <a>
            <Card.Body css={{ p: 1 }}>
              <Card.Image src={img} width="100%" height={140} />
            </Card.Body>

            <Card.Footer>
              <Row justify="space-between">
                <Text transform="capitalize">{name}</Text>
                <Text># {id}</Text>
              </Row>
            </Card.Footer>
          </a>
        </Link>
      </Card>
    </Grid>
  );
};
