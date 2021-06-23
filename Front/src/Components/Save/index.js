import React, { Component, useRef } from "react";
import ReactPlayer from 'react-player'
import { Redirect, Link } from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "react-string-format";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { connect } from 'react-redux';


import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import './Save.css';
import { saveAs } from 'file-saver';


class Save extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        shouldRedirect: false
    }
    uploadGoogleDrive = () => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/socialUpload/googleDrive/${this.props.location.savedVideo}`)
            .then((res) => {
                if (res.status == 200) {
                    alert('video is uploaded successfully!')
                    this.setState({
                        shouldRedirect: true,
                    })
                }
            }).catch((error) => {
                console.log(error)
            });
    }
    uploadYoutube = () => {
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/socialUpload/youtube`,{
                    userId:this.props.auth.user.id,
                    fileName:this.props.location.savedVideo
                })
            .then((res) => {
                if (res.status == 200) {
                    alert('video is uploaded successfully!')
                    this.setState({
                        shouldRedirect: true,
                    })
                }
            }).catch((error) => {
                console.log(error)
            });
    }
    download = () => {
        saveAs(
            `${process.env.REACT_APP_PUBLIC_URL}/editedVideos/${this.props.location.savedVideo}`,
            this.props.location.savedVideo
        )
    }

    render() {
        console.log('this.props')

        console.log(this.props)

        if (this.state.shouldRedirect) {
            return <Redirect
                to={{
                    pathname: '/',
                }}
            />
        }

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
                                width={`${this.props.location.displayPercentInSave * 100}%`}
                                height={`${this.props.location.displayPercentInSave * 100}%`}
                                src={`${process.env.REACT_APP_PUBLIC_URL}/editedVideos/${this.props.location.savedVideo}`}
                            >
                            </video>
                            :
                            null
                    }
                </div>
                <div style={{ textAlign: 'center', padding: "30px" }}>
                    <Link to="/">
                        <button>
                            go to home
                        </button>
                    </Link>
                </div>
                <div>
                    <button onClick={this.download}>
                        download
                    </button>
                    <DropdownButton id="dropdown-basic-button" title="upload">
                        <Dropdown.Item onClick={this.uploadGoogleDrive}>
                            Google drive
                        </Dropdown.Item>
                        {
                            this.props.auth.user&&this.props.auth.user.id
                                ?
                                <Dropdown.Item onClick={this.uploadYoutube}>
                                    Youtube
                                </Dropdown.Item>
                                :
                                null
                        }

                    </DropdownButton>
                </div>
            </div>




        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(mapStateToProps)(Save)
