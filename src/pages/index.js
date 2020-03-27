import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Onepage" />
    <div style={{ padding: "3rem" }}>
      <motion.h1 magic magicId="headline">
        Hi people
      </motion.h1>
    </div>
    <Link to="/link">
      <div style={{ height: 50, width: 50, backgroundColor: "#79C150" }}></div>
    </Link>
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
        magic
        magicId={"color-ball"}
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
