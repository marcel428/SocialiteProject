import React, { Component, useRef } from "react";
import ReactPlayer from 'react-player'
import { Redirect, Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Row, Col, Card, Button } from "react-bootstrap";

import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import './Preview.css';

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
        console.log('this.props.location.mainVideo')
        console.log(this.props.location.mainVideo)
        var newHeight=this.props.location.mainVideo.height/(1-this.props.location.query.gamerVideo.height);

        var resizeMainVideo={
            x:this.props.location.mainVideo.x,
            y:this.props.location.mainVideo.y-(newHeight-this.props.location.mainVideo.height),
            height:newHeight,
            width:this.props.location.mainVideo.width
        }

        console.log('resizeMainVideo')
        console.log(resizeMainVideo)

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


    }


    render() {
        console.log('this.props')
        console.log(this.props)

        if (this.state.shouldRedirect) {
            return <Redirect
                to={{
                    pathname: 'save',
                    savedVideo: this.state.savedVideo,
                }}
            />
        }

        const prop = this.props.location;
        const winCenterX = window.innerWidth / 2;
        const faceWinCenterY = 100;

        if (prop.query.gamerVideo) {
            //get ration btw face clip video and main clip Video
            let ratio = prop.mainVideo.width / prop.faceVideo.width;

            //zoom the source video by the ratio
            var totalFaceVideoWidth = prop.videoWidth * ratio;
            var totalFaceVideoHeight = prop.videoHeight * ratio;
            var faceVideoHeight = (prop.mainVideo.height * prop.query.gamerVideo.height) / (1 - prop.query.gamerVideo.height);

            //get the clip path of face video
            var clipTop = prop.faceVideo.y * ratio;
            var clipLeft = prop.faceVideo.x * ratio;
            var clipRight = totalFaceVideoWidth - clipLeft - prop.mainVideo.width;
            var clipBottom = totalFaceVideoHeight - (prop.faceVideo.y * ratio) - faceVideoHeight;
            console.log('totalFaceVideoHeight')
            console.log(clipBottom)

            //get the magin left value to fix the face video to the center.
            var faceCenterX = clipLeft + prop.mainVideo.width / 2;
            var faceMarginLeft = winCenterX - faceCenterX;

            //get the margin bottom value to fix the face video to the top
            var faceMarginBottom = prop.faceVideo.y * ratio;

        }

        //get the clip path of main video
        var mainClipTop = prop.mainVideo.y;
        var mainClipRight = prop.videoWidth - prop.mainVideo.x - prop.mainVideo.width;
        var mainClipBottom = prop.videoHeight - prop.mainVideo.y - prop.mainVideo.height;
        var mainClipLeft = prop.mainVideo.x;

        //get the magin left value to fix the main video to the center.
        var mainCenterX = prop.mainVideo.x + prop.mainVideo.width / 2;
        var mainMarginLeft = winCenterX - mainCenterX;

        //to delete the small gap btw face video and main video
        //cos div has a small margin.
        var differ = 5;
        //get the margin bottom value to link the main video to the face video
        if (prop.query.gamerVideo) {
            console.log('sdfsdf')
            var mainMarginBottom = prop.mainVideo.y + (totalFaceVideoHeight - faceVideoHeight) + differ;
        }
        else
            var mainMarginBottom = prop.mainVideo.y;

            const totalVideoDivHeight=prop.mainVideo.height+(faceVideoHeight?faceVideoHeight:0);

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
                            <div style={{marginBottom:"30px"}}>
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
                            <div style={{maxHeight:totalVideoDivHeight,overflow:"hidden", width:"fit-content"}}>
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
                                        width={prop.videoWidth}
                                        height={prop.videoHeight}
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
                            <div style={{textAlign:"center",marginTop:'30px',marginBottom:30}}>
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