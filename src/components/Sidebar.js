import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Dapatkan info Post terbaru
        </CardTitle>
        <Form
          className="text-center"
          id="contact-form"
          action="https://gmail.us4.list-manage.com/subscribe/post?u=6daeb5496fbb18257c6701684&amp;id=0a9c377c3a"
          method="POST"
          target="_blank"
        >
          <FormGroup>
            <Input type="email" name="email" placeholder=" Alamat email..." />
          </FormGroup>
          <button
            className="btn btn-outline-success text-uppercase"
            type="submit"
          >
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Dapatkan penawaran terbaik
        </CardTitle>
        <a href="https://prasta.id/" target="_blank">
          <img
            src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/120045806_161897995580011_4615415580133499675_n.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=f1j_vB-GaKcAX8rFNYy&_nc_ht=scontent-sin6-1.xx&oh=ad146f1ab18545947cb0a233ca9914d6&oe=5F97FB12"
            alt="Advert"
            style={{ width: "100%" }}
          />
        </a>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Sidebar
