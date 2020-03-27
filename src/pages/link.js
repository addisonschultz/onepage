import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import * as tree from "../images/addison/tree.svg"

const LinkPage = () => {
  const numberOfTrees = Array(20).fill()

  function getRandomPosition() {
    var x = document.body.offsetHeight
    var y = document.body.offsetWidth
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
  }

  return (
    <>
      <SEO title="Link" />
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          margin: "auto auto",
          backgroundColor: "#79C150",
        }}
        id={"color-ball"}
        magic
        magicId={"color-ball"}
      >
        {numberOfTrees.map(x => {
          let xy = getRandomPosition()

          return (
            <img
              src={tree}
              style={{
                position: "absolute",
                top: xy[0],
                left: xy[1],
              }}
            />
          )
        })}
      </motion.div>
    </>
  )
}

export default LinkPage
