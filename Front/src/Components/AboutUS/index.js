import React, { Component } from "react";
import { connect } from 'react-redux';

import memberOne from '../../Assets/images/aboutus-1.png';
import memberTwo from '../../Assets/images/aboutus-2.png';
import memberThree from '../../Assets/images/aboutus-3.png';
import memberFour from '../../Assets/images/aboutus-4.png';
import memberFive from '../../Assets/images/aboutus-5.png';
import memberSix from '../../Assets/images/aboutus-6.png';
import arrowRightCircle from '../../Assets/images/arrow-right-circle.svg';

import "./AboutUs.scss";

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="aboutusbanner">
                    <div className="absolute right-0 aboutusbanner__effect aboutusbanner__effect-first" />
                    <div className="absolute right-0 aboutusbanner__effect aboutusbanner__effect-second" />
                    <div className="absolute top-0 left-0 w-full bg-primary aboutusbanner__background" />
                    <div className="relative mx-auto px-4 z-10 aboutusbanner__detail">
                        <h1 className="font-manrope-medium text-white text-5xl text-center">About us</h1>
                        <p className="font-manrope text-white text-base text-center mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</p>
                    </div>
                    <div className="relative mx-auto p-4 aboutusbanner__videoplay">
                        <video
                            className="w-full"
                            autoPlay
                            controls
                            src=""
                        >
                        </video>
                    </div>
                </div>
                <div className="container mx-auto team">
                    <h2 className="font-manrope-medium text-grey-700 text-5xl text-center">Our Team</h2>
                    <p className="font-manrope text-grey-700 text-base text-center mt-4 mx-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-11">
                        <div className="relative rounded-custom">
                            <img src={memberOne} alt="Team Member 1"/>
                            <div className="absolute mx-5 bottom-5 p-4 team__detail">
                                <h3 className="font-manrope-semibold text-white mb-1">Jonathan Smith</h3>
                                <p className="font-manrope-light text-white text-base mt-1 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                <a href="#" className="flex flex-row items-center">
                                    <span className="font-manrope-semibold -mt-1 mr-1 text-base text-green">Learn more</span>
                                    <img src={arrowRightCircle} alt="Arrow Right Circle"/>
                                </a>
                            </div>
                        </div>
                        <div className="relative rounded-custom">
                            <img src={memberTwo} alt="Team Member 2"/>
                            <div className="absolute mx-5 bottom-5 p-4 team__detail">
                                <h3 className="font-manrope-semibold text-white mb-1">Jonathan Smith</h3>
                                <p className="font-manrope-light text-white text-base mt-1 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                <a href="#" className="flex flex-row items-center">
                                    <span className="font-manrope-semibold -mt-1 mr-1 text-base text-green">Learn more</span>
                                    <img src={arrowRightCircle} alt="Arrow Right Circle"/>
                                </a>
                            </div>
                        </div>
                        <div className="relative rounded-custom">
                            <img src={memberThree} alt="Team Member 3"/>
                            <div className="absolute mx-5 bottom-5 p-4 team__detail">
                                <h3 className="font-manrope-semibold text-white mb-1">Jonathan Smith</h3>
                                <p className="font-manrope-light text-white text-base mt-1 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                <a href="#" className="flex flex-row items-center">
                                    <span className="font-manrope-semibold -mt-1 mr-1 text-base text-green">Learn more</span>
                                    <img src={arrowRightCircle} alt="Arrow Right Circle"/>
                                </a>
                            </div>
                        </div>
                        <div className="relative rounded-custom">
                            <img src={memberFour} alt="Team Member 4"/>
                            <div className="absolute mx-5 bottom-5 p-4 team__detail">
                                <h3 className="font-manrope-semibold text-white mb-1">Jonathan Smith</h3>
                                <p className="font-manrope-light text-white text-base mt-1 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                <a href="#" className="flex flex-row items-center">
                                    <span className="font-manrope-semibold -mt-1 mr-1 text-base text-green">Learn more</span>
                                    <img src={arrowRightCircle} alt="Arrow Right Circle"/>
                                </a>
                            </div>
                        </div>
                        <div className="relative rounded-custom">
                            <img src={memberFive} alt="Team Member 5"/>
                            <div className="absolute mx-5 bottom-5 p-4 team__detail">
                                <h3 className="font-manrope-semibold text-white mb-1">Jonathan Smith</h3>
                                <p className="font-manrope-light text-white text-base mt-1 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                <a href="#" className="flex flex-row items-center">
                                    <span className="font-manrope-semibold -mt-1 mr-1 text-base text-green">Learn more</span>
                                    <img src={arrowRightCircle} alt="Arrow Right Circle"/>
                                </a>
                            </div>
                        </div>
                        <div className="relative rounded-custom">
                            <img src={memberSix} alt="Team Member 6"/>
                            <div className="absolute mx-5 bottom-5 p-4 team__detail">
                                <h3 className="font-manrope-semibold text-white mb-1">Jonathan Smith</h3>
                                <p className="font-manrope-light text-white text-base mt-1 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                                <a href="#" className="flex flex-row items-center">
                                    <span className="font-manrope-semibold -mt-1 mr-1 text-base text-green">Learn more</span>
                                    <img src={arrowRightCircle} alt="Arrow Right Circle"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto rounded-custom bg-white text-center aboutusbottom">
                    <h2 className="font-manrope text-grey-800 text-center">Lorem Ipsum is simply</h2>
                    <p className="font-manrope text-base text-grey-800 mb-7 text-center mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
                    <button
                        className="font-manrope-semibold text-base text-white bg-grey-700 mx-auto px-11 py-4 rounded-full"
                        type="button"
                    >
                        Start 7 day free trial
                    </button>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(AboutUs)
