import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

export default () => {
  return (<Layout>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>)
}
// ...GatsbyImageSharpFluid
