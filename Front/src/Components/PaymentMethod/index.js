import React, { Component } from "react";
import { connect } from 'react-redux';

import masterCardLargeIcon from '../../Assets/images/mastercard-large.svg';
import visaCardLargeIcon from '../../Assets/images/visacard-large.svg';
import checkIcon from '../../Assets/images/check.svg';

import "./PaymentMethod.scss";

class PaymentMethod extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="grid grid-cols-2 gap-x-11">
                    <div className="flex flex-row items-center justify-between paymentmethod">
                        <div className="flex flex-row">
                            <img src={masterCardLargeIcon} alt="Master Card"/>
                            <span className="font-manrope-medium text-xl text-grey-700 ml-6">Credit card ***** ***** ***** 3234</span>
                        </div>
                        <img src={checkIcon} alt="Check Icon"/>
                    </div>
                    <div className="flex flex-row items-center justify-between paymentmethod">
                        <div className="flex flex-row">
                            <img src={visaCardLargeIcon} alt="Visa Card"/>
                            <span className="font-manrope-medium text-xl text-grey-700 ml-6">Visa ***** ***** ***** 3234</span>
                        </div>
                        <img src={checkIcon} alt="Check Icon"/>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(PaymentMethod)
