import React from 'react'
import Clearance from '../clearance/Clearance';

function Content(props) {
    let display;
    switch (props.tabName.toLowerCase()) {
        case 'clearance':
            display = (<Clearance></Clearance>)
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
