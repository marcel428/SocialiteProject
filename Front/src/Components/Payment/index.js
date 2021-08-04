import React, { Component } from "react";
import { connect } from 'react-redux';

import leftIcon from '../../Assets/images/arrow-left.svg';
import payment from '../../Assets/images/payment.svg';
import masterCardIcon from "../../Assets/images/mastercard.svg";
import masterCardLargeIcon from '../../Assets/images/mastercard-large.svg';
import visaCardIcon from "../../Assets/images/visacard.svg";
import visaCardLargeIcon from '../../Assets/images/visacard-large.svg';
import checkIcon from '../../Assets/images/check.svg';

import "./Payment.scss";
import PaymentMethod from "../PaymentMethod";

class Payment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="min-h-screen bg-primary payment">
                <div className="absolute right-0 payment__effect payment__effect-first" />
                <div className="absolute right-0 payment__effect payment__effect-second" />
                <div className="container flex flex-col mx-auto z-20">
                    <div className="relative bg-white m-4 md:mx-0 rounded-custom payment__section">
                        <img src={leftIcon} className="absolute payment__section_left" alt="Back Icon"/>
                        <div className="flex flex-col md:flex-row items-center justify-between pb-9">
                            <h1 className="md:max-w-xs my-8 md:my-0 font-manrope-semibold text-grey-700 text-center md:text-left">Manage Payment Method</h1>
                            <img src={payment} className="mr-0 md:mr-24" alt="Payment Image"/>
                        </div>
                        <hr />
                        <p className="font-manrope-semibold text-xl text-primary mt-9 mb-6">Payment Method</p>
                        <PaymentMethod />
                    </div>
                    <div className="bg-white my-6 rounded-custom payment__section">
                        <h2 className="font-manrope-medium text-grey-700 text-3xl">Add payment method</h2>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-2">
                                <p className="font-manrope-semibold text-base text-grey-700 mb-3.5">Credit or debit card</p>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Card number"
                                        className="font-manrope px-6 py-4 placeholder-grey-700 placeholder-opacity-40 bg-grey-100 rounded-full text-grey-700 text-base border-0 outline-none w-full"
                                    />
                                    <div className="absolute flex flex-row top-3.5 right-7">
                                        <img src={visaCardIcon} className="mr-3.5" alt="Visa Card"/>
                                        <img src={masterCardIcon} alt="Master Card"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-manrope-semibold text-base text-grey-700 mb-3.5">Expire Date</p>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="font-manrope px-6 py-4 placeholder-grey-700 placeholder-opacity-40 bg-grey-100 rounded-full text-grey-700 text-base border-0 outline-none w-full"
                                />
                            </div>
                            <div>
                                <p className="font-manrope-semibold text-base text-grey-700 mb-3.5">Security code</p>
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    className="font-manrope px-6 py-4 placeholder-grey-700 placeholder-opacity-40 bg-grey-100 rounded-full text-grey-700 text-base border-0 outline-none w-full"
                                />
                            </div>
                        </div>
                        <button
                            className="w-72 font-manrope-semibold text-base text-white bg-grey-700 py-4 rounded-full"
                            type="button"
                            onClick={this.props.closeAccountSubscriptionModal}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Payment)
