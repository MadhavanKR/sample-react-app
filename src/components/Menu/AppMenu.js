import React, { Component } from 'react'
import { Grid, Menu, Segment, Header, Image } from 'semantic-ui-react'
import Content from './Content'
import dc from '../../images/dc.jpg'
class AppMenu extends Component {
  state = { activeItem: 'Profile' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Segment>
            <Image bordered centered circular size='small'src={dc} >
            </Image>
            <Header>H.R. Portal </Header>
          </Segment>
          <Menu fluid vertical tabular >
            <Menu.Item
              name='Profile'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Clearance'
              active={activeItem === 'Clearance'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Discount'
              active={activeItem === 'Discount'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment>
            <Content tabName={this.state.activeItem}></Content>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default AppMenu