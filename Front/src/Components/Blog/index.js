import React, { Component } from "react";
import { connect } from 'react-redux';
import { XIcon, PlusIcon } from '@heroicons/react/solid';

import blogImg from '../../Assets/images/blog.svg';
import arrowRightCircleBlue from '../../Assets/images/arrow-right-circle-blue.svg';

import blogOneImg from '../../Assets/images/blog-1.png';
import blogTwoImg from '../../Assets/images/blog-2.png';
import blogThreeImg from '../../Assets/images/blog-3.png';
import blogFourImg from '../../Assets/images/blog-4.png';
import blogFiveImg from '../../Assets/images/blog-5.png';
import blogSixImg from '../../Assets/images/blog-6.png';

import "./Blog.scss";
import {Link} from "react-router-dom";

class Blog extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-full min-h-screen bg-primary pt-52 pb-20 blog">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-col md:flex-row md:flex-row-reverse items-center justify-center md:justify-between blog__banner">
                        <img src={blogImg} alt="Blog Image"/>
                        <div className="mt-4 md:mt-0">
                            <h1 className="font-manrope-medium text-white text-center md:text-left">
                                Lorem Ipsum<br /> is simply dummy text
                            </h1>
                            <p className="font-manrope text-white text-base mt-6 text-center md:text-left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                            </p>
                        </div>
                    </div>
                    <p className="font-manrope-medium text-white text-2xl mb-8">Browse by category</p>
                    <div className="flex flex-row flex-wrap blog__categories">
                        <div className="flex flex-row items-center justify-between mr-2.5 mb-4 py-4 px-3.5 rounded-full cursor-pointer blog__categories-active">
                            <XIcon className="w-6 h-6 text-white" />
                            <span className="font-manrope-medium text-white ml-1">Categories 1</span>
                        </div>
                        <div className="flex flex-row items-center justify-between mr-2.5 mb-4 py-4 px-3.5 rounded-full cursor-pointer">
                            <PlusIcon className="w-6 h-6 text-white" />
                            <span className="font-manrope-medium text-white ml-1">Categories 2</span>
                        </div>
                        <div className="flex flex-row items-center justify-between mr-2.5 mb-4 py-4 px-3.5 rounded-full cursor-pointer">
                            <PlusIcon className="w-6 h-6 text-white" />
                            <span className="font-manrope-medium text-white ml-1">Categories 3</span>
                        </div>
                        <div className="flex flex-row items-center justify-between mr-2.5 mb-4 py-4 px-3.5 rounded-full cursor-pointer">
                            <PlusIcon className="w-6 h-6 text-white" />
                            <span className="font-manrope-medium text-white ml-1">Categories 4</span>
                        </div>
                        <div className="flex flex-row items-center justify-between mr-2.5 mb-4 py-4 px-3.5 rounded-full cursor-pointer">
                            <PlusIcon className="w-6 h-6 text-white" />
                            <span className="font-manrope-medium text-white ml-1">Categories 5</span>
                        </div>
                        <div className="flex flex-row items-center justify-between mr-2.5 mb-4 py-4 px-3.5 rounded-full cursor-pointer">
                            <PlusIcon className="w-6 h-6 text-white" />
                            <span className="font-manrope-medium text-white ml-1">Categories 6</span>
                        </div>
                        <div className="flex flex-row items-center justify-between mr-2.5 mb-4 py-4 px-3.5 rounded-full cursor-pointer">
                            <PlusIcon className="w-6 h-6 text-white" />
                            <span className="font-manrope-medium text-white ml-1">Categories 7</span>
                        </div>
                    </div>
                    <div className="grid gird-cols-1 md:grid-cols-2 gap-x-12 gap-y-11 mt-14">
                        <div className="bg-white overflow-hidden blog__item">
                            <img src={blogOneImg} className="w-full object-cover" alt="Blog 1"/>
                            <div className="pt-5 px-6 pb-9">
                                <h3 className="font-manrope-semibold text-grey-700">
                                    Lorem Ipsum is simply dummy text
                                </h3>
                                <p className="font-manrope text-grey-700 text-base mt-2.5 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.
                                </p>
                                <Link to="#" className="flex flex-row items-center font-manrope-semibold text-base text-blue-100">
                                    <span className="mr-1">Learn more</span>
                                    <img src={arrowRightCircleBlue} className="w-5 h-5" alt="Arrow Right Circle Blue"/>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden blog__item">
                            <img src={blogTwoImg} className="w-full object-cover" alt="Blog 1"/>
                            <div className="pt-5 px-6 pb-9">
                                <h3 className="font-manrope-semibold text-grey-700">
                                    Lorem Ipsum is simply dummy text
                                </h3>
                                <p className="font-manrope text-grey-700 text-base mt-2.5 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.
                                </p>
                                <Link to="#" className="flex flex-row items-center font-manrope-semibold text-base text-blue-100">
                                    <span className="mr-1">Learn more</span>
                                    <img src={arrowRightCircleBlue} className="w-5 h-5" alt="Arrow Right Circle Blue"/>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden blog__item">
                            <img src={blogThreeImg} className="w-full object-cover" alt="Blog 1"/>
                            <div className="pt-5 px-6 pb-9">
                                <h3 className="font-manrope-semibold text-grey-700">
                                    Lorem Ipsum is simply dummy text
                                </h3>
                                <p className="font-manrope text-grey-700 text-base mt-2.5 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.
                                </p>
                                <Link to="#" className="flex flex-row items-center font-manrope-semibold text-base text-blue-100">
                                    <span className="mr-1">Learn more</span>
                                    <img src={arrowRightCircleBlue} className="w-5 h-5" alt="Arrow Right Circle Blue"/>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden blog__item">
                            <img src={blogFourImg} className="w-full object-cover" alt="Blog 1"/>
                            <div className="pt-5 px-6 pb-9">
                                <h3 className="font-manrope-semibold text-grey-700">
                                    Lorem Ipsum is simply dummy text
                                </h3>
                                <p className="font-manrope text-grey-700 text-base mt-2.5 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.
                                </p>
                                <Link to="#" className="flex flex-row items-center font-manrope-semibold text-base text-blue-100">
                                    <span className="mr-1">Learn more</span>
                                    <img src={arrowRightCircleBlue} className="w-5 h-5" alt="Arrow Right Circle Blue"/>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden blog__item">
                            <img src={blogFiveImg} className="w-full object-cover" alt="Blog 1"/>
                            <div className="pt-5 px-6 pb-9">
                                <h3 className="font-manrope-semibold text-grey-700">
                                    Lorem Ipsum is simply dummy text
                                </h3>
                                <p className="font-manrope text-grey-700 text-base mt-2.5 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.
                                </p>
                                <Link to="#" className="flex flex-row items-center font-manrope-semibold text-base text-blue-100">
                                    <span className="mr-1">Learn more</span>
                                    <img src={arrowRightCircleBlue} className="w-5 h-5" alt="Arrow Right Circle Blue"/>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden blog__item">
                            <img src={blogSixImg} className="w-full object-cover" alt="Blog 1"/>
                            <div className="pt-5 px-6 pb-9">
                                <h3 className="font-manrope-semibold text-grey-700">
                                    Lorem Ipsum is simply dummy text
                                </h3>
                                <p className="font-manrope text-grey-700 text-base mt-2.5 mb-5">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting industry.
                                </p>
                                <Link to="#" className="flex flex-row items-center font-manrope-semibold text-base text-blue-100">
                                    <span className="mr-1">Learn more</span>
                                    <img src={arrowRightCircleBlue} className="w-5 h-5" alt="Arrow Right Circle Blue"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Blog)
