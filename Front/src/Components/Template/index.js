import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { Redirect, Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Row, Col, Card, Button } from "react-bootstrap";

import "./Template.css";
var ss = [];
class Template extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        templates: [],
        linkKey: []
    }
    componentDidMount() {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/template`
            )
            .then((res) => {
                console.log('res')
                console.log(res)
                this.setState({
                    templates: res.data
                })
            });
    }
    getVideoSize = (event, index) => {
        ss[index] = true;
        this.setState({
            linkKey: ss
        })
    }

    render() {
        console.log('this.props')
        console.log(this.props)
        console.log('this.state')
        console.log(this.state)


        return (
            <div style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "50px", paddingBottom: "50px" }}>

                <Row>
                    {
                        this.state.templates && this.state.templates
                            ?
                            this.state.templates.map((item, idx) => (
                                <Col xs="4" style={{ textAlign: 'center', backgroundColor: 'white' }} key={item._id}>
                                    <div style={{ padding: "10px" }}>
                                        <div>
                                            <span style={{ marginRight: '10px' }}>{item.name}</span>
                                            <span style={{ backgroundColor: "blue" }}>{item.level}</span>
                                        </div>
                                    </div>

                                    <video
                                        style={{ marginRight: "2%", marginLeft: "2%", display: "inline-block" }}
                                        autoPlay
                                        controls
                                        width="90%"
                                        height="90%"
                                        src={`${process.env.REACT_APP_PUBLIC_URL}/template/${item.exampleVideo}`}
                                        onLoadedMetadata={e => {
                                            this.getVideoSize(e, idx)
                                        }}
                                    >
                                    </video>
                                    <div>
                                        {item.description}
                                    </div>
                                    {
                                        this.state.linkKey[idx]
                                            ?
                                            <div style={{ textAlign: 'center' }}>
                                                <Link
                                                    to={{
                                                        pathname: item.gamerVideo ? 'face-edit' : 'main-edit',
                                                        query: item,
                                                        videoFilePath: this.props.location.state.videoFilePath,
                                                        videoWidth: this.props.location.state.videoWidth,
                                                        videoHeight: this.props.location.state.videoHeight,
                                                    }} >

                                                    <button>
                                                        Select Template
                                                    </button>
                                                </Link>

                                            </div>
                                            :
                                            null
                                    }

                                </Col>
                            ))
                            :
                            null
                    }
                </Row>

            </div>


        )
    }
}

export default Template;