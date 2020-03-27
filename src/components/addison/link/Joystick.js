import * as React from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

const Joystick = props => {
  const { style } = props

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(x, [-200, 200], [-200, 200])
  const rotateY = useTransform(y, [-200, 200], [200, -200])

  return (
    <motion.div
      style={{
        ...style,
        height: 150,
        width: 150,
        zIndex: 2,
        display: "flex",
        borderRadius: "100%",
        backgroundColor: "rgba(255,255,255,0.2",
        background:
          "radial-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3))",
      }}
    >
      <motion.div
        x={x}
        y={y}
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        rotateY={rotateX}
        rotateX={rotateY}
        style={{
          height: 75,
          width: 75,
          backgroundColor: "#fff",
          borderRadius: 15,
          margin: "auto auto",
        }}
        dragElastic={0.3}
      />
    </motion.div>
  )
}

export default Joystick
