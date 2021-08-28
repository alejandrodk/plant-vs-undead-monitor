import { Container, Logo } from "./LEWalletStyle";

function LEWalletComponent({ value = 0 }) {
  return (
    <Container>
      <Logo src="/spark_icon.svg" />
      {value}
    </Container>
  );
}

export default LEWalletComponent;
