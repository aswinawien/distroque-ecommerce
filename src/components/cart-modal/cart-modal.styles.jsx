import styled, { css, keyframes } from "styled-components";
import Modal from "react-modal";

const keyFrame = css`
  @keyframes {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  font-weight: 500px;
  line-height: 0px;
`;

export const AnimatedModal = styled(Modal)`
  animation: ${props => (props.isOpen ? `${keyFrame} 2s infinite;` : "")};
`;
