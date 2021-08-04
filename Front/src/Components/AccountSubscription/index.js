import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';
import {Dialog, Transition} from "@headlessui/react";

import closeIcon from '../../Assets/images/close.svg';
import rightIcon from '../../Assets/images/arrow-right.svg';
import masterCardIcon from '../../Assets/images/mastercard.svg';
import visaCardIcon from '../../Assets/images/visacard.svg';
import paypalIcon from '../../Assets/images/paypal.svg';

import "./AccountSubscription.scss";

class AccountSubscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            paymentMethod: true,
            planMode: 'yearly',
        };
    }

    closeAccountSubscriptionModal = () => {
        this.props.closeAccountSubscriptionModal();
    }

    cardRegister = () => {
        this.setState({
            paymentMethod: false,
        });
    }

    componentDidMount() {
        this.setState({
            isOpen: this.props.isOpen,
            planMode: this.props.planMode,
        })
    }

    render() {
        return (
            <>
                <Transition appear show={this.state.isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-20 overflow-y-auto"
                        onClose={this.closeAccountSubscriptionModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                            >
                          &#8203;
                        </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="relative inline-block w-full my-4 pt-8 pb-10 px-10 text-left overflow-hidden align-middle transition-all transform bg-white rounded-custom accountsubscription">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-manrope-medium text-3xl text-gray-700 accountsubscription__title"
                                    >
                                        {
                                            this.state.paymentMethod ? <>Pay with</>
                                                : this.state.planMode === 'yearly' ? <>Yearly Subscription</>
                                                    : <>Yearly Subscription</>
                                        }
                                    </Dialog.Title>
                                    <div
                                        className="absolute cursor-pointer accountsubscription__close"
                                        onClick={this.closeAccountSubscriptionModal}
                                    >
                                        <img src={closeIcon} alt="Close Icon"/>
                                    </div>
                                    <p className="w-72 font-manrope-medium text-primary text-base mt-2.5 mb-11">
                                        {
                                            this.state.planMode === 'yearly' ?
                                                <>You will charged $135 USD every year Starting today.</>
                                                :
                                                <>You will charged $14.99 USD every month Starting today.</>
                                        }
                                    </p>
                                    {
                                        this.state.paymentMethod ?
                                            <>
                                                <button
                                                    type="button"
                                                    className="relative flex flex-row items-center justify-start w-full pl-6 pr-8 py-4 mb-8 font-manrope-medium text-base text-grey-700 bg-grey-100 border border-transparent rounded-full"
                                                    onClick={this.cardRegister}
                                                >
                                                    <img src={masterCardIcon} alt="Master Card Icon"/>
                                                    <span className="ml-3">Credit card or Debit card</span>
                                                    <img src={rightIcon} className="absolute right-8" alt="Right Icon"/>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="relative flex flex-row items-center justify-start w-full pl-6 pr-8 py-4 mb-9 font-manrope-medium text-base text-grey-700 bg-grey-100 border border-transparent rounded-full"
                                                >
                                                    <img src={paypalIcon} alt="Paypal Icon"/>
                                                    <span className="ml-3">Paypal</span>
                                                    <img src={rightIcon} className="absolute right-8" alt="Right Icon"/>
                                                </button>
                                            </>
                                            :
                                            <>
                                                <div className="grid grid-cold-2 gap-x-4 gap-y-8">
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
                                                <p className="font-manrope-semibold text-green text-base text-center mt-12 mb-10">Add a coupon to enjoy 30% discount</p>
                                                <button
                                                    className="w-full font-manrope-semibold text-base text-white bg-grey-700 py-4 rounded-full"
                                                    type="button"
                                                >
                                                    Add payment method
                                                </button>
                                            </>
                                    }
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
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

export default connect(mapStateToProps, null)(AccountSubscription)
