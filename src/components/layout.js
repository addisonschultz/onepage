import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence, MagicMotion } from "framer-motion"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      {/* <AnimatePresence> */}
      <MagicMotion>
        <main>{children}</main>
      </MagicMotion>
      {/* </AnimatePresence> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
