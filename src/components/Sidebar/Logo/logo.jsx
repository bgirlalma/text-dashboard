import { LogoSvg } from "image/logo";
import { WrappContainer, Title, Desc } from "./logo.styled";

export const Logo = () => {
    return (
      <WrappContainer>
        <LogoSvg />
        <Title className="logo-title">Dashboard</Title>
        <Desc className="logo-desc">v.01</Desc>
      </WrappContainer>
    );
}