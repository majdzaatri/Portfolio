import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({pageTitle, description}) => {
  return <Helmet htmlAttributes={{lang:"en"}} title={`${pageTitle} | Portfolio`}>
    <meta name="description" content={description} />
  </Helmet>
}

export default SEO
