import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About me">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos,
      vitae cum. Earum voluptates repellat pariatur veritatis omnis veniam
      voluptatum quibusdam rerum molestiae magnam ab animi iusto, ipsum commodi.
      Veniam reiciendis ab quos sed recusandae alias aut porro, reprehenderit
      voluptatem necessitatibus.
    </p>
  </Layout>
)

export default AboutPage
