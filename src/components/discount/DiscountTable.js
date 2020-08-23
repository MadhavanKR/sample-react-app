import React from 'react'
import { Pagination, Table } from 'semantic-ui-react'

const renderRows = (couponDetails) => {
    return (
        couponDetails['coupons'].map((coupon, index) => (
        coupon['couponStatus'] === 'REDEEMED'? <Table.Row negative>
            <Table.Cell>{coupon['couponCode']}</Table.Cell>
            <Table.Cell>{coupon['couponType']}</Table.Cell>
            <Table.Cell>{coupon['couponStatus']}</Table.Cell>
            <Table.Cell>share</Table.Cell>
        </Table.Row>: <Table.Row positive>
            <Table.Cell>{coupon['couponCode']}</Table.Cell>
            <Table.Cell>{coupon['couponType']}</Table.Cell>
            <Table.Cell>{coupon['couponStatus']}</Table.Cell>
            <Table.Cell>share</Table.Cell>
        </Table.Row>)
    ))
}

function DiscountTable(props) {
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
                {renderRows(props.couponDetails)}
            </Table.Body>

            <Table.Footer>
                <Pagination activePage={1} totalPages={props.couponDetails['coupons'].length/10}></Pagination>
            </Table.Footer>
        </Table>
    )
}

export default DiscountTable
