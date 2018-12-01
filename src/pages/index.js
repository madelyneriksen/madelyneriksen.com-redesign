import React from "react";
import Layout from "../common/layout.js";
import Grid from "../homepage/grid/grid.js";
import RecentPosts from "../homepage/recent-posts/recent-posts.js";
import Bio from "../homepage/bio/bio.js";

export default () => (
  <Layout>
    <Grid />
    <RecentPosts />
    <Bio />
  </Layout>
)
