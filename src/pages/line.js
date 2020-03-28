import React, { useRef } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "react-three-fiber"
import random from "canvas-sketch-util/random"

const getLineProps = i => {
  const n = random.noise1D(i, 0.02, 2)

  return {
    position: [n * 0.5, i * 1.25 - 75, n * 10],
    rotation: [0, 0, 0.2 * n],
    args: [Math.abs(n) * 2.5 + 0.1, 0.25, 0.25, 0.25],
  }
}

const Segment = props => {
  const { index } = props
  const mesh = useRef()
  const { args, ...lineProps } = getLineProps(index)

  useFrame(state => {
    const time = state.clock.elapsedTime
    const offset = time * 10
    const { position, rotation } = getLineProps(index + offset)

    mesh.current.position.x = position[0]
    mesh.current.position.z = position[2]
    mesh.current.rotation.x = rotation[0]
    mesh.current.rotation.z = rotation[2] * 5

    mesh.current.scale.x = mesh.current.scale.y = mesh.current.scale.z =
      time < 5.5 ? Math.max((time - 0.5) * 0.2, 0) : 1
  })

  return (
    <mesh ref={mesh} {...lineProps} scale={0}>
      <cylinderBufferGeometry attach="geometry" args={args} />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  )
}

const Lines = props => {
  const lines = [...new Array(150)]
  const lineGroup = useRef()
  random.setSeed(random.getRandomSeed())
  useFrame(state => console.log(state.clock.elapsedTime))
  useFrame(() => (lineGroup.current.rotation.y += 0.01))

  return (
    <group ref={lineGroup}>
      {lines.map((l, i) => (
        <Segment key={i} index={i} />
      ))}
    </group>
  )
}

const Line = () => {
  return (
    <motion.div
      style={{ height: "100%", width: "100%" }}
      magic
      magicId="color-ball"
    >
      <Canvas camera={{ fov: 75, position: [0, 0, 75] }}>
        <Lines />
      </Canvas>
    </motion.div>
  )
}

export default Line
