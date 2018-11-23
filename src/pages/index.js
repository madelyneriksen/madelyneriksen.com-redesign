import React from "react";
import Layout from "../common/layout.js";
import Grid from "../homepage/grid/grid.js";
import Hero from "../homepage/hero/hero.js";
import Bio from "../homepage/bio/bio.js";

export default () => (
  <Layout>
    <Hero />
    <Bio />
    <Grid />
  </Layout>
)
