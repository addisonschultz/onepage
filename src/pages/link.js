import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const LinkPage = () => {
  return (
    <Layout>
      <SEO title="Link" />
      <div style={{ padding: "6rem" }}>
        <motion.h1 magic magicId="headline">
          Hi from the second page
        </motion.h1>
      </div>
      <Link to="/">
        <div style={{ height: 50, width: 50, backgroundColor: "#000" }}></div>
      </Link>
      <motion.div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#79C150",
          textAlign: "center",
        }}
      >
        <motion.div
          id={"color-ball"}
          magic
          magicId={"color-ball"}
          style={{
            margin: "auto auto 50px",
            height: 200,
            width: 200,
            borderRadius: "50%",
            background: "#05f",
          }}
        />
        <motion.h1
          style={{
            margin: "50px auto auto",
            fontFamily: "Kite One",
            color: "#fff",
          }}
        >
          {" "}
          Welcome to Onepage, a collection of beautiful one page designs.
        </motion.h1>
      </motion.div>
    </Layout>
  )
}

export default LinkPage
