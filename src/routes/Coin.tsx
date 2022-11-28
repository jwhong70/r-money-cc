import { useParams } from "react-router-dom";
import { useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
interface RouteState {
  state: { name: string };
}

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  return (
    <Container>
      <Header>
        <Title></Title>
      </Header>
    </Container>
  );
}
export default Coin;
