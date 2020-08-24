import React from 'react'
import Clearance from '../clearance/Clearance';
import Discount from '../discount/Discount';
import Links from '../links/Links';
import Profile from '../profile/Profile';

function Content(props) {
    let display;
    switch (props.tabName.toLowerCase()) {
        case 'clearance':
            display = (<Clearance></Clearance>)
            break;
        case 'discount':
            display = (<Discount></Discount>)
            break;
        case 'profile':
            display = (<Profile></Profile>)
            break;
        case 'links':
            display = (<Links></Links>)
            break;
        default:
            display = (<div className="container">404 NOT FOUND</div>)
            break;
    }
    return (
        display
    )
}

export default Content
