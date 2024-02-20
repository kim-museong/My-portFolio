import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Squircle } from "corner-smoothing";

const ButtonBox = styled(Squircle)`
  width: ${({ size }) => (size === "s" ? "50px" : "80px")};
  height: ${({ size }) => (size === "s" ? "50px" : "80px")};
  background-color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  transition: all 0.1s linear;
  position: relative;
  overflow: hidden;

  svg {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    font-size: ${({ size }) => (size === "s" ? "30px" : "50px")};
    color: white;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ButtonName = styled.div`
  color: white;
  font-size: ${({ size }) => (size === "s" ? "10px" : "14px")};
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

const Button = ({ children, url, image, color, size }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes(url) ? null : (
        <NavLink to={url ? `/${url}` : "/"}>
          <ButtonBox
            color={color}
            size={size}
            cornerRadius={size === "s" ? "19" : " 32"}
          >
            {image}
          </ButtonBox>

          <ButtonName color={color} size={size}>
            {children}
          </ButtonName>
        </NavLink>
      )}
    </>
  );
};

export default Button;
