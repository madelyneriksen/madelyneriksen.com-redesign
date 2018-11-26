import React from "react";
import Layout from "../common/layout.js";
import Hero from "../homepage/hero/hero.js";
import RecentPosts from "../homepage/recent-posts/recent-posts.js";
import Bio from "../homepage/bio/bio.js";

export default () => (
  <Layout>
    <Hero />
    <RecentPosts />
    <Bio />
  </Layout>
)
