import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "react-three-fiber"
import random from "canvas-sketch-util/random"

const getPlaneProps = i => {
  const n = random.noise1D(i, 0.02, 2)

  return {
    position: [n * 0.5, i * 1.25 - 75, n * 10],
    rotation: [0, 0, 0.2 * n],
    args: [5, 0.25, 0.25],
  }
}

const Plane = props => {
  const { index } = props
  const mesh = useRef()
  const { args, ...lineProps } = getPlaneProps(index)

  useFrame(state => {
    const time = state.clock.elapsedTime
    const offset = time * 10

    // mesh.current.position.x = position[0]
  })

  return (
    <mesh ref={mesh} {...lineProps} scale={1}>
      <planeBufferGeometry attach="geometry" args={[1, 2, 32]} />
      <meshBasicMaterial attach="material" color="purple" />
    </mesh>
  )
}

const InnerPlanes = props => {
  const lines = [...new Array(150)]
  const lineGroup = useRef()
  random.setSeed(random.getRandomSeed())
  // useFrame(() => (lineGroup.current.rotation.y += 0.01))

  return (
    <group ref={lineGroup}>
      {lines.map((l, i) => (
        <Plane key={i} index={i} />
      ))}
    </group>
  )
}

const Planes = () => {
  return (
    <motion.div
      style={{ height: "100%", width: "100%" }}
      magic
      magicId="color-ball"
    >
      <Canvas
        resize={{ debounce: 500 }}
        camera={{ fov: 75, position: [0, 0, 50] }}
      >
        <InnerPlanes />
      </Canvas>
    </motion.div>
  )
}

export default Planes
