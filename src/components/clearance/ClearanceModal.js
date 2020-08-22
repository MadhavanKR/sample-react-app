import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ClearanceTable from './ClearanceTable'

function ClearanceModal(props) {

    const [open, setOpen] = React.useState(false)
    return (
        <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}
            trigger={<Button fluid circular > Details </Button>}>

            <Modal.Header>
                <Header fluid>{props.clearanceType} Clearances </Header>
            </Modal.Header>

            <Modal.Content>
                <ClearanceTable clearanceList={props.clearanceList}></ClearanceTable>
            </Modal.Content>

            <Modal.Actions>
                <Button content='Ok' color='green' onClick={() => setOpen(false)}/>
            </Modal.Actions>
        </Modal>
    )
}

export default ClearanceModal

