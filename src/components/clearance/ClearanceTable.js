import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

const renderTableRows = (clearanceList) => {
    return (
        <Table.Body>
            {
                clearanceList.map(
                    (clearance) => {
                        return (<Table.Row>
                            {
                                Object.keys(clearance).forEach(
                                    (sampleKey) => {
                                        console.log(sampleKey)
                                        return <Table.Cell>{sampleKey}</Table.Cell>
                                    }
                                )
                            }
                        </Table.Row>
                        )
                    }
                )
            }
        </Table.Body>
    )
}

function ClearanceTable(props) {
    return (
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Clearance</Table.HeaderCell>
                    <Table.HeaderCell>Resolver</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    props.clearanceList.map( (clearance, index) => (
                        <Table.Row key={index}>
                            {
                                Object.keys(clearance).map((key, index) => (
                                    <Table.Cell>{clearance[key]}</Table.Cell>
                                ))
                            }
                        </Table.Row>
                    ) )
                }
            </Table.Body>
        </Table>
    )
}

export default ClearanceTable
