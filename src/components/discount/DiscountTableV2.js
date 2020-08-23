import React, { Component } from 'react'
import { Pagination, Table, Icon } from 'semantic-ui-react'

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
                if (index >= (this.state.activePage - 1) * 10 && index < (this.state.activePage) * 10) {
                    console.log("am i here??")
                    return coupon['couponStatus'] === 'REDEEMED' ? <Table.Row negative>
                        <Table.Cell>{coupon['couponCode'].trim()}</Table.Cell>
                        <Table.Cell >{coupon['couponType'].trim()}</Table.Cell>
                        <Table.Cell>{coupon['couponStatus'].trim()}</Table.Cell>
                        <Table.Cell>share</Table.Cell>
                    </Table.Row> : <Table.Row positive>
                            <Table.Cell>{coupon['couponCode'].trim()}</Table.Cell>
                            <Table.Cell>{coupon['couponType'].trim()}</Table.Cell>
                            <Table.Cell>{coupon['couponStatus'].trim()}</Table.Cell>
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
            <div>
            <Table celled padded>
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
            </Table>
            <Pagination ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }} 
            activePage={this.state.activePage} totalPages={this.props.couponDetails['coupons'].length / 10} onPageChange={this.pageChangeHandler} ></Pagination>
            </div>
            
        )
    }
}

export default DiscountTableV2
