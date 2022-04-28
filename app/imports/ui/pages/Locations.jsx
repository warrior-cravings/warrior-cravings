import React from 'react';
import { Container, Divider, Dropdown, Grid, Image, List } from 'semantic-ui-react';

const options = [
  { text: 'Dessert', value: 'dessert' },
  { text: 'Poultry', value: 'poultry' },
  { text: 'Beef', value: 'beef' },
  { text: 'Pork', value: 'pork' },
  { text: 'Fish', value: 'fish' },
  { text: 'Seafood', value: 'seafood' },
  { text: 'Sandwich', value: 'sandwich' },
  { text: 'Burgers', value: 'burgers' },
  { text: 'Salad', value: 'salad' },
  { text: 'Drink', value: 'drink' },
  { text: 'Healthy', value: 'healthy' },
  { text: 'Vegan', value: 'vegan' },
];

// blank waiting object to use to map stuff
let selected_options = [
];

/** A simple static component to render some text for the locations page. */
class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      selected: [],
    };
  }

  render() {
    return (
      <Container>
        <div>
          <Dropdown
            text='What Are You Craving?'
            multiple

            // hide the labels
            renderLabel={() => false}

            onChange={(event, data) => {
              selected_options = data.value // e.g. [ 'css', 'angular' ]
                .map(item => {
                  // e.g. 'css' --> { text: 'CSS', value: 'css' }
                  // eslint-disable-next-line no-shadow
                  const opt = options.find(opt => opt.value === item);

                  // create a new option (like the ones in the options object, but with a custom onClick)
                  return {
                    text: `${opt.text} (Selected)`,
                    value: `${opt.value}-disabled`,

                    // used to remove this item later in onClick
                    filtervalue: opt.value,

                    // unselect an option
                    // eslint-disable-next-line no-shadow
                    onClick: (event) => {
                      // prevent blurring
                      event.stopPropagation();
                      event.nativeEvent.stopImmediatePropagation();

                      // remove the option from the selected_options list
                      selected_options = selected_options
                        .filter(disOpt => disOpt.filtervalue !== opt.value);

                      // remove the option from the selected state
                      this.setState({
                        selected: data.value
                          .filter(val => val !== opt.value),
                      });
                    },
                  };
                });

              // set selected values
              this.setState({
                selected: data.value,
              });
            }}

            value={this.state.selected}

            options={
              // combine options and the selected options
              options.concat(selected_options)
                // this sort is really important -- it's what keeps the item you insert in the same place as the item that was "removed" by Semantic
                .sort((a, b) => {
                  const aText = a.text.toLowerCase();
                  const bText = b.text.toLowerCase();

                  if (aText > bText) return 1;
                  if (aText < bText) return -1;
                  return 0;
                })
            }
          />
        </div>
        <Grid columns='three' divided>
          <Grid.Column width={9}>
            <Image src='https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/vendor_map3.jpg' centered />
          </Grid.Column>
          <Grid.Column width={3}>
            <List>
              <List.Item>
                <h2 className="ui red header">Auxiliary Services</h2>
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
              </List.Item>
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
                  <List.Item><a href="https://uhm.sodexomyway.com/dining-near-me/ba-le">Ba-Le</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>7. Campus Center</List.Header>
                  <List.Item>Food Court</List.Item>
                  <List.Item><a href="https://uhm.sodexomyway.com/dining-near-me/jamba-juice">Jamba Juice</a></List.Item>
                  <List.Item><a href="http://www.hawaii.edu/campuscenter/vendors/pizza.html">Pizza Hut</a></List.Item>
                  <List.Item>Simply To-Go</List.Item>
                  <List.Item>Stir Fresh</List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>13. Gateway House</List.Header>
                  <List.Item><a href="https://uhm.sodexomyway.com/dining-near-me/gateway-cafe">Gateway Cafe</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>15. Hale Aloha 2</List.Header>
                  <List.Item><a href="https://uhm.sodexomyway.com/dining-near-me/hale-aloha-cafe">Hale Aloha Cafe</a></List.Item>
                </List.Content>
                <Divider hidden />
                <List.Content>
                  <List.Header>16. Hale Noelani</List.Header>
                  <List.Item><a href="https://uhm.sodexomyway.com/dining-near-me/the-market">The Market</a></List.Item>
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
