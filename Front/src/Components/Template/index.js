import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import { connect } from 'react-redux';

import "./Template.scss";
let ss = [];

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {
            templates: [],
            linkKey: [],
            shouldRedirect: false,
            selectedTmp: {},
        }
    }

    componentDidMount() {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/template`
            )
            .then((res) => {
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

    goToEdit = (item) => {
        console.log('item')
        console.log(item)
        this.setState({
            shouldRedirect: true,
            selectedTmp: item
        })
    }

    render() {
        if (this.state.shouldRedirect) {
            if (this.state.selectedTmp.gamerVideo.length === 0) {
                const template = {
                    ...this.state.selectedTmp,
                    gamerVideo: null
                }
                localStorage.setItem('template', JSON.stringify(template));
            } else {
                localStorage.setItem('template', JSON.stringify(this.state.selectedTmp));
            }
            return <Redirect to={{
                        pathname: this.state.selectedTmp.gamerVideo && this.state.selectedTmp.gamerVideo.length > 0 ? 'face-edit' : 'main-edit',}}
                   />;
        }

        return (
            <div className="w-full min-h-screen bg-primary pb-10 template">
                <h1 className="mx-auto font-manrope-medium text-5xl text-white text-center">Select from 3 simple templates</h1>
                <p className="mx-auto mt-6 mb-40 font-manrope text-white text-base text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                </p>
                <div className="container mx-auto grid grid-col-1 md:grid-cols-3 gap-6 items-start">
                    {
                        this.state.templates && (
                            this.state.templates.map((item, idx) => (
                                <div className="overflow-hidden mx-4 md:mx-0 template__item" key={item._id}>
                                    <video
                                        className="w-full"
                                        autoPlay
                                        controls
                                        src={`${process.env.REACT_APP_PUBLIC_URL}/template/${item.exampleVideo}`}
                                        onLoadedMetadata={e => {
                                            this.getVideoSize(e, idx)
                                        }}
                                    />
                                    <div className="pt-6 px-5 bg-white">
                                        <h3 className="font-manrope-semibold text-grey-700">{item.name}</h3>
                                        {/*{item.level}*/}
                                        <p className="font-manrope text-grey-700 text-base mt-4 mb-11">
                                            {item.description}
                                        </p>
                                        {this.state.linkKey[idx] &&
                                        <button
                                            type="button"
                                            className="font-manrope-semibold text-base text-white bg-grey-700 mx-auto px-11 py-4 rounded-full"
                                            onClick={() => this.goToEdit(item)}
                                        >
                                            Select
                                        </button>
                                        }
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Template)
