import React, { useRef } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import random from "canvas-sketch-util/random"

const getLineProps = i => {
  const n = random.noise1D(i, 0.03, 2)

  return {
    position: [n * 0.5, i * 1.25 - 75, n * 10],
    rotation: [0, 0, 0.2 * n],
    args: [Math.abs(n) * 2 + 0.1, 0.25, 0.25, 0.25],
  }
}

const Segment = props => {
  const { index } = props
  const mesh = useRef()
  const { args, ...lineProps } = getLineProps(index)

  useFrame(state => {
    const offset = state.clock.elapsedTime * 10
    const { position, rotation } = getLineProps(index + offset)

    mesh.current.position.x = position[0]
    mesh.current.position.z = position[2]
    mesh.current.rotation.x = rotation[0]
    mesh.current.rotation.z = rotation[2] * 5
  })

  return (
    <mesh ref={mesh} {...lineProps}>
      <cylinderBufferGeometry attach="geometry" args={args} />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  )
}

const Lines = props => {
  const lines = [...new Array(150)]
  const lineGroup = useRef()
  random.setSeed(random.getRandomSeed())

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
    <Canvas
      pixelRatio={2}
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 75, position: [0, 0, 75] }}
    >
      <Lines />
    </Canvas>
  )
}

export default Line
