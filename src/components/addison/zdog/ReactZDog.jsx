import * as React from "react"
import { useScript } from "./useScript"
import { Mario } from "./Mario"

export function ReactZdog({
  height = 200,
  width = 200,
  size,
  id,
  fps = 60,
  animation = (canvas, width, height) => ({
    start: () => null,
    render: () => null,
  }),
}) {
  const [loaded, error] = useScript(
    "https://unpkg.com/zdog@1/dist/zdog.dist.min.js"
  )
  // Hold our update loop
  const updateLoop = React.useRef()

  // Hold our function to cancel the update loop
  const cancelUpdateLoop = React.useRef()

  // Canvas ref
  const canvas = React.useRef()

  // Defend against Framer's percentage widths
  const cWidth = canvas.current && canvas.current.width
  const cHeight = canvas.current && canvas.current.height

  React.useEffect(() => {
    if (!loaded) return

    // Normally we'd expect a function (thru overrides) but
    // we'll need some examples thru property controls.
    const examples = {
      mario: Mario,
    }

    if (typeof animation === "string") {
      animation = examples[animation]
    }

    // Bail if we don't have an animation
    if (!animation) return

    // Otherwise, run the animation function and see what we get
    updateLoop.current = animation(canvas.current, cWidth, cHeight)

    // Run the animation's start method, if there is one
    updateLoop.current.start && updateLoop.current.start()

    // Stop any previous update loop
    cancelUpdateLoop.current && cancelUpdateLoop.current()

    // Start a new update loop (and save the stop function)
    cancelUpdateLoop.current = animate()
  }, [animation, loaded, error, cWidth, cHeight])

  const animate = () => {
    let canceled = false
    let elapsed = 0

    // If our animation doesn't have an update, bail
    if (!updateLoop.current.update) return

    const loop = (t = 0) => {
      // Bail if canceled is true or if we
      // don't have a current animation loop
      if (canceled || !updateLoop.current) return

      // Get the number of milliseconds since the last frame
      let ms = t - elapsed

      // If we're too early, request another frame and bail
      if (ms < 1 / fps) {
        requestAnimationFrame(loop)
        return
      }

      // Reset elapsed
      elapsed = t

      // Run the animation's update method
      updateLoop.current.update()

      // Then request another Frame
      requestAnimationFrame(loop)
    }

    // Start the loop
    loop()

    // And return a function that will stop our loop
    return () => (canceled = true)
  }

  React.useEffect(() => {})

  return (
    <div
      style={{
        height: "200px",
        width: "200px",
      }}
    >
      {loaded && !error ? (
        <canvas
          ref={canvas}
          id={`${id}_zdog_canvas`}
          width={width}
          height={height}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <b>Couldn't load zDog!</b>
      )}
    </div>
  )
}
