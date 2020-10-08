import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"


const query = graphql`
{
  allStrapiAbout(filter: {}) {
    nodes {
      id
      info
      motto
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

const About = () => {

    const {
        allStrapiAbout: {
            nodes: about
        },
    } = useStaticQuery(query);

    return <section id="aboutSection" className="section about">
        <Title title="About Me"/>
        <article className="section-center">
            <article className="about-section">
                <Image fluid={about[0].image.childImageSharp.fluid} className="about-img" />
                <div className="about-info">
                    <h5>{about[0].info}</h5>
                </div>
                <div className="about-motto">
                    <Title title="Motto" />
                    <p className="about-desc">
                        {about[0].motto}
                    </p>
                </div>
            </article>
        </article>
    </section>
}

export default About;