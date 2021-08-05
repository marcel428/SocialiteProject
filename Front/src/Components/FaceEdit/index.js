import React, { Component, useRef } from "react";
import ReactPlayer from 'react-player'
import { Redirect, Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Row, Col, Card, Button } from "react-bootstrap";

import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import './FaceEdit.css';

const displayVideoCol = 10;
const colPercent = 0.98;

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

        crop: {
            unit: 'px',
            width: 100,
            height: 100,
            aspect: 1,
            x: 0,
            y: 0
        },
        shouldRedirect: false,
        faceVideoRatio: null,
        templateRedirect: false,
        disToRealRatio: 1,
        gamerVideo: JSON.parse(localStorage.getItem('template')).gamerVideo[0],
        _16_9faceKey: false,
        _4_3faceKey: true,
        freeTransformKey: false,
    }
    handleCrop = (crop, percentCrop) => {
        //when the selected faceVideo ratio is the same as with mainVideo ratio * 0.7(limited value),
        //stop increasing the ratio
        var diffBtwTemplateAndCrop = 0.7;
        var mainRatio = this.state.template.mainVideo.height / this.state.template.mainVideo.width;
        var selectedRatio = crop.height / crop.width;
        if (selectedRatio > mainRatio * diffBtwTemplateAndCrop) {
            return;
        }

        // *****************************

        this.setState({
            crop
        })
    }
    goToMain = () => {
        this.setState({
            shouldRedirect: true
        })
    }
    goToTemplate = () => {
        this.setState({
            templateRedirect: true
        })
    }
    _4_3Facecam = () => {
        const gamerVideo = JSON.parse(localStorage.getItem('template')).gamerVideo[1];
        this.setState({
            _16_9faceKey: true,
            _4_3faceKey: false,
            freeTransformKey: false,
            gamerVideo
        })
    }
    _16_9Facecam = () => {
        const gamerVideo = JSON.parse(localStorage.getItem('template')).gamerVideo[0];
        this.setState({
            _16_9faceKey: false,
            _4_3faceKey: true,
            freeTransformKey: false,
            gamerVideo
        })
    }
    freeTransform = () => {
        this.freeInitialCrop();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('this.state');
        console.log(this.state);
        if (this.state.gamerVideo.name != prevState.gamerVideo.name) {
            this.initialCrop();
        }
    }
    componentDidMount() {
        if(this.state.template.name=='split')
        this.initialCrop();
        else if(this.state.template.name="square")
        this.freeInitialCrop()
    }
    initialCrop = () => {
        //get the width of total div
        var disToRealRatio = this.totalDiv.current.offsetWidth * (10 / 12) / localStorage.getItem('videoWidth');

        this.setState({
            disToRealRatio
        })
        var divide = 3;
        var prop = this.state;
        const videoRatio = prop.videoHeight / prop.videoWidth;

        const faceVideoRatio = prop.template.mainVideo.height * prop.gamerVideo.height / (prop.template.mainVideo.width * prop.gamerVideo.width);

        var crop = {};
        if (faceVideoRatio < videoRatio) {
            crop = {
                unit: 'px',
                width: (prop.videoWidth / divide) * disToRealRatio,
                height: (prop.videoWidth * faceVideoRatio / divide) * disToRealRatio,
                aspect: 1 / faceVideoRatio,
                x: ((prop.videoWidth - (prop.videoWidth / divide)) / 2) * disToRealRatio,
                y: ((prop.videoHeight - (prop.videoWidth * faceVideoRatio / divide)) / 2) * disToRealRatio
            }
        } else {
            crop = {
                unit: 'px',
                width: (prop.videoHeight / faceVideoRatio / divide) * disToRealRatio,
                height: (prop.videoHeight / divide) * disToRealRatio,
                aspect: 1 / faceVideoRatio,
                x: ((prop.videoWidth - (prop.videoHeight / faceVideoRatio / divide)) / 2) * disToRealRatio,
                y: ((prop.videoHeight - (prop.videoHeight / divide)) / 2) * disToRealRatio
            }

        }
        this.setState({
            crop
        })
    }
    freeInitialCrop = () => {
        //get the width of total div
        var disToRealRatio = this.totalDiv.current.offsetWidth * (10 / 12) / localStorage.getItem('videoWidth');
        this.setState({
        })
        var divide = 3;
        var prop = this.state;
        const videoRatio = prop.videoHeight / prop.videoWidth;

        const faceVideoRatio = prop.template.mainVideo.height * prop.gamerVideo.height / (prop.template.mainVideo.width * prop.gamerVideo.width);

        var crop = {};
        if (faceVideoRatio < videoRatio) {
            crop = {
                unit: 'px',
                width: (prop.videoWidth / divide) * disToRealRatio,
                height: (prop.videoWidth * faceVideoRatio / divide) * disToRealRatio,
                x: ((prop.videoWidth - (prop.videoWidth / divide)) / 2) * disToRealRatio,
                y: ((prop.videoHeight - (prop.videoWidth * faceVideoRatio / divide)) / 2) * disToRealRatio
            }
        } else {
            crop = {
                unit: 'px',
                width: (prop.videoHeight / faceVideoRatio / divide) * disToRealRatio,
                height: (prop.videoHeight / divide) * disToRealRatio,
                x: ((prop.videoWidth - (prop.videoHeight / faceVideoRatio / divide)) / 2) * disToRealRatio,
                y: ((prop.videoHeight - (prop.videoHeight / divide)) / 2) * disToRealRatio
            }

        }
        this.setState({
            disToRealRatio,
            freeTransformKey: true,
            crop
        })
    }


    render() {

        if (this.state.templateRedirect) {
            localStorage.removeItem('template');
            return <Redirect
                to={{
                    pathname: `template`
                }} />
        }

        if (this.state.shouldRedirect) {
            const faceVideoCrop = {
                width: this.state.crop.width / this.state.disToRealRatio,
                height: this.state.crop.height / this.state.disToRealRatio,
                x: this.state.crop.x / this.state.disToRealRatio,
                y: this.state.crop.y / this.state.disToRealRatio,
            }

            localStorage.setItem('faceVideo', JSON.stringify(faceVideoCrop));
            localStorage.setItem('selectedFaceVideo', JSON.stringify(this.state.crop));


            //when the template name is 'split'
            if (this.state.template.name == "split") {
                //when user click the freetransform button..
                if (this.state.freeTransformKey) {

                    console.log('sdfsdfsdf');
                    const selectedRatio = this.state.crop.height / this.state.crop.width;
                    const gamerHeight = selectedRatio * (this.state.template.mainVideo.width / this.state.template.mainVideo.height);
                    console.log('gamerHeight')
                    console.log(gamerHeight)
                    const gamerVideo = {
                        width: 1,
                        height: gamerHeight,
                        x: 0,
                        y: 0
                    }
                    const template = {
                        ...this.state.template,
                        gamerVideo
                    }
                    console.log('template')
                    console.log(template)
                    localStorage.removeItem('template');
                    localStorage.setItem('template', JSON.stringify(template));
                }
                else { //when user clicks the 16:9 or 4:3 ratio button..
                    const template = {
                        ...this.state.template,
                        gamerVideo: this.state.gamerVideo
                    }
                    localStorage.setItem('template', JSON.stringify(template));
                }
            }

            //when the template is 'square'..
            if (this.state.template.name == 'square') {
                const template = {
                    ...this.state.template,
                    gamerVideo: this.state.gamerVideo
                }
                localStorage.setItem('template', JSON.stringify(template));
            }
            return <Redirect
                to={{
                    pathname: `main-edit`
                }} />
        }
        return (
            <div className="bg-white hero">
                <div className="absolute right-0 hero__effect hero__effect-first" />
                <div className="absolute right-0 hero__effect hero__effect-second" />
                <div className="absolute top-0 left-0 w-full bg-primary hero__background" />

                <div className="relative flex flex-col items-center mx-auto z-10 hero__section">
                    <div className="relative flex w-full  ">
                        <button
                            className="font-manrope-normal w-1/6 text-sm flex flex-row justify-center text-white bg-blue py-4 rounded-full"
                            type="button"
                            onClick={this.freeTransform}
                        >
                            free transform
                        </button>

                        <button
                            className="font-manrope-normal w-1/6 text-sm flex flex-row justify-center text-white bg-blue py-4 rounded-full"
                            type="button"
                            onClick={this.freeTransform}
                        >
                            free transform
                        </button>

                        <button
                            className="font-manrope-normal w-1/6 text-sm flex flex-row justify-center text-white bg-blue py-4 rounded-full"
                            type="button"
                            onClick={this.freeTransform}
                        >
                            free transform
                        </button>


                    </div>
                    

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
                            {
                                this.state.template.name == "split"
                                    ?
                                    <div style={{ marginTop: "20px" }}>
                                        {
                                            this.state._16_9faceKey
                                                ?
                                                <button onClick={this._16_9Facecam}>
                                                    16:9 facecam
                                                </button>
                                                : null
                                        }
                                        {
                                            this.state._4_3faceKey
                                                ?
                                                <button onClick={this._4_3Facecam}>
                                                    4:3 facecam
                                                </button>
                                                : null
                                        }
                                        <button onClick={this.freeTransform}>
                                            free transform
                                        </button>
                                    </div>
                                    :
                                    null
                            }

                            <Row style={{ width: '100%' }}>
                                <Col md={7}>
                                    <button onClick={this.goToTemplate}>
                                        Change Template
                                    </button>
                                </Col>
                                <Col md={5}>
                                    <button onClick={this.goToMain}>
                                        Done
                                    </button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </div>

            </div>

        )
    }
}

export default Edit;

const videoComponent = (props, videoPlayer) => (

    <video
        ref={videoPlayer}
        muted
        onLoadedData={() => videoPlayer.current.play()}
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