import React, { useRef, useState } from "react"
import { Canvas, useFrame } from "react-three-fiber"

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  )
}

const Segment = props => {
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[6, 1, 32]} />
      <meshBasicMaterial attach="material" color="orange" />
    </mesh>
  )
}

const line = () => {
  const lines = [...new Array(10)]

  const lineData = lines.map((m, i) => ({
    position: [0, i * 2, 0],
    rotation: [0, 0, 0.01 * i],
  }))

  return (
    <Canvas
      pixelRatio={2}
      style={{ width: "100%", height: "100%" }}
      camera={{ fov: 75, position: [0, 0, 100] }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {lineData.map(lineProps => (
        <Segment {...lineProps} />
      ))}
      <Segment position={[0, 0, 0]} />
      <Segment position={[0, 2, 0]} rotation={[0, 0, 0.01]} />
    </Canvas>
  )
}

export default line
