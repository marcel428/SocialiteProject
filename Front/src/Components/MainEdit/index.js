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
        this.videoPlayer = React.createRef();
        this.totalDiv = React.createRef()

    }
    state = {

        template: JSON.parse(localStorage.getItem('template')),
        videoFilePath: localStorage.getItem('videoFilePath'),
        videoWidth: localStorage.getItem('videoWidth'),
        videoHeight: localStorage.getItem('videoHeight'),
        faceVideo: localStorage.getItem('faceVideo') ? JSON.parse(localStorage.getItem('faceVideo')) : null,
        crop: {
            unit: 'px',
            width: 50,
            height: 50,
            aspect: 1,
            x: 0,
            y: 0
        },
        shouldRedirect: false,
        previewVideo: '',
        loading: false,
        templateRedirect: false,
        disToRealRatio: 1


    }
    handleCrop = (crop, percentCrop) => {
        this.setState({ crop })
    }

    goToPreview = () => {
        this.setState({
            shouldRedirect: true
        })
    }
    goToTemplate = () => {
        this.setState({
            templateRedirect: true
        })
    }

    componentDidMount() {
        var disToRealRatio = this.totalDiv.current.offsetWidth * (10 / 12) / localStorage.getItem('videoWidth');

        this.setState({
            disToRealRatio
        })

        var divide = 3;
        var prop = this.state;
        const videoRatio = prop.videoHeight / prop.videoWidth;

        if (prop.template.name == "split") {
            var mainVideoRatio = prop.template.mainVideo.height * (1 - prop.template.gamerVideo.height) / prop.template.mainVideo.width;
        } else {
            var mainVideoRatio = prop.template.mainVideo.height / prop.template.mainVideo.width;
        }

        var crop = {};
        if (mainVideoRatio < videoRatio) {
            crop = {
                unit: 'px',
                width: prop.videoWidth * disToRealRatio,
                height: prop.videoWidth * mainVideoRatio * disToRealRatio,
                aspect: 1 / mainVideoRatio,
                x: 0,
                y: ((prop.videoHeight - (prop.videoWidth * mainVideoRatio)) / 2) * disToRealRatio
            }
        } else {
            crop = {
                unit: 'px',
                width: prop.videoHeight / mainVideoRatio * disToRealRatio,
                height: prop.videoHeight * disToRealRatio,
                aspect: 1 / mainVideoRatio,
                x: ((prop.videoWidth - (prop.videoHeight / mainVideoRatio)) / 2) * disToRealRatio,
                y: 0
            }

        }
        this.setState({
            crop
        })
    }



    render() {
        if (this.state.templateRedirect) {
            localStorage.removeItem('template');
            if (localStorage.getItem('faceVideo')) {
                localStorage.removeItem('faceVideo');
            }
            return <Redirect
                to={{
                    pathname: `template`
                }} />
        }

        if (this.state.shouldRedirect) {
            const mainVideoCrop = {
                width: this.state.crop.width / this.state.disToRealRatio,
                height: this.state.crop.height / this.state.disToRealRatio,
                x: this.state.crop.x / this.state.disToRealRatio,
                y: this.state.crop.y / this.state.disToRealRatio,
            }

            localStorage.setItem('mainVideo', JSON.stringify(mainVideoCrop));
            localStorage.setItem('selectedMainVideo', JSON.stringify(this.state.crop));
            return <Redirect
                to={{
                    pathname: `preview`
                }} />
        }

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
                            <Row ref={this.totalDiv} style={{ width: "100%" }}>
                                <Col md={10} style={{ padding: '0px' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <ReactCrop
                                            style={{ width: '100%' }}
                                            crop={this.state.crop}
                                            keepSelection={true}
                                            onChange={(crop, percentCrop) => { this.handleCrop(crop, percentCrop) }}
                                            renderComponent={videoComponent(this.state.videoFilePath, this.videoPlayer)} />
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div style={{ marginTop: '30px', marginBottom: "30px", textAlign: 'center' }}>
                                        <button onClick={this.goToPreview}>
                                            Preview
                                        </button>

                                    </div>
                                    <div>
                                        <button onClick={this.goToTemplate}>
                                            Change Template
                                        </button>
                                    </div>
                                </Col>
                            </Row>

                        </div>
                }

            </div>




        )
    }
}

export default Edit;

const videoComponent = (props, videoPlayer) => (

    <video
        ref={videoPlayer}
        onLoadedData={() => videoPlayer.current.play()}
        muted
        loop
        style={{ display: 'block', width: '100%' }}
        onLoadStart={e => {
            // You must inform ReactCrop when your media has loaded.
            e.target.dispatchEvent(new Event('medialoaded', { bubbles: true }));
        }}
    >
        <source src={props} type="video/mp4" />
    </video>
);