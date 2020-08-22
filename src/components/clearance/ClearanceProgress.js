import React from 'react'
import { Progress } from 'semantic-ui-react'

function ClearanceProgress(props) {
    return (
        <Progress value={props.completedClearances} total={props.totalClearances} progress='ratio' color='green' size="medium" />
    )
}

export default ClearanceProgress
