import React from "react"
import { Link } from "gatsby"

const ToPage = props => {
  const { to, backgroundColor } = props

  return (
    <Link to={to}>
      <div
        style={{
          height: 50,
          width: 50,
          margin: 50,
          borderRadius: "50%",
          backgroundColor: backgroundColor,
        }}
      ></div>
    </Link>
  )
}

ToPage.defaltProps = {
  to: "#",
  backgroundColor: "#fff",
}

export default ToPage
