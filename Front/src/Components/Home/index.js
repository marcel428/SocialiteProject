import React, { Component } from "react";
import { Link, Redirect, useParams, useLocation } from 'react-router-dom'
import axios from "axios";
import { connect } from 'react-redux';
import youtubeSquare from "@iconify-icons/fa-brands/youtube-square";
import {Icon} from "@iconify/react";
import { toast } from 'react-toastify';

import twitchIcon from "@iconify-icons/fa-brands/twitch";
import facebookSquare from "@iconify-icons/fa-brands/facebook-square";

import { saveAuthInfo } from '../../Store/actions/actions'
import { get, set, del, clear, keys } from "../../Service/idb";

import PricePlan from "../PricePlan";

import sourceClip from '../../Assets/images/source-clip.svg';
import editClip from '../../Assets/images/edit-clip.svg';
import postClip from '../../Assets/images/post-clip.svg';

import "./Home.scss";
import ChoosePlan from "../ChoosePlan";
import AccountSubscription from "../AccountSubscription";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            socialClip: 'youtube',

            openChoosePlanModal: false,
            openAccountSubscription: false,
            planMode: 'yearly',
        }
    }

    handleVideoUpload = async (event) => {
        let file = event.target.files[0];
        if (!file) {
            return;
        }
        let result = await this.convertFileToBase64(file);

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
            const reader = new FileReader();
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

        if (ytPattern !== -1) {
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
        if (ttPattern !== -1) {
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
        if (ttPattern === -1) {
            toast.error('Error Invalid url!'
                         // Make sure the url looks like any of these:\n
                         // https://www.twitch.tv/tosjo/clip/RoundDistinctGarbageHassaanChop or\n
                         // https://clips.twitch.tv/RoundDistinctGarbageHassaanChop'
            );
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

    handleClickClip = (val) => {
        this.setState({
            socialClip: val
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
            let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState({ path: newurl }, '', newurl);

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const state = this.props.location.state;

        if (state && state.chooseplan) {
            this.setState({
                openChoosePlanModal: true,
            });
            this.props.history.replace({
                state: {}
            });
        }
    }

    closeChoosePlanModal = () => {
        this.setState({
            openChoosePlanModal: false,
        });
    }

    selectPlanMode = (mode) => {
        this.setState({
            openChoosePlanModal: false,
            openAccountSubscription: true,
            planMode: mode,
        });
    }

    closeAccountSubscriptionModal = () => {
        this.setState({
            openAccountSubscription: false,
        });
    }

    render() {
        if (this.state.shouldRedirect) {
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
                <div className="bg-white hero">
                    <div className="absolute right-0 hero__effect hero__effect-first" />
                    <div className="absolute right-0 hero__effect hero__effect-second" />
                    <div className="absolute top-0 left-0 w-full bg-primary hero__background" />
                    <div className="relative flex flex-col items-center mx-auto z-10 hero__section">
                        <p className="font-manrope-medium text-5xl text-white text-center">
                            The #1 tool to help you grow your stream!
                        </p>
                        <button
                            className="font-manrope-semibold text-base text-white bg-grey-700 px-11 py-4 mt-14 rounded-full"
                            type="button"
                        >
                            Start 7 day free trial
                        </button>
                        <div className="w-full mt-20 flex flex-row">
                            <div className="relative hero__curl">
                                <input
                                    type="text"
                                    placeholder="Clip URL"
                                    className="font-manrope-medium px-9 py-4 placeholder-grey-600 relative bg-white rounded-full text-grey-600 text-base border-0 outline-none w-full"
                                    onChange={(e) => { this.changeClipUrl(e) }}
                                />
                                <div className="absolute right-0 mr-2 flex flex-row hero__curl_btns">
                                    {
                                        this.state.socialClip === 'youtube' ?
                                            <button
                                                className="flex flex-row font-manrope-medium text-base text-red bg-red bg-opacity-10 mr-2.5 px-5 py-2.5 rounded-full"
                                                type="button"
                                            >
                                                <Icon icon={youtubeSquare} className="mr-4 w-6 h-6" />
                                                From Youtube
                                            </button>
                                            :
                                            this.state.socialClip === 'twitch' ?
                                                <button
                                                    className="flex flex-row font-manrope-medium text-base text-purple bg-purple bg-opacity-10 mr-2.5 px-5 py-2.5 rounded-full"
                                                    type="button"
                                                >
                                                    <Icon icon={twitchIcon} className="mr-4 w-6 h-6" />
                                                    From Twitch
                                                </button>
                                                :
                                                <button
                                                    className="flex flex-row font-manrope-medium text-base text-blue bg-blue bg-opacity-10 mr-2.5 px-5 py-2.5 rounded-full"
                                                    type="button"
                                                >
                                                    <Icon icon={facebookSquare} className="mr-4 w-6 h-6" />
                                                    From Facebook
                                                </button>
                                    }
                                    <div className="flex items-center justify-center">
                                        <label className="font-manrope-medium text-base text-primary bg-primary px-5 py-2.5 bg-opacity-10 rounded-full cursor-pointer">
                                            <span className="mt-2 text-base leading-normal">Choose File</span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(e) => { this.handleVideoUpload(e) }}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="font-manrope-semibold w-48 text-base text-white bg-green ml-4 px-14 py-4 rounded-full"
                                type="button"
                                onClick={() => { this.uploadClipByUrl(this.state.clipUrl) }}
                            >
                                Clip now
                            </button>
                        </div>
                        <div className="flex flex-row w-full mt-9">
                            <button
                                className="font-manrope-normal w-1/3 flex flex-row justify-center text-lg text-white bg-purple py-4 rounded-full"
                                type="button"
                                onClick={() => this.handleClickClip('twitch')}
                            >
                                <Icon icon={twitchIcon} className="mr-4 w-6 h-6" />
                                Twitch
                            </button>
                            <button
                                className="font-manrope-normal w-1/3 text-lg flex flex-row justify-center text-white bg-red py-4 mx-4 rounded-full"
                                type="button"
                                onClick={() => this.handleClickClip('youtube')}
                            >
                                <Icon icon={youtubeSquare} className="mr-4 w-6 h-6" />
                                Youtube
                            </button>
                            <button
                                className="font-manrope-normal w-1/3 text-lg flex flex-row justify-center text-white bg-blue py-4 rounded-full"
                                type="button"
                                onClick={() => this.handleClickClip('facebook')}
                            >
                                <Icon icon={facebookSquare} className="mr-4 w-6 h-6" />
                                Facebook
                            </button>
                        </div>
                        {
                            this.state.videoFilePath &&
                            <div className="p-4 hero__videoplay">
                                <video
                                    className="w-full"
                                    autoPlay
                                    controls
                                    src={this.state.videoFilePath}
                                    onLoadedMetadata={e => {
                                        this.getVideoSize(e)
                                    }}
                                >
                                </video>
                            </div>
                        }


                        {
                            this.state.videoFilePath
                            ?
                            <div style={{marginTop:'20px',textAlign:'center'}}>
                            <button 
                            className="font-manrope-semibold w-48 text-base text-white bg-green ml-4 px-14 py-4 rounded-full"
                            type="button"
                            onClick={()=>{this.goTemplatePage()}}>
                                Continue
                            </button>
                            </div>
                            :
                            null
                        }
                       
                



                        
                    </div>
                </div>

                <div id="how-it-works" className="bg-white pb-40 howwork">
                    <div className="container mx-auto flex flex-col justify-center items-center">
                        <p className="font-manrope-medium text-5xl text-primary text-center howwork__title">
                            Here's how it works!
                        </p>
                        <div className="flex flex-col lg:flex-row items-center">
                            <img src={sourceClip} alt="Source Your Clip"/>
                            <div className="p-4 lg:p-0 howwork__detail ">
                                <p className="font-manrope-medium text-grey-700 text-center lg:text-left">Source your clip</p>
                                <p className="mt-6 font-manrope text-base text-grey-700 text-center lg:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:flex-row-reverse items-center mt-16">
                            <img src={editClip} alt="Edit Your Clip"/>
                            <div className="p-4 lg:p-0 howwork__detail howwork__detail-source">
                                <p className="font-manrope-medium text-grey-700 text-center lg:text-left">Edit your clip</p>
                                <p className="mt-6 font-manrope text-base text-grey-700 text-center lg:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center mt-16">
                            <img src={postClip} alt="Post Your Clip"/>
                            <div className="p-4 lg:p-0 howwork__detail ">
                                <p className="font-manrope-medium text-grey-700 text-center lg:text-left">Post your clip</p>
                                <p className="mt-6 font-manrope text-base text-grey-700 text-center lg:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make. Text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-grey-200 py-24 price">
                    <p className="font-manrope-medium text-5xl text-grey-700 text-center price__title">Simple and Transparent price</p>
                    <div className="mt-20">
                        <PricePlan selectPlan={(e) => this.selectPlanMode(e)} />
                    </div>
                    <Link
                        to="/register"
                        className="font-manrope-semibold text-base text-white bg-grey-700 px-20 py-4 rounded-full price__signup"
                    >
                        Sign up now!
                    </Link>
                </div>

                <div className="bg-white bottom">
                    <div className="container mx-auto pt-8 pb-11 rounded-custom text-center">
                        <p className="font-manrope text-grey-800 bottom__title">Lorem Ipsum is simply</p>
                        <p className="font-manrope text-grey-800 mx-auto">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        </p>
                        <button
                            className="font-manrope-semibold text-base text-white bg-primary mt-7 px-11 py-4 rounded-full"
                            type="button"
                        >
                            Start 7 day free trial
                        </button>
                    </div>
                </div>

                {this.state.openChoosePlanModal &&
                    <ChoosePlan
                        isOpen={this.state.openChoosePlanModal}
                        closeChoosePlan={this.closeChoosePlanModal}
                        selectPlan={(e) => this.selectPlanMode(e)}
                    />
                }

                {this.state.openAccountSubscription &&
                    <AccountSubscription
                        isOpen={this.state.openAccountSubscription}
                        planMode={this.state.planMode}
                        closeAccountSubscriptionModal={this.closeAccountSubscriptionModal}
                    />
                }

                {/*
                <div className="mt-96">
                    <div className="w-container">
                        <p className="hero-heading">
                            WELCOME TO SOCIALTE
                        </p>
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
                                        price
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
                */}
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
