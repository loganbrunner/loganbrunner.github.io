import { Container, Grid, Header, Segment } from 'semantic-ui-react';

function About() {
  return (
    <Container>
      <Header as='h1'>About</Header>

      <Header as='h2'>Professional Experience</Header>
      <Segment>
        <Grid stackable>
          <Grid.Column width={2}>
            2015 - 2021
          </Grid.Column>
          <Grid.Column width={6}>
            TNO, Utrecht, The Netherlands
          </Grid.Column>
          <Grid.Column width={4}>
            Environmental Systems Engineer
          </Grid.Column>
          <Grid.Column width={4}>
            Applied Geosciences Department
          </Grid.Column>
        </Grid>
      </Segment>

      <Header as='h2'>Education</Header>
      <Segment>
        <Grid stackable>
          <Grid.Column width={2}>
            2022 - present
          </Grid.Column>
          <Grid.Column width={6}>
            University of Canterbury, Christchurch, New Zealand
          </Grid.Column>
          <Grid.Column width={4}>
            PhD
          </Grid.Column>
          <Grid.Column width={4}>
            Civil Systems Engineering
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid stackable>
          <Grid.Column width={2}>
            2014 - 2015
          </Grid.Column>
          <Grid.Column width={6}>
            Johns Hopkins University, Baltimore, MD, USA
          </Grid.Column>
          <Grid.Column width={4}>
            Master of Science in Engineering
          </Grid.Column>
          <Grid.Column width={4}>
            Environmental Systems Engineering
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Grid stackable>
          <Grid.Column width={2}>
            2010 - 2014
          </Grid.Column>
          <Grid.Column width={6}>
            Johns Hopkins University, Baltimore, MD, USA
          </Grid.Column>
          <Grid.Column width={4}>
            Bachelor of Science
          </Grid.Column>
          <Grid.Column width={4}>
            Environmental Engineering
          </Grid.Column>
        </Grid>
      </Segment>
      <br />
      <br />
    </Container>
  );
}

export default About;
