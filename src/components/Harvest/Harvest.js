import { Container } from "./HarvestStyle";
import { Trans } from "react-i18next";

function HarvestComponent({ value = 0 }) {
  return (
    <Container>
      <Trans i18nKey="harvest.title" values={{ value }} />
    </Container>
  );
}

export default HarvestComponent;
