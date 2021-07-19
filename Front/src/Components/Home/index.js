import React, { Component } from "react";
import ReactPlayer from 'react-player'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import axios from "axios";
import { connect } from 'react-redux';
import { saveAuthInfo } from '../../Store/actions/actions'
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Table, Dropdown, DropdownButton } from "react-bootstrap";
import "./Home.css";
import { get, set, del, clear, keys } from "./../../Service/idb";
import Header from "../Layout/Header";

import {
    faWindowClose,
    faTimes,
    faEye,
} from "@fortawesome/free-solid-svg-icons";

const customStyles = {
    content: {
        position: 'absolute',
        padding: '0',
        width: '90%',
        background: 'transparent',
        border: 'none',
        margin: 'auto',
        marginTop: '20px'
    }
};

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        videoFilePath: null,
        videoFileName: '',
        videoBase64: '',
        clipUrl: '',
        shouldRedirect: false,
        videoWidth: null,
        videoHeight: null,
        invalidClipUrl: false,
        continue: false,
        database: null,
        localVideo: false,
        ytVideo: false,
        fbVideo: false,
        ttVideo: false,
        modalIsOpen: false,
        streamer: '',
        modalKey: '',
        twitchClips: [],
        twitchPagination: '',
        twitchClipsKey: false,
        serverError: false,

    }
    handleVideoUpload = async (event) => {
        var file = event.target.files[0];
        console.log('file')
        console.log(file)
        if (!file) {
            return;
        }
        var result = await this.convertFileToBase64(file);


        //save video in the idb(indexDB)
        clear();
        await set('videoBase64', result.base64);

        this.setState({
            videoFilePath: URL.createObjectURL(file),
            videoFileName: result.fileName,
            videoBase64: result.base64,
            localVideo: true
        })
        // const formData = new FormData();
        // formData.append('myfile', file[0]);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };

        // axios.
        //     post(`${process.env.REACT_APP_API_URL}/upload`, formData, config)
        //     .then((response) => {
        //         console.log('response')
        //         console.log(response)
        //         this.setState({
        //             videoFilePath: `${process.env.REACT_APP_PUBLIC_URL}/uploadedVideos/${response.data}`
        //         })
        //     }).catch((error) => {
        //         console.log(error)
        //     });

    };

    convertFileToBase64 = files => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            console.log('files');
            console.log(files);
            reader.readAsDataURL(files);
            reader.onload = () => resolve({
                fileName: files.name,
                base64: reader.result
            });
            reader.onerror = reject;
        });

    }
    changeClipUrl = (event) => {
        this.setState({
            clipUrl: event.target.value
        })
    }
    uploadClipByUrl = (clipUrl) => {
        //if modal is opened, close it 
        if(this.state.modalIsOpen){
            this.closeModal();
        }
        const ytPattern = clipUrl.indexOf('youtube.com/watch');
        const fbPattern = clipUrl.indexOf('https://www.facebook.com/');
        const ttPattern = clipUrl.indexOf('twitch.tv');

        if (ytPattern != -1) {
            axios.
                get(`${process.env.REACT_APP_API_URL}/upload/youtube?clipUrl=${clipUrl}`)
                .then((response) => {
                    console.log('response')
                    console.log(response)
                }).catch((error) => {
                    console.log(error)
                });
        }
        // if (fbPattern != -1) {
        //     axios.
        //         post(`${process.env.REACT_APP_API_URL}/upload/fb`, {
        //             clipUrl:clipUrl
        //         })
        //         .then((response) => {
        //             this.setState({
        //                 videoFilePath: `${process.env.REACT_APP_PUBLIC_URL}/uploadedVideos/${response.data}`
        //             })
        //         }).catch((error) => {
        //             console.log(error)
        //         });
        // }
        if (ttPattern != -1) {
            axios.
                post(`${process.env.REACT_APP_API_URL}/upload/twitch`, {
                    clipUrl: clipUrl
                })
                .then((response) => {
                    this.setState({
                        videoFilePath: response.data,
                        ttVideo: true
                    })
                }).catch((error) => {
                    console.log(error)
                });
        }
        // if (ytPattern == -1 && fbPattern == -1 && ttPattern == -1) {
        //     this.setState({
        //         invalidClipUrl: true
        //     })
        // }
        if (ttPattern == -1) {
            this.setState({
                invalidClipUrl: true
            })
        }

    }
    goTemplatePage = () => {
        this.setState({
            shouldRedirect: true
        })

    }
    getVideoSize = (event) => {
        this.setState({
            continue: true
        })
        this.setState({
            videoWidth: event.target.videoWidth,
            videoHeight: event.target.videoHeight
        })
    }
    getClip = () => {
        axios.
            get(`${process.env.REACT_APP_API_URL}/upload/fromTwitch?username=${this.state.streamer}`)
            .then((response) => {
                console.log('response')
                console.log(response)
                this.setState({
                    twitchClips: response.data.data,
                    twitchPagination: response.data.pagination.cursor,
                    twitchClipsKey: true
                })
            }).catch((error) => {
                this.setState({
                    serverError:true
                })
            });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }
    openModal = (key) => {
        this.setState({
            modalIsOpen: true,
            modalKey: key
        });
    }
    changeStreamer = (e) => {
        this.setState({
            streamer: e.target.value
        })
    }
    componentDidMount() {
        //when login with twtich or facebook.
        let search = window.location.search;

        let params = new URLSearchParams(search);
        let foo = params.get('query');

        if (foo) {
            console.log('sdf');
            let authData = JSON.parse(foo);
            localStorage.setItem('user', JSON.stringify(authData.user));
            localStorage.setItem('token', authData.token)
            this.props.saveAuthInfo(authData.user, authData.token);
            console.log('authData')
            console.log(authData)

            //delete query from url
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState({ path: newurl }, '', newurl);

        }

    }
    render() {
        if (this.state.shouldRedirect) {
            console.log('this.state');
            console.log(this.state);


            localStorage.setItem('videoFilePath', this.state.videoFilePath)
            if (this.state.ttVideo) {
                localStorage.setItem('videoType', 'tt');
            }
            if (this.state.localVideo) {
                localStorage.setItem('videoType', 'local');
            }
            if (this.state.localVideo) {
                localStorage.setItem('videoFileName', this.state.videoFileName)
            }
            localStorage.setItem('videoWidth', this.state.videoWidth)
            localStorage.setItem('videoHeight', this.state.videoHeight)
            return <Redirect
                to={{
                    pathname: `template`
                }} />
        }
        return (
            <>

                <div>
                    <div className="hero-section centered">
                        <div className="w-container">
                            <h1 className="hero-heading">
                                WELCOME TO SOCIALTE
                            </h1>
                            <div className="hero-subheading">
                                <strong>
                                    THE WORLDS #1 VIDEO EDITOR FOR CONTENT CREATORS
                                </strong>
                            </div>
                            <div className="text-block">
                                {
                                    this.state.invalidClipUrl
                                        ?
                                        <div style={{
                                            backgroundColor: "white", color: 'red',
                                            width: "70%", marginLeft: '11%',
                                            textAlign: "left", padding: '10px'
                                        }}>
                                            <div>
                                                Error Invalid url! Make sure the url looks like any of these:
                                            </div>
                                            {/* <div>
                                            http://www.youtube.com/watch?v=aqz-KE-bpKQ or
                                        </div>
                                        <div>
                                            https://www.facebook.com/ZLaner/videos/1206095443166908 or
                                        </div> */}
                                            <div>
                                                https://www.twitch.tv/tosjo/clip/RoundDistinctGarbageHassaanChop or
                                            </div>
                                            <div>
                                                https://clips.twitch.tv/RoundDistinctGarbageHassaanChop
                                            </div>

                                        </div>
                                        :
                                        null
                                }
                                <div>
                                    <input type="text"
                                        onChange={(e) => { this.changeClipUrl(e) }}
                                        style={{ width: '70%', marginRight: '3%' }}
                                        placeholder="clip url" />
                                    <button onClick={() => { this.uploadClipByUrl(this.state.clipUrl) }}>Clip</button>
                                </div>

                            </div>
                            <div style={{ marginTop: '20px', alignItems: 'center' }}>
                                <input type="file" onChange={(e) => { this.handleVideoUpload(e) }} />
                                <DropdownButton id="dropdown-basic-button" title="From Social">
                                    <Dropdown.Item onClick={() => { this.openModal("twitch") }}>
                                        From Twitch
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => { this.openModal('facebook') }}>
                                        From FaceBook
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => { this.openModal('youtube') }}>
                                        From Youtube
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div style={{ marginTop: '20px' }}>

                                <video
                                    style={{ marginRight: "auto", marginLeft: "auto" }}
                                    autoPlay
                                    controls
                                    width="50%"
                                    height="50%"
                                    src={this.state.videoFilePath}
                                    onLoadedMetadata={e => {
                                        this.getVideoSize(e)
                                    }}
                                >
                                </video>
                            </div>
                            {
                                this.state.continue
                                    ?
                                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                        <button onClick={() => { this.goTemplatePage() }}>
                                            Continue
                                        </button>
                                    </div>
                                    :
                                    null
                            }

                        </div>

                        <div className="container w-container">
                            <div className="w-row">
                                <div className="w-col-4 w-col ">
                                    <div className="white-box">
                                        <div>
                                            <img src="https://uploads-ssl.webflow.com/60b522cd7dd4732e654823f9/60b522cd7dd4738c6548240f_feather2-17-white.svg" className="grid-image" />
                                        </div>
                                        <h3>
                                            CLIP
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                    </div>
                                </div>
                                <div className=" w-col-4 w-col">
                                    <div className="white-box">
                                        <div>
                                            <img src="https://uploads-ssl.webflow.com/60b522cd7dd4732e654823f9/60b522cd7dd4738c6548240f_feather2-17-white.svg" className="grid-image" />
                                        </div>
                                        <h3>
                                            CLIP
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                    </div>
                                </div>
                                <div className=" w-col-4 w-col">
                                    <div className="white-box">
                                        <div>
                                            <img src="https://uploads-ssl.webflow.com/60b522cd7dd4732e654823f9/60b522cd7dd4738c6548240f_feather2-17-white.svg" className="grid-image" />
                                        </div>
                                        <h3>
                                            CLIP
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="button-2 w-button">
                            START YOUR FREE TRIAL
                        </a>

                    </div>
                    <div className="section accent">
                        <div className="w-container">
                            <div className="section-title-group">
                                <h2 className="section-heading centered white">
                                    HOW IT WORKS(video below we will add)
                                </h2>
                                <div className="section-subheading center off-white">

                                </div>
                            </div>
                            <div className="w-video w-embed">

                            </div>
                        </div>

                    </div>
                    <section id="call-to-action" className="call-to-action">
                        <div className="centered-container w-container">
                            <h2>
                                <span className="text-span-2">
                                    <strong>
                                        Pricing
                                    </strong>
                                </span>
                            </h2>
                            <p className="paragraph">
                                <span className="text-span">
                                    <strong>
                                        <em>
                                            12.99/mo. unlimited usage
                                        </em>
                                    </strong>
                                </span>
                                <br />
                                -
                                <span>
                                    <strong>
                                        Tik Tok aspect ratio made easy

                                        <br />
                                        -Facecam cropping
                                        <br />
                                        -Access to all templates
                                        <br />
                                        -Instant Access to Twitch, Facebook, or YouTube clips
                                        <br />
                                        -1,000,000+ GIF Images
                                        <br />
                                        -Ability to post directly to TikTok, Instagram, and YouTube
                                        <br />
                                        -Up to 1GB per edit
                                    </strong>
                                </span>
                                <strong>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </strong>

                                <span className="text-span">
                                    <strong>
                                        <em>
                                            19.99/mo. unlimited usage
                                        </em>
                                    </strong>
                                </span>
                                <br />
                                -
                                <span>
                                    <strong>
                                        -Tik Tok aspect ratio made easy

                                        <br />
                                        -Facecam cropping
                                        <br />
                                        -Access to all templates
                                        <br />
                                        -Instant Access to Twitch, Facebook, or YouTube clips
                                        <br />
                                        -1,000,000+ GIF Images
                                        <br />
                                        -Ability to post directly to TikTok, Instagram, and YouTube
                                    </strong>
                                </span>
                                <br />
                                <strong>
                                    <em className="italic-text">
                                        -Up to 4GB per edit
                                    </em>
                                </strong>
                                <span>
                                    <strong>
                                        <em>
                                            <br />
                                        </em>
                                    </strong>
                                </span>
                                <br />

                            </p>
                            <a href="#" className="w-button">
                                SIGN ME UP!
                            </a>

                        </div>
                    </section>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        contentLabel="Streamer Modal"
                        ariaHideApp={false}
                        style={customStyles}
                    >
                        <Card style={{ width: "50%", margin: "auto" }} >
                            <Card.Title className="bg-warning" style={{ marginBottom: "0px" }}>
                                <FontAwesomeIcon className="backIcon" icon={faWindowClose} onClick={this.closeModal} />
                            </Card.Title>
                            <Card.Body
                                className="text-center"
                                style={{
                                    border: "1",
                                    minHeight: "175px",
                                    paddingLeft: "0px",
                                    paddingRight: "0px",
                                }}
                            >
                                <h5>
                                    Enter streamer name
                                </h5>
                                {
                                    this.state.serverError &&
                                    <div className="text-center text-danger mt-3">
                                        Input valid streamer name!
                                    </div>
                                }

                                <div className="text-center mt-4">
                                    <label>
                                        name:
                                    </label>
                                    <input type="text" onChange={(e) => this.changeStreamer(e)} value={this.state.streamer} />
                                    <button onClick={this.getClip}>
                                        Submit
                                    </button>
                                </div>
                                {
                                    this.state.twitchClipsKey
                                        ?
                                        <div className="mt-4">
                                            {
                                                this.state.twitchClips && this.state.twitchClips.length > 0
                                                && this.state.twitchClips.map((clips, index) => (
                                                    <div key={index} onClick={()=>{this.uploadClipByUrl(clips.url)}}>
                                                        <div>
                                                            <span>
                                                                Clip-{index + 1}:&nbsp;
                                                            </span>
                                                            <span>
                                                                {clips.url}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <img style={{ width: "70%" }} src={clips.thumbnail_url} />
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                        :
                                        null
                                }


                            </Card.Body>
                        </Card>
                    </Modal>
                </div>
            </>



        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => {
    return {
        saveAuthInfo: (user, token) => dispatch(saveAuthInfo(user, token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)