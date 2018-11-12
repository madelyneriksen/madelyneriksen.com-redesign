import React from "react";
import Layout from "../common/layout.js";
import Grid from "../homepage/grid/grid.js";
import Hero from "../homepage/hero/hero.js";
import About from "../homepage/about/about.js";

export default () => (
  <Layout>
    <Hero />
    <About />
    <Grid />
  </Layout>
)
