import React from "react"

import SEO from "../components/seo"
import { motion } from "framer-motion"

const ZDogPage = () => {
  return (
    <>
      <SEO title="ZDog" />
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          margin: "auto auto",
          backgroundColor: "#FFF6D6",
          overflow: "hidden",
        }}
        id={"color-ball"}
        magic
        magicId={"color-ball"}
      ></motion.div>
    </>
  )
}

export default ZDogPage
