import React from 'react'
import { faCloud, faBoxOpen,faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


 function Navigation() {
    return (
        <div>
            <div className="mainheader">
                <div className="right">
                   <div className="text">
                       <h2>100r@v{'\u00A0'}<FontAwesomeIcon size="xs" color="#fff" icon={faPencilAlt} /> </h2>
                      <h3>Code-Editor</h3>
                      
                   </div>
                   
                    </div>

                </div>
                <div>
                    <br />
                    <div className="buttons">
                      <button className="Topbutton1"><FontAwesomeIcon color="#ADAFBC" icon={faCloud} /> {'\u00A0'}Save</button>
                         <button className="Topbutton1"><FontAwesomeIcon color="#ADAFBC" icon={faBoxOpen}/> {'\u00A0'}Open</button>

                    </div> 
              </div>
            </div>
    )
}
export default Navigation