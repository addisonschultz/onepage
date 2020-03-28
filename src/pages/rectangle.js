import React from "react"
import { motion } from "framer-motion"

const Rectangle = () => (
    <>
        <style>{`
            h1 {
                color: red;
            }

            .rectangle-container {
                height: 100vh;
                width: 100%;
                background: cyan;
            }
        
        `}</style>

        <motion.div 
            magic
            magicId={"color-ball"} 
            className="rectangle-container">

            <h1>hey addison eat shit</h1>
            
        </motion.div>
    </>
)

export default Rectangle