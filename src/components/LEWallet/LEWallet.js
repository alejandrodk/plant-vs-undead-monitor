import { useTranslation } from "react-i18next";
import { Container, Logo } from "./LEWalletStyle";

function LEWalletComponent({ value = 0 }) {
  const { t } = useTranslation();
  return (
    <Container title={t("wallet.title")}>
      <Logo src="/le.svg" />
      {value}
    </Container>
  );
}

export default LEWalletComponent;
