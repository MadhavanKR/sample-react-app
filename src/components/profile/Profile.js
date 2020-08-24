import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: {
                "name": "Batman",
                "level": "Founder",
                "email": "batman@JL.com",
                "org": "Justice Legaue",
                "doj": "01/01/1950",
                "costCenter": "JL001",
                "department": "Management",
                "dob": "01/01/1950"
            }
        }
    }


    render() {
        return (
            <div>
                <Card.Group itemsPerRow={1}>
                    <Card centered>
                        <Card.Content>
                            <Card.Header>
                                <h1>PROFILE</h1>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </Card.Group>

                <Card centered>
                    <Image src='https://i.etsystatic.com/15492164/r/il/40fda1/1537469239/il_570xN.1537469239_iu8f.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.state.data.doj}</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in {this.state.data.doj}</span>
                        </Card.Meta>
                        <Card.Description>
                            {this.state.data.name} is at designation {this.state.data.level} in {this.state.data.department} team.
              </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='birthday' />
                            {this.state.data.dob}
                        </a>
                    </Card.Content>
                </Card>
            </div>


        )
    }
}

export default Profile
