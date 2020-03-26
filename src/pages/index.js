import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "framer-motion"

const IndexPage = () => (
  <Layout>
    <SEO title="Onepage" />
    <motion.div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        textAlign: "center",
      }}
    >
      <motion.div
        id={"color-ball"}
        style={{
          margin: "auto auto 50px",
          height: 100,
          width: 100,
          borderRadius: "50%",
          background: "#fff",
        }}
      />
      <motion.h1
        style={{
          margin: "50px auto auto",
          fontFamily: "Kite One",
          color: "#fff",
        }}
      >
        Welcome to Onepage, a collection of beautiful one page designs.
      </motion.h1>
    </motion.div>
  </Layout>
)

export default IndexPage
