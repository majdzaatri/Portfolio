import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link, graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
  allStrapiProjects {
    nodes {
      github
      id
      description
      title
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stack {
        id
        title
      }
    }
  }
}
`

const Projects = () => {
  const {
    allStrapiProjects: {
      nodes:projects
    },
  } = useStaticQuery(query);
  
  return <section className="section projects" id="projectsSection">
     <Title title="Some Things I've Built" />
     <div className="section-center projects-center">
      {projects.map((project, index)=>{
        return <Project key={project.id} index={index} {...project} />
      })}
     </div>
     {/* <Link to="" className="btn center-btn">Load More</Link> */}
  </section>
}

export default Projects
