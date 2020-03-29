import React from "react"
import { motion } from "framer-motion"
import frog from "../images/frog.png"

const Rectangle = () => (
    <>
        <style>{`
            .addison {
                color: red;
            }

            .rectangle-container {
                height: 100vh;
                width: 100%;
                background: cyan;
            }

            .img {
                margin: 0px;
                // display: none;
                width: 62px;
                height: 62px;
                opacity: 1%;
            }

            .img:hover {
                position:relative;
                top:25px;
                left:35px;
                width:20%;
                height:20%;
                display:inline-block;
                z-index:999;
                opacity: 100%;
            }

            .parent {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-template-rows: repeat(5, 1fr);
                grid-column-gap: 5px;
                grid-row-gap: 5px;
                }
                
                .div1 { grid-area: 1 / 1 / 2 / 2; background-color: red; }
                .div2 { grid-area: 2 / 1 / 3 / 2; background-color: yellow; }
                .div3 { grid-area: 2 / 2 / 3 / 3; background-color: blue; }
                .div4 { grid-area: 2 / 3 / 3 / 4; background-color: green; }
                .div5 { grid-area: 3 / 2 / 4 / 3; background-color: pink; }
                .div6 { grid-area: 3 / 1 / 4 / 2; background-color: orange;}
                .div7 { grid-area: 4 / 1 / 5 / 2; background-color: purple;}
                .div8 { grid-area: 4 / 2 / 5 / 3; background-color: coral;}
                .div9 { grid-area: 4 / 3 / 5 / 4; background-color: springgreen;}
                .div10 { grid-area: 4 / 4 / 5 / 5; background-color: mediumslateblue;}
                .div11 { grid-area: 4 / 5 / 5 / 6; background-color: violet;}
                .div12 { grid-area: 5 / 3 / 6 / 4; background-color: honeydew;}
                .div13 { grid-area: 5 / 4 / 6 / 5; background-color: mediumvioletred;}
                .div14 { grid-area: 3 / 5 / 4 / 6; background-color: lightblue;}

                .div111 { grid-area: 1 / 1 / 2 / 2; background-color: lightsalmon;}
                .div112 { grid-area: 2 / 1 / 3 / 2; background-color: greenyellow; }
                .div113 { grid-area: 2 / 2 / 3 / 3; background-color: teal; }
                .div114 { grid-area: 2 / 3 / 3 / 4; background-color: red; }
                .div115 { grid-area: 3 / 2 / 4 / 3; background-color: cornflowerblue; }
                .div116 { grid-area: 3 / 1 / 4 / 2; background-color: navy;}
                .div117 { grid-area: 4 / 1 / 5 / 2; background-color: lavender;}
                .div118 { grid-area: 4 / 2 / 5 / 3; background-color: darkviolet;}
                .div119 { grid-area: 4 / 3 / 5 / 4; background-color: seagreen;}
                .div120 { grid-area: 4 / 4 / 5 / 5; background-color: lime;}
                .div121 { grid-area: 4 / 5 / 5 / 6; background-color: orange;}
                .div122 { grid-area: 5 / 3 / 6 / 4; background-color: lightyellow;}
                .div123 { grid-area: 5 / 4 / 6 / 5; background-color: crimson;}
                .div124 { grid-area: 3 / 5 / 4 / 6; background-color: powderblue;}
                

        
        `}</style>

        <motion.div 
            magic
            magicId={"color-ball"} 
            className="rectangle-container">


            <h1 className="addison">hey addison eat frogs</h1>

            <div className="parent">
<div className="div1"><h1 className="addison">hey</h1> </div>
<div className="div2"> </div>
<div className="div3"> </div>
<div className="div4"> </div>
<div className="div5"> </div>
<div className="div6"> </div>
<div className="div7"> </div>
<div className="div8"> </div>
<div className="div9"> </div>
<div className="div10"> </div>
<div className="div11"> </div>
<div className="div12"> </div>
<div className="div13"> </div>
<div className="div14"> </div>

</div>
<div><img className="img" alt="frog" src={frog}/></div>

<div className="parent">
<div className="div111"><h1 style={{color:"lightsalmon"}}>hey</h1> </div>
<div className="div112"> </div>
<div className="div113"> </div>
<div className="div114"> </div>
<div className="div115"> </div>
<div className="div116"> </div>

<div className="div118"> </div>
<div className="div119"> </div>

<div className="div120"> </div>
<div className="div121"> </div>
<div className="div122"> </div>
<div className="div123"> </div>
<div className="div124"> </div>
<div className="div117"> </div>

</div>


       

        </motion.div>
    </>
)

export default Rectangle