import React from 'react'
import ClearanceProgress from './ClearanceProgress'
import ClearanceModal from './ClearanceModal'
import { Button, Card, Image } from 'semantic-ui-react'

const getCompletedClearances = (clearances) => {
    let count = 0
    clearances.forEach((clearance) => {
        if (clearance['resolveStatus'] === 'Pending') {
            count = count + 1
        }
    })
    return (clearances.length - count)
}

const getTotalClearances = (clearances) => {
    return (clearances.length)
}

const getImg = (clearanceType) => {
    if(clearanceType === 'hr') {
        return 'https://static.thenounproject.com/png/199571-200.png'
    } else if(clearanceType === 'finance') {
        return 'https://cdn3.iconfinder.com/data/icons/business-vol-14/100/Artboard_2-512.png'
    } else if(clearanceType === 'department') {
        return 'https://cdn.iconscout.com/icon/premium/png-256-thumb/department-6-580992.png'
    } else {
        return 'https://cdn0.iconfinder.com/data/icons/warehouse-cargo-shipping/64/621_cargo-shipping-customs-clearance-airport-512.png'
    }
}

function ClearanceCard(props) {
    return (
        <Card centered>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={getImg(props.clearanceType)}
                />
                <Card.Header > {props.clearanceType.toUpperCase()} </Card.Header>
                <Card.Description>
                    Clearances that are given by {props.clearanceType} Team
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div>
                    <ClearanceProgress completedClearances={getCompletedClearances(props.clearanceList)} totalClearances={getTotalClearances(props.clearanceList)} />
                    <ClearanceModal clearanceType={props.clearanceType} clearanceList={props.clearanceList}></ClearanceModal>
                </div>
            </Card.Content>
        </Card>
    )
}

export default ClearanceCard
