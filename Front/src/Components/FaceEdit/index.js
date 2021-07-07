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

class Edit extends Component {
    constructor(props) {
        super(props);
        this.videoPlayer = React.createRef();

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
        templateRedirect: false
    }
    handleCrop = (crop, percentCrop) => {
      //when the selected faceVideo ratio is the same as with mainVideo ratio * 0.7(limited value),
      //stop increasing the ratio
        var diffBtwTemplateAndCrop=0.7;
        var mainRatio=this.state.template.mainVideo.height/this.state.template.mainVideo.width;
        var selectedRatio=crop.height/crop.width;
        if(selectedRatio>mainRatio*diffBtwTemplateAndCrop){
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
        this.initialCrop();
    }
    freeTransform = () => {
        var divide = 3;
        var state=this.state;
        var crop={
            unit:'px',
            width:state.videoWidth/divide,
            height:state.videoHeight/divide,
            x:(state.videoWidth-state.videoWidth/divide)/2,
            y:(state.videoHeight-state.videoHeight/divide)/2
        }
        this.setState({
            crop
        })
    }
    componentDidMount() {
        this.initialCrop();
    }
    initialCrop = () => {
        var divide = 3;
        var prop = this.state;
        const videoRatio = prop.videoHeight / prop.videoWidth;

        const faceVideoRatio = prop.template.mainVideo.height * prop.template.gamerVideo.height / (prop.template.mainVideo.width * prop.template.gamerVideo.width);

        var crop = {};
        if (faceVideoRatio < videoRatio) {
            console.log('sdf')
            crop = {
                unit: 'px',
                width: prop.videoWidth / divide,
                height: prop.videoWidth * faceVideoRatio / divide,
                aspect: 1 / faceVideoRatio,
                x: (prop.videoWidth - (prop.videoWidth / divide)) / 2,
                y: (prop.videoHeight - (prop.videoWidth * faceVideoRatio / divide)) / 2
            }
        } else {
            console.log('wer')
            crop = {
                unit: 'px',
                width: prop.videoHeight / faceVideoRatio / divide,
                height: prop.videoHeight / divide,
                aspect: 1 / faceVideoRatio,
                x: (prop.videoWidth - (prop.videoHeight / faceVideoRatio / divide)) / 2,
                y: (prop.videoHeight - (prop.videoHeight / divide)) / 2
            }

        }
        this.setState({
            crop
        })
    }


    render() {
        console.log('this.state')
        console.log(this.state)
        if (this.state.templateRedirect) {
            localStorage.removeItem('template');
            return <Redirect
                to={{
                    pathname: `template`
                }} />
        }

        if (this.state.shouldRedirect) {
            localStorage.setItem('faceVideo', JSON.stringify(this.state.crop));
            return <Redirect
                to={{
                    pathname: `main-edit`
                }} />
        }
        return (
            <div>
                <div>
                    <Row>
                        <Col>
                            <span>Select Facecam&nbsp;&nbsp;</span>
                            <input type="checkbox" checked={true} readOnly />
                        </Col>
                        <Col>
                            <span>Select gamefeed&nbsp;&nbsp;</span>
                            <input type="checkbox" value={1} disabled="disabled" />
                        </Col>
                        <Col>
                            <span>Preview&nbsp;&nbsp;</span>
                            <input type="checkbox" value={1} disabled="disabled" />
                        </Col>
                    </Row>
                </div>


                <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                    <ReactCrop
                        crop={this.state.crop}
                        keepSelection={true}
                        onChange={(crop, percentCrop) => { this.handleCrop(crop, percentCrop) }}
                        renderComponent={videoComponent(this.state.videoFilePath, this.videoPlayer)} />
                </div>
                {
                    this.state.template.name == "split" || this.state.template.name == "square"
                        ?
                        <div style={{ marginTop: "20px" }}>
                            <button onClick={this._4_3Facecam}>
                                4:3 facecam
                            </button>
                            <button style={{ marginLeft: '20px' }} onClick={this.freeTransform}>
                                free transform
                            </button>
                        </div>
                        :
                        null
                }

                <div style={{ marginTop: '30px', marginBottom: "30px", textAlign: 'center' }}>
                    <button onClick={this.goToMain}>
                        Done
                    </button>

                </div>
                <div>
                    <button onClick={this.goToTemplate}>
                        Change Template
                    </button>
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
        style={{ display: 'block', maxWidth: '100%' }}
        onLoadStart={e => {
            // You must inform ReactCrop when your media has loaded.
            e.target.dispatchEvent(new Event('medialoaded', { bubbles: true }));
        }}
    >
        <source src={props} type="video/mp4" />
    </video>
);