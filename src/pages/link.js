import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Joystick from "../components/addison/Joystick"

import * as tree from "../images/addison/tree.svg"

const LinkPage = () => {
  const numberOfTrees = Array(20).fill()

  function getRandomPosition() {
    var x = document.body.offsetHeight
    var y = document.body.offsetWidth
    console.log(y)
    console.log(x)

    var randomX = Math.floor(Math.random() * x - 100)
    var randomY = Math.floor(Math.random() * y - 100)
    return [randomX, randomY]
  }

  return (
    <>
      <SEO title="Link" />
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          margin: "auto auto",
          backgroundColor: "#79C150",
          overflow: "hidden",
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
                marginBottom: 0,
                top: xy[0],
                left: xy[1],
              }}
            />
          )
        })}
        <Joystick style={{ margin: "auto auto" }} />
      </motion.div>
    </>
  )
}

export default LinkPage
