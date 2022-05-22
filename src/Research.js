import { Container, Header, Image, Segment } from 'semantic-ui-react';

function Research() {
  return (
    <Container>
      <Header as='h1'>Research</Header>
      <p>I am currently looking into interdependent infrastructure and the impact from cascading effects.</p>
      <Segment basic>
        <Image src='images/nasa-earth-night.jpeg' size='big' centered />
      </Segment>
      <br />
      <br />
    </Container>
  );
}

export default Research;
