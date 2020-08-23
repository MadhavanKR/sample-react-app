import React, { Component } from 'react'
import { Pagination, Table } from 'semantic-ui-react'

class DiscountTableV2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activePage: 1
        }
    }

    renderRows = (couponDetails) => {
        return (
            couponDetails['coupons'].map((coupon, index) => {
                if (index >= (this.state.activePage - 1) * 5 && index < (this.state.activePage) * 5) {
                    console.log("am i here??")
                    return coupon['couponStatus'] === 'REDEEMED' ? <Table.Row negative>
                        <Table.Cell>{coupon['couponCode']}</Table.Cell>
                        <Table.Cell>{coupon['couponType']}</Table.Cell>
                        <Table.Cell>{coupon['couponStatus']}</Table.Cell>
                        <Table.Cell>share</Table.Cell>
                    </Table.Row> : <Table.Row positive>
                            <Table.Cell>{coupon['couponCode']}</Table.Cell>
                            <Table.Cell>{coupon['couponType']}</Table.Cell>
                            <Table.Cell>{coupon['couponStatus']}</Table.Cell>
                            <Table.Cell>share</Table.Cell>
                        </Table.Row>
                }
            })
        )
    }

    pageChangeHandler = (e, { activePage }) => {
        console.log("current page: " + this.state.activePage +" new page: " + activePage)
        this.setState({ activePage: Math.ceil(activePage)})
    }

    render() {
        return (
            <Table celled sortable=''>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Coupon Code</Table.HeaderCell>
                        <Table.HeaderCell>Coupon Type</Table.HeaderCell>
                        <Table.HeaderCell>Coupon Status</Table.HeaderCell>
                        <Table.HeaderCell>Share</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.renderRows(this.props.couponDetails)}
                </Table.Body>

                <Table.Footer>
                    <Pagination activePage={this.state.activePage} totalPages={this.props.couponDetails['coupons'].length / 5} onPageChange={this.pageChangeHandler} ></Pagination>
                </Table.Footer>
            </Table>
        )
    }
}

export default DiscountTableV2
