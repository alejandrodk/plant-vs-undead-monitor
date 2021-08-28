import { Container } from "./HarvestStyle";

function HarvestComponent({ value = 0 }) {
  return (
    <Container>
      {`cosechas disponibles: ${value}`}
    </Container>
  );
}

export default HarvestComponent;
