import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout pageTitle="Oups, something went wrong...">
    <SEO title="404: Not found" />
    <Link
      className="btn btn-primary text-uppercase d-flex justify-content-center"
      to={"/"}
    >
      Kembali
    </Link>
  </Layout>
)

export default NotFoundPage
