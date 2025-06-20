"use client"
import styled from "styled-components";
import { motion } from "motion/react";

export const MenuContainer = styled("div").withConfig({
    shouldForwardProp: (prop) => prop !== "openDirection" && prop !== "isOpen",
}) <{ openDirection: string; isOpen?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.openDirection === "down" ? "column" : "column-reverse")};
  width: fit-content;
  height: 40px;
  position: relative;
  z-index: ${(props) => (props.isOpen ? 1000 : 1)};
`;
export const MenuWrapper = styled(motion.div).withConfig({
    shouldForwardProp: (prop) => prop !== "openDirection" && prop !== "isOpen",
}) <{ openDirection: string; isOpen?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.openDirection === "down" ? "column" : "column-reverse")};
  background-color: black;
  width: 150px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  z-index: ${(props) => (props.isOpen ? 1001 : 2)};
`;
export const MenuButton = styled.button`
  background-color: transparent;
  color: rgba(255, 255, 255, 0.87);
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
  transition: font-size 0.1s ease-out, color 0.2s ease-in-out;

  &:active {
    font-size: 11px;
    color: rgb(253, 217, 11);
  }
`;
export const MenuContent = styled(motion.ul)`
  text-align: center;
  list-style-type: none;
  padding: 0 1rem;
`;
export const MenuContentItem = styled(motion.li)`
  height: 30px;
  width: 100%;
  font-size: 14px;
  margin: 2px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  place-items: center;

  a {
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.15s ease-in-out, color 0.2s ease-in-out, font-size 0.1s ease-out;
    text-decoration: inherit;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: rgb(253, 217, 11);
    }
    &:active {
      font-size: 11px;
    }
  }
`;
