import React, { Component, useRef } from "react";
import ReactPlayer from 'react-player'
import { Redirect, Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Row, Col, Card, Button } from "react-bootstrap";

import socketIOClient from "socket.io-client";


import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import './Preview.css';

const ENDPOINT = "http://localhost:9999";
   


class Preview extends Component {
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
            width: 100,
            height: 100,
            x: (this.props.location.videoWidth - 100) / 2,
            y: (this.props.location.videoHeight - 100) / 2
        },
        shouldRedirect: false,
        savedVideo: '',
        loading: false,

        percent: 0.3,

        mainVideoWidth: '',
        mainVideoHeight: '',
        faceVideoWidth: '',
        faceVideoHeight: '',
        faceMarginLeftAndRight: '',
        faceMarginTop: '',
        faceMarginBottom: '',
        totalVideoWidth: '',
        totalVideoHeight: '',

    }
    handleCrop = (crop, percentCrop) => {
        this.setState({ crop })
    }
    sendSelectedVideo = () => {
        this.setState({
            loading: true
        })


        axios
            .post(
                `${process.env.REACT_APP_API_URL}/editor/thumbnail`, {
                videoFilePath: this.props.location.videoFilePath,
                template: this.props.location.query,
                faceVideo: this.props.location.faceVideo ? this.props.location.faceVideo : null,
                mainVideo: this.props.location.mainVideo
            })
            .then((res) => {
                console.log('res')
                console.log(res)
                this.setState({
                    loading: false,
                    shouldRedirect: true,
                    savedVideo: res.data
                })

            });
    }

    componentDidMount() {
        this.socket = socketIOClient();
    }
    componentWillUnmount(){
        console.log('unmounted')
        this.socket.disconnect();
      }


    render() {
        const prop = this.props.location;
        const winCenterX = window.innerWidth / 2;
        const faceWinCenterY = 100;
        const sourceRatio = prop.query.mainVideo.height / prop.query.mainVideo.width;
        const displayPercentInSave = 0.3;
        const displayPreviewWidth = window.innerWidth * displayPercentInSave;

        if (prop.query.gamerVideo) {
            //get ration btw face clip video and main clip Video
            let faceRatio = displayPreviewWidth / prop.faceVideo.width;
            let facePreviewWidth = displayPreviewWidth;
            var facePreviewHeight = displayPreviewWidth * sourceRatio * prop.query.gamerVideo.height;

            //zoom the source video by the faceRatio
            var totalFaceVideoWidth = prop.videoWidth * faceRatio;
            var totalFaceVideoHeight = prop.videoHeight * faceRatio;

            //get the clip path of face video
            var clipTop = prop.faceVideo.y * faceRatio;
            var clipLeft = prop.faceVideo.x * faceRatio;
            var clipRight = totalFaceVideoWidth - clipLeft - facePreviewWidth;
            var clipBottom = totalFaceVideoHeight - (prop.faceVideo.y * faceRatio) - facePreviewHeight;


            //get the magin left value to fix the face video to the center.
            var faceCenterX = clipLeft + facePreviewWidth / 2;
            var faceMarginLeft = winCenterX - faceCenterX;

            //get the margin bottom value to fix the face video to the top
            var faceMarginBottom = prop.faceVideo.y * faceRatio;

        }

        //get the clip path of main video
        let mainRatio = displayPreviewWidth / prop.mainVideo.width;

        //zoom the source video by the mainRatio
        var totalMainVideoWidth = prop.videoWidth * mainRatio;
        var totalMainVideoHeight = prop.videoHeight * mainRatio;

        var mainClipTop = prop.mainVideo.y * mainRatio;
        var mainClipRight = prop.videoWidth * mainRatio - prop.mainVideo.x * mainRatio - prop.mainVideo.width * mainRatio;
        var mainClipBottom = prop.videoHeight * mainRatio - prop.mainVideo.y * mainRatio - prop.mainVideo.height * mainRatio;
        var mainClipLeft = prop.mainVideo.x * mainRatio;


        //get the magin left value to fix the main video to the center.
        var mainCenterX = prop.mainVideo.x * mainRatio + prop.mainVideo.width * mainRatio / 2;
        var mainMarginLeft = winCenterX - mainCenterX;

        //to delete the small gap btw face video and main video
        //cos div has a small margin.
        var differ = 5;
        //get the margin bottom value to link the main video to the face video
        if (prop.query.gamerVideo) {
            var mainMarginBottom = prop.mainVideo.y * mainRatio + (totalFaceVideoHeight - facePreviewHeight) + differ;
        }
        else
            var mainMarginBottom = prop.mainVideo.y * mainRatio;

        const totalVideoDivHeight = displayPreviewWidth * sourceRatio;

        //redirecting save page after receiving server response.
        //pass recieved saved video file name and display percent. it is needed for syncronizing 
        //the size of video in preview page and save page.

        if (this.state.shouldRedirect) {
            return <Redirect
                to={{
                    pathname: 'save',
                    savedVideo: this.state.savedVideo,
                    displayPercentInSave
                }}
            />
        }
        return (
            <div>
                {
                    this.state.loading
                        ?
                        <div>
                            Wait a second
                        </div>
                        :
                        <div >
                            <div style={{ marginBottom: "30px" }}>
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
                                        <input type="checkbox" checked value={1} readOnly />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ maxHeight: totalVideoDivHeight, overflow: "hidden", width: "fit-content" }}>
                                {
                                    prop.query.gamerVideo
                                        ?
                                        <div>
                                            <video
                                                autoPlay
                                                width={totalFaceVideoWidth}
                                                height={totalFaceVideoHeight}
                                                src={this.props.location.videoFilePath}
                                                style={{
                                                    position: 'relative',
                                                    clipPath: `inset(${clipTop}px ${clipRight}px ${clipBottom}px ${clipLeft}px)`,
                                                    left: faceMarginLeft,
                                                    bottom: faceMarginBottom
                                                }}
                                            >
                                            </video>
                                        </div>
                                        :
                                        null
                                }

                                <div>
                                    <video
                                        autoPlay
                                        width={totalMainVideoWidth}
                                        height={totalMainVideoHeight}
                                        src={this.props.location.videoFilePath}
                                        style={{
                                            position: 'relative',
                                            clipPath: `inset(${mainClipTop}px ${mainClipRight}px ${mainClipBottom}px ${mainClipLeft}px)`,
                                            left: mainMarginLeft,
                                            bottom: mainMarginBottom
                                        }}
                                    >

                                    </video>
                                </div>



                            </div>
                            <div style={{ textAlign: "center", marginTop: '30px', marginBottom: 30 }}>
                                <div>
                                    <Link
                                        to={{
                                            pathname: "/template",
                                            state: {
                                                videoFilePath: prop.videoFilePath,
                                                videoWidth: prop.videoWidth,
                                                videoHeight: prop.videoHeight
                                            }
                                        }}
                                    >
                                        <button>
                                            Change template
                                        </button>
                                    </Link>
                                    <Link
                                        to={{
                                            pathname: prop.query.gamerVideo ? 'face-edit' : 'main-edit',
                                            query: prop.query,
                                            videoFilePath: prop.videoFilePath,
                                            videoWidth: prop.videoWidth,
                                            videoHeight: prop.videoHeight,
                                        }} >
                                        <button>
                                            Redo
                                        </button>
                                    </Link>
                                </div>
                                <div>
                                    <button onClick={this.sendSelectedVideo}>
                                        save
                                    </button>
                                </div>
                            </div>


                        </div>
                }
            </div>



        )
    }
}

export default Preview;

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