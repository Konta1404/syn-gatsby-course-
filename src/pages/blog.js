import React from 'react';
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({data}) => (
  <Layout>
    <div>
      <h1>Latest Posts</h1>
      <hr/>
      {data.allMarkdownRemark.edges.map(post =>(
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>{post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
          <br/>
          <br/>
          <br/>
          <Link to={post.node.frontmatter.path}>Read more</Link>
          <br/>
          <br/>
          <hr/>
        </div>
      ))}
    </div>
  </Layout>
)

export const pageQuery =  graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            author
            date
          }
          excerpt
        }
      }
    }
  }`

export default BlogPage;
