import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"

const LinkPage = () => {
  return (
    <Layout>
      <SEO title="Link" />
      <motion.div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#79C150",
          textAlign: "center",
        }}
      ></motion.div>
    </Layout>
  )
}

export default LinkPage
