import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"
import SEO from "../components/SEO"

export default () => {
  return (
  <Layout>
    <SEO pageTitle="Majd Zaatri" description="This is the home page of Majd Zaatri's portfolio" />
    <Hero />
    <About />
    <Projects />
    <Contact />
  </Layout>)
}
// ...GatsbyImageSharpFluid
