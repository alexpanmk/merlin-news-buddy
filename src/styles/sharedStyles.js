//shared styles library for custom styling of components - not used at the moment
import styled, { css } from "styled-components";

export const FancySwitch = styled.div`
  --switch_width: 2em;
  --switch_height: 1em;
  --thumb_color: #e8e8e8;
  --track_color: #e8e8e8;
  --track_active_color: #888;
  --outline_color: #000;
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: var(--switch_width);
  height: var(--switch_height);
`;

// Styled Slider
export const Slider = styled.span`
  box-sizing: border-box;
  border: 2px solid var(--outline_color);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.isChecked ? 'var(--track_active_color)' : 'var(--track_color)'};
  transition: .15s;
  border-radius: var(--switch_height);

  &:before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    height: var(--switch_height);
    width: var(--switch_height);
    border: 2px solid var(--outline_color);
    border-radius: 100%;
    left: -2px;
    bottom: -2px;
    background-color: var(--thumb_color);
    transform: translateY(-0.2em);
    box-shadow: 0 0.2em 0 var(--outline_color);
    transition: .15s;
    transform: ${props => props.isChecked ? `translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.2em)` : 'translateY(-0.2em)'};
  }

  &:hover:before {
    transform: ${props => props.isChecked ? `translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.3em)` : 'translateY(-0.3em)'};
    box-shadow: 0 0.3em 0 var(--outline_color);
  }`;


  //Styled Button
 export const FancyButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 15px;
  padding: 15px 30px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725AC1;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #725AC1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725AC1;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725AC1;
  }

  &:active {
    transform: scale(0.9);
  }
`;