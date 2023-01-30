import React from 'react';
import { Container, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';
import profilePic from './assets/images/logan_picture_uc.jpg';
import './Home.css';

function Home() {
  return (
    <React.Fragment>
      <div className='top-bg-picture'></div>
      <Container className='index-container'>
        <Grid stackable>
          <Grid.Column width={8}>
            <Header as='h1'>
              Logan Brunner
              <Header.Subheader>Risk and resilience researcher of civil systems</Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={profilePic} size='medium' />
          </Grid.Column>
        </Grid>

        {/* <Header as='h2'>Interests</Header> */}

        <Header as='h2'>Contact</Header>
        <Segment basic>
          <Grid doubling columns={16}>
            <Grid.Column width={1}>
              <a href='mailto:logan.brunner@pg.canterbury.ac.nz'><Icon name='mail' size='big' /></a>
            </Grid.Column>
            <Grid.Column width={1}>
              <a href='https://www.linkedin.com/in/lgbrunner/' target='_blank' rel='noreferrer'><Icon name='linkedin' size='big' /></a>
            </Grid.Column>
            <Grid.Column width={1}>
              <a href='https://twitter.com/LoganGBrunner' target='_blank' rel='noreferrer'><Icon name='twitter' size='big' /></a>
            </Grid.Column>
          </Grid>
        </Segment>
        <br />
        <br />
      </Container>
    </React.Fragment>
  );
}

export default Home;
