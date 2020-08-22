import React, { Component } from 'react'
import ClearanceCard from "./ClearanceCard"
import { Card, Statistic } from "semantic-ui-react"

class Clearance extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                "employeeDetails": {
                    "EmployeeLogin": "0123458",
                    "Resignation_Date": "6/25/2020",
                    "FirstName": "empFirstName",
                    "Relieving_Date1": "8/24/2020",
                    "Process": "Offboarding",
                    "LastName": "empLastName"
                },
                "clearances": {
                    "hr": [
                        {
                            "clearanceName": "HR Clearnce 1",
                            "resolver": "HR Resolver (12345678)",
                            "resolveStatus": "Pending"
                        }
                    ],
                    "department": [
                        {
                            "clearanceName": "Department Clearance 1",
                            "resolver": "Department Resolver (12345678)",
                            "resolveStatus": "NA"
                        }
                    ],
                    "finance": [
                        {
                            "clearanceName": "Finance Clearance 1",
                            "resolver": "Finance Resolver (12345678)",
                            "resolveStatus": "Pending"
                        }
                    ]
                },
                "totalClearances": 18,
                "pendingClearances": 4,
                "completedClearances": 14
            }
        }

    }


    listCards = () => {
        return Object.keys(this.state.data.clearances).map((clearanceType) =>
            <ClearanceCard clearanceType={clearanceType} clearanceList={this.state.data.clearances[clearanceType]}></ClearanceCard>
        )
    }

    render() {
        return (
            <div>
                <Card.Group itemsPerRow={1}>
                    <Card centered>
                        <Card.Content>
                            <Card.Header>
                                <h1>CLEARANCE OVERVIEW</h1>
                            </Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Statistic label='Total Clearances' value={this.state.data.totalClearances} />
                            <Statistic label='Pending' value={this.state.data.pendingClearances} color='red' />
                            <Statistic label='Completed' value={this.state.data.completedClearances} color='green' />
                        </Card.Content>
                    </Card>
                </Card.Group>
                <Card.Group itemsPerRow={2}>
                    {this.listCards()}
                </Card.Group>
            </div>
        )
    }
}

export default Clearance

