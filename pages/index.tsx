import { Button } from "@nextui-org/react";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layout title="Listado de Pokémons">
      <h1>Hola mundo</h1>
      <Button color="gradient">Hola</Button>
    </Layout>
  );
};

export default HomePage;
