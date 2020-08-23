import React, { Component } from 'react'
import { Responsive, Input, Menu, Segment, Statistic, Header, Dropdown } from 'semantic-ui-react'
import DiscountTableV2 from './DiscountTableV2'

class Discount extends Component {

    constructor(props) {
        super(props)

        this.state = {      
            data: [
                {
                    "businessUnit": "Jewellery",
                    "availableCoupons": 10,
                    "redeemedCoupons": 1,
                    "coupons": [
                        {
                            "couponCode": "J-1",
                            "couponType": "JT-1",
                            "couponStatus": "REDEEMED"
                        },
                        {
                            "couponCode": "J-2",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-3",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-4",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-5",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-6",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-7",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-8",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-9",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-10",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-11",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        },
                        {
                            "couponCode": "J-12",
                            "couponType": "JT-2",
                            "couponStatus": "AVAILABLE"
                        }
                    ]
                },
                {
                    "businessUnit": "Eyeware",
                    "availableCoupons": 0,
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
                <Header size="huge">DISCOUNT COUPONS</Header>
                <Menu attached='top' tabular>
                    {this.renderDiscountTypes()}
                </Menu>
                <Segment attached='bottom'>
                    <Statistic label='Available' value={this.state.data[this.state.activeIndex]['availableCoupons']} color='green'/>
                    <Statistic label='Redeemed' value={this.state.data[this.state.activeIndex]['redeemedCoupons']} color='red'/>
                    <DiscountTableV2 couponDetails={this.state.data[this.state.activeIndex]}></DiscountTableV2>
                </Segment>
            </div>
        )
    }
}

export default Discount
