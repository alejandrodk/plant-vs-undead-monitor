import { Container, Logo } from "./SeedsStyle";

function SeedsComponent({ value = 0 }) {
  return (
    <Container>
      <Logo src="/sapling.svg" />
      {value}
    </Container>
  );
}

export default SeedsComponent;
