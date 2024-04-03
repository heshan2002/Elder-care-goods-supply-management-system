import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Make sure to include this CSS in your stylesheet. You can either 
                    create a separate CSS file and import it into your project or 
                    include it within a tag in your HTML file, depending on your 
                    project setup.</p>
                    <p>
                    Make sure to include this CSS in your stylesheet. You can either 
                    create a separate CSS file and import it into your project or 
                    include it within a tag in your HTML file, depending on your project setup.
                    </p>
            </div>
        </div>
    )
}

export default DescriptionBox