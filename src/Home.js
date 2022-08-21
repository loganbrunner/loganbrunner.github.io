import { Container, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';

function Home() {
  return (
    <Container>
      <Grid>
        <Grid.Column width={8}>
          <Header as='h1'>
            Logan Brunner
            <Header.Subheader>Risk and resilience researcher on civil systems</Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Image src='images/logan_picture_square.jpg' size='medium' />
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
      <a target='_blank' href='https://icons8.com/icon/4479/oak-tree' rel='noreferrer'>Oak Tree</a> icon by <a target='_blank' rel='noreferrer' href='https://icons8.com'>Icons8</a>
    </Container>
  );
}

export default Home;
