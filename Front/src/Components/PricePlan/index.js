import React, { Component } from "react";
import { connect } from 'react-redux';

import checkRoundIcon from '../../Assets/images/check-round.svg';

import "./PricePlan.scss";

class PricePlan extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="flex flex-col md:flex-row">
                    <div className="bg-primary mx-4 md:mx-0 text-white rounded-custom priceWidget">
                        <p className="font-manrope-medium text-xl leading-7">Most Popular</p>
                        <p className="flex flex-row justify-cente items-center font-manrope-medium">
                            <span>$135</span><span className="ml-2 text-grey-100">/ Yearly</span>
                        </p>
                        <p className="font-manrope text-base mt-2.5">
                            Save $44.88 today
                        </p>
                        <div className="mt-10">
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Automated aspect ratios for all social media platforms.
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Instant access to twitch, facebook, or youtube clips.
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Personalized templates to save you time
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Easily trim your clips
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Add GIFs to your clip
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Add sounds to your clip
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Add sounds to your clip
                                </p>
                            </div>
                            <div className="flex flex-row items-start">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Up to 2GB file size
                                </p>
                            </div>
                        </div>
                        <button
                            className="font-manrope-semibold w-full text-base text-blue-100 bg-white py-4 mt-14 rounded-full"
                            type="button"
                            onClick={() => this.props.selectPlan('yearly')}
                        >
                            Choose Plan
                        </button>
                    </div>
                    <div className="bg-white mx-4 mt-4 md:m-0 text-grey-700 rounded-custom priceWidget">
                        <p className="font-manrope-medium text-xl leading-7">Standard</p>
                        <p className="flex flex-row justify-cente items-center font-manrope-medium">
                            <span>$14.99</span><span className="ml-2 text-grey-400">/ Yearly</span>
                        </p>
                        <p className="font-manrope text-base mt-2.5">
                            Lorem Ipsum is simply dummy text of the printing and
                        </p>
                        <div className="mt-10">
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Automated aspect ratios for all social media platforms.
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Instant access to twitch, facebook, or youtube clips.
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Personalized templates to save you time
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Easily trim your clips
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Add GIFs to your clip
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Add sounds to your clip
                                </p>
                            </div>
                            <div className="flex flex-row items-start mb-5">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Add sounds to your clip
                                </p>
                            </div>
                            <div className="flex flex-row items-start">
                                <img src={checkRoundIcon} alt="Check Icon"/>
                                <p className="font-manrope text-base ml-2">
                                    Up to 2GB file size
                                </p>
                            </div>
                        </div>
                        <button
                            className="font-manrope-semibold w-full text-base text-blue-100 bg-white py-4 mt-14 rounded-full"
                            type="button"
                            onClick={() => this.props.selectPlan('monthly')}
                        >
                            Choose Plan
                        </button>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

// const mapDispatchToProps = dispatch => {
//     return {
//         saveAuthInfo: (user, token) => dispatch(saveAuthInfo(user, token)),
//     };
// };

export default connect(mapStateToProps, null)(PricePlan)
