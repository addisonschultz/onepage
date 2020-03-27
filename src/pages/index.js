import React from "react"

import SEO from "../components/seo"
import { motion } from "framer-motion"
import ToPage from "../components/ToPage"

const IndexPage = () => (
  <>
    <SEO title="Onepage" />
    <motion.div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <motion.div
        id={"color-ball"}
        magic
        magicId={"color-ball"}
        style={{
          margin: "auto auto 50px",
          height: 130,
          width: 130,
          borderRadius: "100%",
          background: "#fff",
        }}
      />
      <motion.h1
        style={{
          fontFamily: "Kite One",
          padding: "50px 0px 0px 0px",
          color: "#fff",
        }}
      >
        Welcome to Onepage, a collection of beautiful one page designs.
      </motion.h1>
      <motion.div
        style={{
          margin: "50px auto auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ToPage to={"/link"} backgroundColor={"#79C150"} />
        <ToPage to={"#"} backgroundColor={"#ffefa1"} />
        <ToPage to={"#"} backgroundColor={"#4d12ee"} />
        <ToPage to={"#"} backgroundColor={"#e67fa2"} />
      </motion.div>
    </motion.div>
  </>
)

export default IndexPage
