import styled from "styled-components";
import { GrFormSearch, GrClose } from "react-icons/gr";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

export const SearchButton = styled(GrFormSearch)`
  font-size: 1.8rem;
  cursor: pointer;
  margin: 0 auto;
`;

export const SearchBackground = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  min-height: 389px;
`;

export const SearchInput = styled.input`
  width: 100%;
  width: 100%;
  padding: 8px 45px 7px 12px;
  font-size: 1.8rem;
  border-bottom: 1px solid black;
  background: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
`;

export const Button = styled.button`
  background-color: #191919;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  diplay: flex;
  cursor: pointer;
  text-transform: uppercase;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 60px;
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled(GrClose)`
  position: fixed;
  z-index: 1;
  top: 19px;
  display: block;
  visibility: visible;
  width: 17px;
  height: 17px;
  padding: 0;
  border: none;
  background: none;
  right: 120px;
  left: unset;
`;
