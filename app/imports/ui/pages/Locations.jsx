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
                <List.Header>1. Business Administration</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/the-bean-counter//">The Bean Counter</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>2. Saunders</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/da-spot/">Da Spot</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>3. Paradise Palms Café</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/dunkin/">Dunkin Donuts</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/holoholo-grill/">Holoholo Grill</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/ll-hawaiian-barbecue/">L&L Barbecue</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/lasoon/">Lasoon</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/le-crepe-cafe/">Le Crepe Cafe</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/panda-express/">Panda Express</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>9. Krauss</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/ono-seafood/">Ono Seafood</a></List.Item>
                <List.Item><a href="https://manoa.hawaii.edu/food/kamitoku-ramen/">Kamitoku Ramen</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>11. POST</List.Header>
                <List.Item><a href="https://manoa.hawaii.edu/food/kamitoku-ramen/">Kamitoku Ramen</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>14. Athletic Complex</List.Header>
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
                  <List.Header>4. Korean Studies</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Friday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>5. Architecture</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Thursday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>8. Kuykendall</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Wednesday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>10. Kennedy Theatre</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Monday)</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>12. POST 2</List.Header>
                  <List.Item><a href="https://manoa.hawaii.edu/food/hot-tacos/">Hot Tacos (Tuesday)</a></List.Item>
                </List.Content>
                <Divider hidden />
              </List.Item>
              <List.Item>
                <h2 className="ui blue header">Student Affairs</h2>
                <div className="ui divider"></div>
                <List.Content>
                  <List.Header>6. Hemenway</List.Header>
                  <List.Item>Ba-Le</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>7. Campus Center</List.Header>
                  <List.Item>Food Court</List.Item>
                  <List.Item>Jamba Juice</List.Item>
                  <List.Item>Pizza Hut</List.Item>
                  <List.Item>Simply To Go</List.Item>
                  <List.Item>Stir Fresh</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>13. Gateway House</List.Header>
                  <List.Item>Gateway Cafe</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>15. Hale Aloha 2</List.Header>
                  <List.Item>Hale Aloha Cafe</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>16. Hale Noelani</List.Header>
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
