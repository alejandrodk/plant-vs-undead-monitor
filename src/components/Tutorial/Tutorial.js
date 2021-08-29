import { useTranslation } from "react-i18next";
import { Container, Toggle, Image } from "./TutorialStyle";

function Tutorial({ setShowTutorial }) {
  const { t } = useTranslation();
  return (
    <Container>
      <Toggle onClick={() => setShowTutorial(false)}>X</Toggle>
      <h3>{t("tutorial.title1")}</h3>
      <p>
        {t("tutorial.text1")}
        <br />
        <br />
        {t("tutorial.text1-1")}
      </p>
      <h3>{t("tutorial.title2")}</h3>
      <p>{t("tutorial.text2")}</p>
      <h3>{t("tutorial.title3")}</h3>
      <p>
        {t("tutorial.text3")}
        <b>{t("tutorial.text3-1")}</b>
        {t("tutorial.text3-2")}
      </p>
      <h3>{t("tutorial.title4")}</h3>
      <p>{t("tutorial.text4")}</p>
      <Image src="/token-1.jpg" />
      <p>{t("tutorial.text5")}</p>
      <Image src="/token-2.jpg" />
      <br />
      <p>{t("tutorial.text6")}</p>
      <Image src="/token-3.jpg" />
      <br />
      <p>{t("tutorial.text7")}</p>
      <Image src="/token-4.jpg" />
      <p>{t("tutorial.warning")}</p>
    </Container>
  );
}

export default Tutorial;
