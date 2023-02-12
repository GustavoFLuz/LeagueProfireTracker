import React, { useState } from "react";
import styled from 'styled-components';

const DropDownContainer = styled.div`
    display: inline-block;
    margin: 0 8px;
    cursor: pointer;
    position: relative;
    color: ${props=>props.theme.colors.dark};
   
`;

const DropDownHeader = styled.div`
  min-width: 5.5ch;
  padding: 13px 29px;
  border-radius: 10px;
  text-align: center;
  background-color: ${props=>props.theme.colors.primary};
  ${props=>props.open?`box-shadow: -3px -1px 0 ${props.theme.colors.light}, 3px -1px 0 ${props.theme.colors.light}`:''}
`;

const DropDownListContainer = styled.div`
  position: relative;
`;

const DropDownList = styled.ul`
  box-shadow: -3px 1px 0 ${props=>props.theme.colors.light}, 3px 1px 0 ${props=>props.theme.colors.light};
  background-color: ${props=>props.theme.colors.primary};
  position: absolute;
  max-height: 10em;
  overflow-y: auto;
  width: 100%;
  padding: 0 5px;
  margin: 0;
  box-sizing: border-box;
  top: -0.4em;
  &:first-child {
    padding-top: 0.8em;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const ListItem = styled.li`
  text-align: center;
  list-style: none;
  margin-bottom: 0.8em;
`;

export default function ServerSelect({ list, onChange}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Server');

  const switchSelected = (li)=>{
    onChange(li)
    setSelected(li)
    setIsOpen(false)
  }

  const toggling = () => setIsOpen(!isOpen);
  return (
    <DropDownContainer >
      <DropDownHeader onClick={toggling} open={isOpen}>{selected}</DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {list && list.map((li, i) =>
              <ListItem key={i} onClick={()=>switchSelected(li)}>{li}</ListItem>
            )}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}