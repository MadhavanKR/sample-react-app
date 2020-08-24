import React, { Component } from 'react'
import { Image, Item, Card } from 'semantic-ui-react'
import wayne_enterprises from '../../images/wayne_enterprise.jpg'
import arkham from '../../images/arkham.jpg'
import daily_planet from '../../images/daily_planet.webp'
import link from '../../images/link.png'

class Links extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                "Wayne Enterprises": "https://en.wikipedia.org/wiki/Wayne_Enterprises",
                "Arkham": "https://en.wikipedia.org/wiki/Batman:_Arkham_Asylum",
                "Daily Planet": "lhttps://en.wikipedia.org/wiki/Daily_Planet"
            }
        }
    }

    resolveLinkImg = (linkName) => {
        switch (linkName.toLowerCase()) {
            case 'wayne enterprises': return wayne_enterprises
            case 'arkham': return arkham
            case 'daily planet': return daily_planet
            default: return link
        }
    }

    renderLinks = () => {
        return (
            <Item.Group>
                {
                    Object.keys(this.state.data).map(
                        (linkName) => {
                            {/* console.log(linkName + " " + this.resolveLinkImg(linkName) + " " + this.state.data[linkName]) */}
                            return (
                                <Item>
                                    <Item.Image size='tiny' src={this.resolveLinkImg(linkName)} />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header as='a' href={this.state.data[linkName]}>{linkName}</Item.Header>
                                        <Item.Description>{linkName}</Item.Description>
                                    </Item.Content>
                                </Item>
                            )
                        }
                    )
                }
            </Item.Group>
        )
    }

    render() {
        return (
            <div>
                 <Card.Group itemsPerRow={1}>
                    <Card centered>
                        <Card.Content>
                            <Card.Header>
                                <h1>EXTERNAL LINKS</h1>
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </Card.Group>
                {this.renderLinks()}
            </div>
        )
    }
}

export default Links
