import React from 'react';
import { Divider, Grid, Image, List } from 'semantic-ui-react';

/** A simple static component to render some text for the locations page. */
class Locations extends React.Component {
  render() {
    const frameStyle = { overflow: 'hidden', width: '100%', height: '200px', border: '0', allowFullScreen: '', loading: 'lazy', referrerPolicy: 'no-referrer-when-downgrade' };
    return (
      <Grid columns='four' divided>
        <Grid.Column width={6}>
          <Image src='https://manoa.hawaii.edu/food/wp-content/uploads/sites/37/2020/05/vendor_map3.jpg'
            style={{ height: '900px', width: '100%' }}/>
        </Grid.Column>
        <Grid.Column width={5}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4619426755426!2d-157.8235034853421!3d21.292755784089845!2m3!1f0!2f0!
              3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d907f22b0c3%3A0xb0c6bc5095d6fafa!2sA%20Place%20to%20Eat!5e0!3m2!1sen!2sus!4v1651896411521!5m2!1sen!2sus"
            style={frameStyle}>
          </iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4698788127757!2d-157.82586357695257!3d21.292441938881147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768
              !4f13.1!3m3!1m2!1s0x7c006d25043fb5f5%3A0x64d9531ae6340880!2sBetty&#39;s%20Burgers%20Honolulu!5e0!3m2!1sen!2sus!4v1651896466467!5m2!1sen!2sus"
            style={frameStyle}>
          </iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4732230778413!2d-157.82429918534217!3d21.29230968410521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!
              4f13.1!3m3!1m2!1s0x7c006d906547ec69%3A0xbb31488a22d14dd4!2sBlazin%20Steaks!5e0!3m2!1sen!2sus!4v1651896589363!5m2!1sen!2sus"
            style={frameStyle}>
          </iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11027.39927950123!2d-157.8235124622932!3d21.29760730121345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006da7f295aa3b%3A0x7d85121099db0a8b!2sMcDonald&#39;
              s!5e0!3m2!1sen!2sus!4v1651896658005!5m2!1sen!2sus"
            style={frameStyle}>
          </iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.0413372574367!2d-157.8127030853419!3d21.309382883515458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006da79429caed%3A0x8c7243f9de1d8d58!2sNishi%20Moncho
            %20Ramen!5e0!3m2!1sen!2sus!4v1651897496861!5m2!1sen!2sus"
            style={frameStyle}></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.0791656211377!2d-157.81235528534194!3d21.30788798356715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006da78576239f%3A0xeaa2bd6f667f1a59!2sIsland%20Subs%20
            %26%20Burgers!5e0!3m2!1sen!2sus!4v1651897589277!5m2!1sen!2sus"
            style={frameStyle}></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.0791656211377!2d-157.81235528534194!3d21.30788798356715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d09d61f85f5%3A0xf2e54e61bf3211c5!2sO-Bok%20korean
            %20Restaurant!5e0!3m2!1sen!2sus!4v1651897624625!5m2!1sen!2sus"
            style={frameStyle}></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.060378160032!2d-157.8164761769502!3d21.308630438294035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006da7aa0ad517%3A0x137fd87312bd72e2!2sWaipuna%20Sushi
            !5e0!3m2!1sen!2sus!4v1651897662322!5m2!1sen!2sus"
            style={frameStyle}></iframe>
        </Grid.Column>
        <Grid.Column width={2}>
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
              <Divider hidden />
            </List.Item>
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
          </List>
        </Grid.Column>
        <Divider hidden />
        <Grid.Column width={2}>
          <List>
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
                <List.Item><a href="https://content-service.sodexomyway.com/media/Bowlful%20Web%20Menu_tcm247-130361.pdf?url=https://uhm.sodexomyway.com/">Bowlful</a></List.Item>
                <List.Item><a href="https://uhm.sodexomyway.com/dining-near-me/jamba-juice">Jamba Juice</a></List.Item>
                <List.Item><a href="http://www.hawaii.edu/campuscenter/vendors/pizza.html">Pizza Hut</a></List.Item>
                <List.Item><a href="https://hawaiiflavours.catertrax.com/">Simply To Go</a></List.Item>
                <List.Item><a href="https://uhm.sodexomyway.com/dining-near-me/starbucks">Starbucks</a></List.Item>
                <List.Item><a href="https://restaurants.subway.com/united-states/hi/honolulu/2465-campus-rd">Subway</a></List.Item>
                <List.Item><a href="https://content-service.sodexomyway.com/media/Manoa%20Burger%20Shop%20Fall%202021_tcm247-127722.pdf?url=https://uhm.sodexomyway.com/">The Burger Shop</a></List.Item>
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
            <List.Item>
              <h2 className="ui green header">Nearby Campus</h2>
              <div className="ui divider"></div>
              <List.Content>
                <List.Header>1035 University Ave Ste 104, Honolulu, HI 96826</List.Header>
                <List.Item><a href="https://www.aplacetoeathi.com/">A Place to Eat</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>1025 University Ave, Honolulu, HI 96826</List.Header>
                <List.Item><a href="https://www.bettysburgershi.com/">Betty&apos;s Burgers</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>1010 University Ave, Honolulu, HI 96826</List.Header>
                <List.Item><a href="http://places.singleplatform.com/blazin-steaks-15/menu?ref=google">Blazin Steaks</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>2915 E Manoa Rd Honolulu, HI 96822</List.Header>
                <List.Item><a href="https://www.mcdonalds.com/us/en-us/full-menu.html">McDonald&apos;s</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>2851 E Manoa Rd # 103, Honolulu, HI 96822</List.Header>
                <List.Item><a href="https://www.nishimonchoramenhi.com/">Nishi Moncho Ramen</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>2752 Woodlawn Dr, Honolulu, HI 96822</List.Header>
                <List.Item><a href="https://www.yelp.com/biz/island-burgers-honolulu">Island Subs & Burgers</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>2756 Woodlawn Drive # 6-104 Honolulu, HI 96822</List.Header>
                <List.Item><a href="https://restaurant-33370.business.site/">O-Bok Korean Restaurant</a></List.Item>
              </List.Content>
              <Divider hidden />
              <List.Content>
                <List.Header>2801-B East Manoa Road Honolulu, HI 96822</List.Header>
                <List.Item><a href="https://waipunasushi.com/">Waipuna Sushi</a></List.Item>
              </List.Content>
              <Divider hidden />
            </List.Item>
          </List>
        </Grid.Column>
        <div className="ui divider"></div>
      </Grid>
    );
  }
}
export default Locations;
