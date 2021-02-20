import styled from "@emotion/styled";
import { useControlledProgress } from "../utils/hooks";
import { useContext } from "react";
import { LoadingContext } from "../contexts/loading";

const Container = styled.div<{ finished: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background: white;
  transition: opacity 0.5s ease;
  transition-delay: 0.25s;
  opacity: ${(props) => (props.finished ? 0 : 1)};
  pointer-events: ${(props) => (props.finished ? "none" : "all")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingScreen = () => {
  const { legacyLoader, percentage } = useContext(LoadingContext);
  const progress = useControlledProgress();

  const prog = legacyLoader ? progress : percentage * 100;

  return <Container finished={prog == 100}>{Math.round(prog)}%</Container>;
};

export default LoadingScreen;
