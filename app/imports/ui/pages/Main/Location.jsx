import React from 'react';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Container, Grid, List, Image, Header, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Vendors } from '../../../api/vendor/Vendor';

/** A simple static component to render some text for the locations page. */
class Location extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  renderPage() {
    const frameStyle = { overflow: 'hidden', width: '100%', height: '200px', border: '0', allowFullScreen: '', loading: 'lazy', referrerPolicy: 'no-referrer-when-downgrade' };

    const groupByLocation = _.groupBy(this.props.vendors, 'location');
    console.log(groupByLocation);
    const locationNames = _.keys(groupByLocation);

    const locations = _.values(groupByLocation);
    locations.map((location) => groupByLocation[location]);
    console.log(locations);
    return (
      <div style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '30px' }}>
        <Grid columns={3} divided>
          <Grid.Column width={7}>
            <Header as='h2'>Map Key</Header>
            <List as='ol'>
              <List.Item><h4 className="ui yellow header">Rotating Truck</h4></List.Item>
              <List.Item><h4 className="ui red header">Auxiliary Services</h4></List.Item>
              <List.Item><h4 className="ui blue header">Student Affairs</h4></List.Item>
              <List.Item><h4 className="ui green header">Nearby Campus</h4></List.Item>
            </List>
            <Image src='/images/vendor_map3.jpg' alt='Map of vendor'></Image>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as='h2'>Off Campus</Header>
            <Grid.Row>
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
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={4}>
            {
              _.map(locations, (location, index) => (
                <Container>
                  <Header as='h3'>{locationNames[index]}</Header>
                  <List as='ul' link>
                    {
                      _.map(_.values(location), (vendor) => (<List.Item as='li'><Link key={vendor._id} to={`/vendor/${vendor._id}`}>{vendor.name}</Link></List.Item>))
                    }
                    <div className="ui hidden divider"></div>
                  </List>
                </Container>
              ))
            }
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

Location.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Vendors.vendorPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const vendors = Vendors.collection.find({}).fetch();
  return {
    vendors,
    ready,
  };
})(Location);
