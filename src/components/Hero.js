import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
{
  file(relativePath: {eq: "circle-cropped-profile.png"}) {
    childImageSharp {
      fluid(maxWidth: 700) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  const {
    file:{
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
      <div>
        <div className="underline"></div>
        <h1>I'm Majd Zaatri</h1>
        <h4>Software Engineer. Web Designer. Photographer.</h4>
        {/* <Link to="" className="btn">
          CONTACT ME
        </Link> */}
        <SocialLinks styleClass="hero-icons"/>
      </div>
      </article>
        <Image fluid={fluid} className="hero-img" />
    </div>
  </header>
}

export default Hero
