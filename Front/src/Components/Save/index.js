import React, { Component, useRef } from "react";
import ReactPlayer from 'react-player'
import { Redirect, Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Row, Col, Card, Button } from "react-bootstrap";

import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import './Save.css';

class Save extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log('this.state')
        console.log(this.state)
        console.log('this.props')
        console.log(this.props)


        return (
            <div>
                <div style={{ display: 'flex', width: "100%" }}>

                    {
                        this.props.location.savedVideo
                            ?
                            <video
                                style={{ marginRight: "auto", marginLeft: "auto" }}
                                autoPlay
                                controls
                                width="30%"
                                height="30%"
                                src={`${process.env.REACT_APP_PUBLIC_URL}/editedVideos/${this.props.location.savedVideo}`}
                            >
                            </video>
                            :
                            null
                    }
                </div>
                <div style={{textAlign:'center', padding:"30px"}}>
                    <Link to="/">
                        <button>
                            go to home
                        </button>
                    </Link>
                </div>
            </div>




        )
    }
}

export default Save;
