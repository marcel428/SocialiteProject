import React, { Component, useRef } from "react";
import ReactPlayer from 'react-player'
import { Redirect, Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Row, Col, Card, Button } from "react-bootstrap";

import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import './MainEdit.css';

class Edit extends Component {
    constructor(props) {
        super(props);

    }
    state = {

        template: this.props.location.query,
        videoFilePath: this.props.location.videoFilePath,
        videoWidth: this.props.location.videoWidth,
        videoHeight: this.props.location.videoHeight,
        crop: {
            unit: 'px',
            width: this.props.location.query.mainVideo.width / 2,
            height: this.props.location.query.mainVideo.height * (1 - (this.props.location.faceVideo ? this.props.location.query.gamerVideo.height : 0)) / 2,
            aspect: this.props.location.query.mainVideo.width / (this.props.location.query.mainVideo.height * (1 - (this.props.location.faceVideo ? this.props.location.query.gamerVideo.height : 0))),
            x: (this.props.location.videoWidth - this.props.location.query.mainVideo.width / 2) / 2,
            y: (this.props.location.query.mainVideo.height * (1 - (this.props.location.faceVideo ? this.props.location.query.gamerVideo.height : 0)) / 2) / 2
        },
        shouldRedirect: false,
        previewVideo: '',
        loading: false,

    }
    handleCrop = (crop, percentCrop) => {
        this.setState({ crop })
    }

    componentDidMount() {
        var divide = 3;
        var prop = this.props.location;
        const videoRatio = prop.videoHeight / prop.videoWidth;

        const mainVideoRatio = prop.query.mainVideo.height * (1 - prop.query.gamerVideo.height) / prop.query.mainVideo.width;

        var crop = {};
        if (mainVideoRatio < videoRatio) {
            console.log('sdf')
            crop = {
                unit: 'px',
                width: prop.videoWidth / divide,
                height: prop.videoWidth * mainVideoRatio / divide,
                aspect: 1 / mainVideoRatio,
                x: (prop.videoWidth - (prop.videoWidth / divide)) / 2,
                y: (prop.videoHeight - (prop.videoWidth * mainVideoRatio / divide)) / 2
            }
        } else {
            console.log('wer')
            crop = {
                unit: 'px',
                width: prop.videoHeight / mainVideoRatio / divide,
                height: prop.videoHeight / divide,
                aspect: 1 / mainVideoRatio,
                x: (prop.videoWidth - (prop.videoHeight / mainVideoRatio / divide)) / 2,
                y: (prop.videoHeight - (prop.videoHeight / divide)) / 2
            }

        }
        this.setState({
            crop
        })
    }



    render() {


        return (
            <div>
                {
                    this.state.loading
                        ?
                        <div style={{ marginTop: '100px', textAlign: 'center' }} >
                            <h5>
                                Wait a second...
                            </h5>
                        </div>
                        :
                        <div>
                            <div>
                                <Row>
                                    <Col>
                                        {
                                            this.state.template && this.state.template.gamerVideo
                                                ?
                                                <div>
                                                    <span>Select Facecam&nbsp;&nbsp;</span>
                                                    <input type="checkbox" checked value={1} readOnly />
                                                </div>
                                                :
                                                null
                                        }

                                    </Col>
                                    <Col>
                                        {
                                            this.state.template && this.state.template.mainVideo
                                                ?
                                                <div>
                                                    <span>Select gamefeed&nbsp;&nbsp;</span>
                                                    <input type="checkbox" checked value={1} readOnly />
                                                </div>
                                                :
                                                null
                                        }
                                    </Col>
                                    <Col>
                                        <span>Preview&nbsp;&nbsp;</span>
                                        <input type="checkbox" defaultChecked={false} />
                                    </Col>
                                </Row>
                            </div>

                            <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                                <ReactCrop
                                    crop={this.state.crop}
                                    keepSelection={true}
                                    onChange={(crop, percentCrop) => { this.handleCrop(crop, percentCrop) }}
                                    renderComponent={videoComponent(this.props.location.videoFilePath)} />
                            </div>
                            <div style={{ marginTop: '30px', marginBottom: "30px", textAlign: 'center' }}>
                                <Link to={{
                                    pathname: 'preview',
                                    videoFilePath: this.props.location.videoFilePath,
                                    query: this.props.location.query,
                                    faceVideo: this.props.location.faceVideo ? this.props.location.faceVideo : null,
                                    mainVideo: this.state.crop,
                                    videoWidth: this.props.location.videoWidth,
                                    videoHeight: this.props.location.videoHeight,
                                }}
                                >
                                    <button>
                                        Preview
                                    </button>
                                </Link>

                            </div>
                        </div>
                }

            </div>




        )
    }
}

export default Edit;

const videoComponent = (props) => (

    <video
        autoPlay
        loop
        style={{ display: 'block', maxWidth: '100%' }}
        onLoadStart={e => {
            // You must inform ReactCrop when your media has loaded.
            e.target.dispatchEvent(new Event('medialoaded', { bubbles: true }));
        }}
    >
        <source src={props} type="video/mp4" />
    </video>
);