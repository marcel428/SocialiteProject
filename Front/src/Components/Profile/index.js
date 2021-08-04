import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";

import myAccountImg from '../../Assets/images/my-account.svg';
import arrowLeftIcon from '../../Assets/images/arrow-left.svg';
import messageIcon from '../../Assets/images/message.svg';
import callIcon from '../../Assets/images/call.svg';
import keyIcon from '../../Assets/images/key.svg';
import editIcon from '../../Assets/images/edit.svg';
import checkRoundIcon from '../../Assets/images/check-round.svg';

import './Profile.scss';
import PaymentMethod from "../PaymentMethod";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div className="relative min-h-screen bg-primary account">
                    <div className="absolute right-0 account__effect z-0 account__effect-first" />
                    <div className="absolute right-0 account__effect z-0 account__effect-second" />
                    <div className="container mx-auto z-10">
                        <div className="relative bg-white rounded-custom account__info">
                            <img src={arrowLeftIcon} className="absolute cursor-pointer account__info_back" alt="Back Icon"/>
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="max-w-md mb-4 md:mb-0">
                                    <h2 className="font-manrope-medium text-grey-700 text-center md:text-left mb-2">My Account</h2>
                                    <p className="font-manrope text-base text-grey-700 text-center md:text-left account__info_description">
                                        Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.
                                    </p>
                                </div>
                                <img src={myAccountImg} alt="My Account"/>
                            </div>
                            <hr className="mt-8" />
                            <div className="account__info_settings">
                                <p className="font-manrope-semibold text-primary text-xl mb-8">General settings</p>
                                <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mb-10">
                                    <div className="flex flex-row items-center">
                                        <div className="w-14 h-14 flex items-center justify-center account__info_settings_icon">
                                            <img src={messageIcon} alt="Email"/>
                                        </div>
                                        <div className="ml-5">
                                            <p className="font-manrope-medium text-grey-400 text-sm">Email address</p>
                                            <p className="font-manrope-semibold text-grey-700 text-base mt-1 ">jonathan002@gmail.com</p>
                                        </div>
                                    </div>
                                    <button className="w-14 h-14 flex items-center justify-center mt-4 md:mt-0 bg-grey-100 cursor-pointer account__info_settings_edit">
                                        <img src={editIcon} alt="Edit"/>
                                    </button>
                                </div>
                                <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mb-10">
                                    <div className="flex flex-row items-center">
                                        <div className="w-14 h-14 flex items-center justify-center account__info_settings_icon">
                                            <img src={callIcon} alt="Username"/>
                                        </div>
                                        <div className="ml-5">
                                            <p className="font-manrope-medium text-grey-400 text-sm">Username</p>
                                            <p className="font-manrope-semibold text-grey-700 text-base mt-1 ">+ 00 668 927 367</p>
                                        </div>
                                    </div>
                                    <button className="w-14 h-14 flex items-center justify-center mt-4 md:mt-0 bg-grey-100 cursor-pointer account__info_settings_edit">
                                        <img src={editIcon} alt="Edit"/>
                                    </button>
                                </div>
                                <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mb-10">
                                    <div className="flex flex-row items-center">
                                        <div className="w-14 h-14 flex items-center justify-center account__info_settings_icon">
                                            <img src={keyIcon} alt="Password"/>
                                        </div>
                                        <div className="ml-5">
                                            <p className="font-manrope-medium text-grey-400 text-sm">Password</p>
                                            <p className="font-manrope-semibold text-grey-700 text-base mt-1 ">************</p>
                                        </div>
                                    </div>
                                    <button className="w-14 h-14 flex items-center justify-center mt-4 md:mt-0 bg-grey-100 cursor-pointer account__info_settings_edit">
                                        <img src={editIcon} alt="Edit"/>
                                    </button>
                                </div>
                                <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between mb-10">
                                    <div className="flex flex-row items-center">
                                        <div className="w-14 h-14 flex items-center justify-center account__info_settings_icon">
                                            <img src={callIcon} alt="Phone number"/>
                                        </div>
                                        <div className="ml-5">
                                            <p className="font-manrope-medium text-grey-400 text-sm">Phone number</p>
                                            <p className="font-manrope-semibold text-grey-700 text-base mt-1 ">+ 00 668 927 367</p>
                                        </div>
                                    </div>
                                    <button className="w-14 h-14 flex items-center justify-center mt-4 md:mt-0 bg-grey-100 cursor-pointer account__info_settings_edit">
                                        <img src={editIcon} alt="Edit"/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start pt-6 account__info_action">
                                <button className="font-manrope-semibold text-base py-4 rounded-full">Log me out</button>
                                <button className="font-manrope-semibold text-white text-base mt-4 md:mt-0 md:ml-6 py-4 rounded-full">Delete my account</button>
                            </div>
                        </div>
                        <div className="mt-10 bg-white rounded-custom account__subscription">
                            <p className="font-manrope-semibold text-xl text-primary mb-5">Current package</p>
                            <h2 className="flex items-center font-manrope-medium text-grey-700">$135&nbsp;<span className="text-grey-400">/ Yearly</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-6 mt-8 mb-11">
                                <div className="flex flex-row items-start">
                                    <img src={checkRoundIcon} alt="Check Icon"/>
                                    <p className="font-manrope-medium text-base ml- text-grey-700 ml-1">Personalized templates to save you time</p>
                                </div>
                                <div className="flex flex-row items-start">
                                    <img src={checkRoundIcon} alt="Check Icon"/>
                                    <p className="font-manrope-medium text-base ml- text-grey-700 ml-1">Easily upload clips to social media</p>
                                </div>
                                <div className="flex flex-row items-start">
                                    <img src={checkRoundIcon} alt="Check Icon"/>
                                    <p className="font-manrope-medium text-base ml- text-grey-700 ml-1">Up to 2GB file size</p>
                                </div>

                                <div className="flex flex-row items-start">
                                    <img src={checkRoundIcon} alt="Check Icon"/>
                                    <p className="font-manrope-medium text-base ml- text-grey-700 ml-1">Add sounds to your clip</p>
                                </div>
                                <div className="flex flex-row items-start">
                                    <img src={checkRoundIcon} alt="Check Icon"/>
                                    <p className="font-manrope-medium text-base ml- text-grey-700 ml-1">Add GIFs to your clip</p>
                                </div>
                                <div className="flex flex-row items-start">
                                    <img src={checkRoundIcon} alt="Check Icon"/>
                                    <p className="font-manrope-medium text-base ml- text-grey-700 ml-1">Easily trim your clips</p>
                                </div>
                                <div className="col-span-2 flex flex-row items-start">
                                    <img src={checkRoundIcon} alt="Check Icon"/>
                                    <p className="font-manrope-medium text-base ml- text-grey-700 ml-1">
                                        Automated aspect ratios for all social media platforms Instant access to twitch, facebook, or youtube clips
                                    </p>
                                </div>
                            </div>
                            <button className="font-manrope-semibold text-white text-base leading-8 py-4 px-8 rounded-full">
                                Cancel my subscription
                            </button>
                        </div>
                        <div className="mt-10 bg-white rounded-custom account__method">
                            <p className="font-manrope-semibold text-xl text-primary mb-6">Payment Method</p>
                            <PaymentMethod />
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth
});



export default connect(mapStateToProps)(Profile)
