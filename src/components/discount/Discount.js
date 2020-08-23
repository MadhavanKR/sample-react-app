import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import DiscountTable from './DiscountTable'
import DiscountTableV2 from './DiscountTableV2'

class Discount extends Component {

    constructor(props) {
        super(props)

        this.state = {      
            data: [
                {
                    "businessUnit": "Jewellery",
                    "availableCoupons": 11,
                    "redeemedCoupons": 1,
                    "coupons": [
                        {
                            "couponCode": "J-1",
                            "couponType": "Jewellery-Type-1",
                            "couponStatus": "REDEEMED"
                        },
                        {
                            "couponCode": "J-2",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-3",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-4",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-5",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-6",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-7",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-8",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-9",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-10",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-11",
                            "couponType": "Jewellery-Type-2",
                            "couponStatus": "AVAILABLE"
                        }
                    ]
                },
                {
                    "businessUnit": "Eyeware",
                    "availableCoupons": 20,
                    "redeemedCoupons": 1,
                    "coupons": [
                        {
                            "couponCode": "E-12345",
                            "couponType": "Eyeware-Type-1",
                            "couponStatus": "REDEEMED"
                        }
                    ]
                }
            ],
            activeIndex: 0,
            activeItem: 'default'
        }
    }

    handleItemClick = (e, { index }) => {this.setState({ activeIndex: index})}

    renderDiscountTypes = () => {
        return this.state.data.map((discountTypeObject, index) => {
            return (<Menu.Item
                name={discountTypeObject['businessUnit']}
                index={index}
                active={this.state.data[this.state.activeIndex]['businessUnit'] === discountTypeObject.businessUnit}
                onClick={this.handleItemClick}
            />)
        })
    }

    render() {
        return (
            <div>
                <Menu attached='top' tabular>
                    {this.renderDiscountTypes()}
                </Menu>
                <Segment attached='bottom'>
                    <DiscountTableV2 couponDetails={this.state.data[this.state.activeIndex]}></DiscountTableV2>
                </Segment>
            </div>
        )
    }
}

export default Discount
