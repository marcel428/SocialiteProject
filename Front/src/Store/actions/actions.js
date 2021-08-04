import {
    SAVE_AUTH_INFO,
    CHANGE_MEMBERSHIP,
    CHANGE_BALANCE
} from "../constants";

export function saveAuthInfo(user,token) {
    if( token === "undefined" || typeof token === "undefined"){
        token = false
    }

    return {
        type: SAVE_AUTH_INFO,
        payload: {user,token}
    }
}

export function changeMembership(membership) {
    if( membership === "undefined" || typeof membership === "undefined"){
        membership = false
    }

    return {
        type: CHANGE_MEMBERSHIP,
        payload: membership
    }
}

export function changeBalance(balance) {
    if( balance === "undefined" || typeof balance === "undefined"){
        balance = false
    }

    return {
        type: CHANGE_BALANCE,
        payload: balance
    }
}
