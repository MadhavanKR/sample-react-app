import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Content from './Content'

class AppMenu extends Component {
  state = { activeItem: 'Clearance' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
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
              name='companies'
              active={activeItem === 'companies'}
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