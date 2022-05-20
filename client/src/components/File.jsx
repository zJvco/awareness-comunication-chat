import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/File.css';

const imageStyle = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "300px",
    maxHeight: "200px",
    borderRadius: "6px",
    objectFit: "cover",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)"
}

function File(props) {
    if (props.type.includes("image")) {
        return (
            <img src={props.data} alt={props.filename} style={imageStyle} />
        );
    }

    return (
        <div className="file-container">
            <span className="filename">{props.filename}</span>
            <FontAwesomeIcon icon="fas fa-file-download" />
        </div>
    );
}

export default File;