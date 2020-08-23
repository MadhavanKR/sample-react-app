import React from 'react'
import Clearance from '../clearance/Clearance';
import Discount from '../discount/Discount';

function Content(props) {
    let display;
    switch (props.tabName.toLowerCase()) {
        case 'clearance':
            display = (<Clearance></Clearance>)
            break;
        case 'discount':
            display = (<Discount></Discount>)
            break;
        default:
            display = (<div>404 NOT FOUND</div>)
            break;
    }
    return (
        display
    )
}

export default Content
