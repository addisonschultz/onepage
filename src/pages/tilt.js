import React from "react"

import SEO from "../components/seo"
import { motion } from "framer-motion"

import TiltComponent from "../components/addison/tilt/TiltComponent"

const TiltPage = () => {
  return (
    <>
      <SEO title="Tilt" />
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          margin: "auto auto",
          backgroundColor: "#E8E0FF",
          overflow: "hidden",
        }}
        id={"color-ball"}
        magic
        magicId={"color-ball"}
      >
        <motion.div style={{ margin: "auto auto" }}>
          <TiltComponent />
        </motion.div>
      </motion.div>
    </>
  )
}

export default TiltPage
