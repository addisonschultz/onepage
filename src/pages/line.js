import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import random from "canvas-sketch-util/random"

const getLineProps = i => {
  const n = random.noise1D(i, 0.03, 2)
  const x = random.noise2D(i, i * 0.1, 0.05)

  return {
    position: [n * 0.5, i - 50, n * 10],
    rotation: [0, 0, 0.2 * n],
    width: Math.abs(n) * 2 + 0.1,
  }
}

const Segment = props => {
  const { width = 1 } = props
  return (
    <mesh {...props}>
      <cylinderBufferGeometry
        attach="geometry"
        args={[width, 0.25, 0.25, 0.25]}
      />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  )
}

const Lines = props => {
  const lines = [...new Array(100)]
  const lineGroup = useRef()

  useFrame(
    () => (lineGroup.current.rotation.x = lineGroup.current.rotation.y += 0.01)
  )

  random.setSeed(random.getRandomSeed())

  const lineData = lines.map((m, i) => getLineProps(i))

  return (
    <group ref={lineGroup}>
      {lineData.map(lineProps => (
        <Segment {...lineProps} />
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
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Lines />
    </Canvas>
  )
}

export default Line
