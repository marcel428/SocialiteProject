import React, {Component, Fragment} from "react";
import { connect } from 'react-redux';
import {Dialog, Transition} from "@headlessui/react";

import PricePlan from "../PricePlan";

import arrowLeft from '../../Assets/images/arrow-left.svg';

import "./ChoosePlan.scss";

class ChoosePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosePlanModeOpen: false,
        };
    }

    closeChoosePlanModal = () => {
        this.props.closeChoosePlan();
    }

    selectPlanMode = (mode) => {
        this.props.selectPlan(mode);
    }

    componentDidMount() {
        this.setState({
            choosePlanModeOpen: this.props.isOpen,
        })
    }

    render() {
        return (
            <>
                <Transition appear show={this.state.choosePlanModeOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-20 overflow-y-auto"
                        onClose={this.closeChoosePlanModal}
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
                                <div className="relative inline-block w-full max-w-7xl my-4 py-9 px-0 md:pl-16 md:pr-14 overflow-hidden text-left align-middle transition-all transform bg-white rounded-custom chooseplan">
                                    <div
                                        className="absolute cursor-pointer chooseplan__back"
                                        onClick={this.closeChoosePlanModal}
                                    >
                                        <img src={arrowLeft} alt="Left Icon"/>
                                    </div>
                                    <div className="flex flex-col lg:flex-row items-center justify-between">
                                        <div className="mb-8 lg:mb-0 px-4 md:px-0 chooseplan__title">
                                            <h1 className="font-manrope-semibold text-grey-700 text-5xl text-center lg:text-left">Choose a plan!</h1>
                                            <p className="font-manrope-semibold text-grey-700 text-xl leading-8 text-center lg:text-left">Pay for the year at $135 & </p>
                                            <p className="font-manrope-semibold text-green text-xl leading-8 text-center lg:text-left">Save Up To 25%</p>
                                        </div>
                                        <PricePlan selectPlan={(e) => this.selectPlanMode(e)} />
                                    </div>
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

export default connect(mapStateToProps, null)(ChoosePlan)
