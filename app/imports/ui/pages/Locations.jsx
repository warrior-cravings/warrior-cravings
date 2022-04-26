import React from 'react';
import { Container, Divider, Grid, Image, List } from 'semantic-ui-react';

/** A simple static component to render some text for the locations page. */
class Locations extends React.Component {
  render() {
    return (
      <Container>
        <Grid columns='three' divided>
          <Grid.Column width={9}>
            <Image src='https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/vendor_map3.jpg' fill centered />
          </Grid.Column>
          <Grid.Column width={3}>
            <List>
              <h2 className="ui red header">Auxillary Services</h2>
              <div className="ui divider"></div>
              <List.Content>
                <List.Header>Business Administration</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/the-bean-counter//">The Bean Counter</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>Saunders</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/da-spot/">Da Spot</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>Paradise Palms Café</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/dunkin/">Dunkin Donuts</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/holoholo-grill/">Holoholo Grill</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/ll-hawaiian-barbecue/">L&L Barbecue</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/lasoon/">Lasoon</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/le-crepe-cafe/">Le Crepe Cafe</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/panda-express/">Panda Express</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>Krauss</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/ono-seafood/">Ono Seafood</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/kamitoku-ramen/">Kamitoku Ramen</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>POST</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/kamitoku-ramen/">Kamitoku Ramen</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>Athletic Complex</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/ll-hawaiian-barbecue/">L&L Barbecue</a></List.Item>
              </List.Content>
            </List>
          </Grid.Column>
          <Divider hidden />
          <Grid.Column width={3}>
            <List>
              <List.Item>
                <h2 className="ui yellow header">Rotating Truck</h2>
                <div className="ui divider"></div>
                <List.Content>
                  <List.Header>Korean Studies</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/sistah/">Sistah Truck (Thursday)</a></List.Item>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Friday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>Architecture</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/sistah/">Sistah Truck (Wednesday)</a></List.Item>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Thursday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>Kuykendall</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/sistah/">Sistah Truck (Tuesday)</a></List.Item>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Wednesday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>Kennedy Theatre</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/sistah/">Sistah Truck (Friday)</a></List.Item>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Monday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>POST 2</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/sistah/">Sistah Truck (Monday)</a></List.Item>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Tuesday)</a></List.Item>
                </List.Content>
                <Divider hidden />
              </List.Item>
              <List.Item>
                <h2 className="ui blue header">Student Affairs</h2>
                <div className="ui divider"></div>
                <List.Content>
                  <List.Header>Hemenway</List.Header>
                  <List.Item>Ba-Le</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>Campus Center</List.Header>
                  <List.Item>Food Court</List.Item>
                  <List.Item>Jamba Juice</List.Item>
                  <List.Item>Pizza Hut</List.Item>
                  <List.Item>Simply To Go</List.Item>
                  <List.Item>Stir Fresh</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>Gateway House</List.Header>
                  <List.Item>Gateway Cafe</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>Hale Aloha 2</List.Header>
                  <List.Item>Hale Aloha Cafe</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>Hale Noelani</List.Header>
                  <List.Item>The Market</List.Item>
                </List.Content>
                <Divider hidden />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
        <div className="ui divider"></div>
      </Container>
    );
  }
}
export default Locations;
