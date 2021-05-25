import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import DropDown from "../DropDown";

const ItemsContainer = styled.div`
  height: ${(props) => props.theme.spaces[10]};
  width: ${(props) => props.theme.spaces[11]};
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.spaces[1]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[1]};
  }
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ContentTitleContainer = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  padding: ${(props) => props.theme.spaces[1]};
  justify-content: space-between;
  width: ${(props) => props.theme.spaces[80]};
  width: 130px;
  height: ${(props) => props.theme.spaces[12]};
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.muted5};
`;

const ProjectTitle = ({ item, to }) => {
  return (
    <ItemsContainer>
      <Link to={to} style={{ textDecoration: "none", width: 15 }}>
        <ContentTitleContainer>
          <Title>{item.title}</Title>
        </ContentTitleContainer>
      </Link>
      <DropDown item={item} />
    </ItemsContainer>
  );
};

export default ProjectTitle;
