import {
  FarmSignal,
  Header,
  Logo,
  Title,
  TokenInput,
  TokenLabel,
} from "./HeaderStyles";

const HeaderComp = (props) => {
  const { setToken, farmActive, token } = props;

  return (
    <Header>
      <Logo src="/Logo.png" />
      <Title>PVU Monitor</Title>
      <TokenLabel>
        Agrega tu token de acceso
        <TokenInput
          type="text"
          value={token || ""}
          onChange={({ target }) => setToken(target.value)}
        />
      </TokenLabel>
      <FarmSignal active={farmActive}>
        {token
          ? farmActive
            ? "Puedes farmear!!"
            : "No puedes farmear"
          : "Agrega un token válido"}
      </FarmSignal>
    </Header>
  );
};

export default HeaderComp;
