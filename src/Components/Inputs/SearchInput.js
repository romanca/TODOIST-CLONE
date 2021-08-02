import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import { useDefaultTodos } from "../../hooks/selectors";
import useVisibiltyState from "../../hooks/useVisibiltyState";
import {
  useItems,
  useTodoActions,
  useTodos,
} from "../../Providers/ItemProvider";
import { useTodoDetailsDialog } from "../../Providers/ModalProvider";
import Icon from "../../shared/Icon";
// import { inboxId, todayId } from "../shared/constants";

const SearchContainer = styled.div`
  justify-content: center;
  display: flex;
  height: ${(props) => props.theme.spaces[4]};
  width: ${(props) => props.theme.spaces[6]};
  border-radius: ${(props) => props.theme.spaces[0]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.background};
  margin-left: ${(props) => props.theme.spaces[1]};
  background: white;
`;

const Input = styled.input`
  background: ${(props) => props.theme.colors.background};
  border: none;
  outline: none;
  /* width: ${(props) => props.theme.spaces[27]}; */
  width: 450px;
  display: inline-block;
  text-align: start;
`;

const IconSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.theme.spaces[3]};
  padding-right: ${(props) => props.theme.spaces[3]};
  color: ${(props) => props.theme.colors.text2};
  background: ${(props) => props.theme.colors.background};
`;

const CrossContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.spaces[7]};
  margin-left: ${(props) => props.theme.spaces[3]};
  margin-right: ${(props) => props.theme.spaces[1]};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.spaces[5]};
  background: transparent;
  width: ${(props) => props.theme.spaces[20]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
    border-radius: ${(props) => props.theme.spaces[0]};
    cursor: pointer;
  }
`;

const Plus = styled.div`
  transform: rotate(45deg);
  margin-left: ${(props) => props.theme.spaces[8]};
  margin-top: ${(props) => props.theme.spaces[88]};
`;

const SearchItemContainer = styled.div`
  padding: ${(props) => props.theme.spaces[30]};
  height: ${(props) => props.theme.spaces[85]};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  white-space: nowrap;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const IconContainer = styled.div`
  width: ${(props) => props.theme.spaces[12]};
  height: ${(props) => props.theme.spaces[12]};
  margin-right: ${(props) => props.theme.spaces[85]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[15]};
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.spaces[36]};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  margin-right: ${(props) => props.theme.spaces[82]};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CollapsiblePanelContainer = styled.div`
  width: ${(props) => props.theme.spaces[89]};
  height: ${(props) => props.theme.spaces[80]};
  border: ${(props) => props.theme.spaces[8]} solid transparent;
  position: absolute;
  margin-top: ${(props) => props.theme.spaces[20]};
  border-radius: ${(props) => props.theme.spaces[9]};
  // background: ${(props) => props.theme.background};
  background: white;
  box-shadow: ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[8]} ${(props) => props.theme.spaces[43]}
    ${(props) => props.theme.spaces[28]} rgb(0 0 0 / 8%);
  z-index: ${(props) => props.theme.spaces[47]};
  margin-left: ${(props) => props.theme.spaces[90]};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const CheckBoxIcon = styled.div`
  width: ${(props) => props.theme.spaces[15]};
  height: ${(props) => props.theme.spaces[15]};
  border-radius: ${(props) => props.theme.spaces[25]};
  border: ${(props) => props.theme.spaces[8]} solid
    ${(props) => props.theme.colors.text};
`;

const ProjectTitleContainer = styled.div`
  color: ${(props) => props.theme.colors.muted11};
  font-size: ${(props) => props.theme.spaces[36]};
`;

const Container = styled.div``;

const SearchInput = () => {
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef(null);
  const expandedWidth = 450;
  const { todos } = useTodos();
  const projects = useDefaultTodos();
  const { projectsItems } = useItems();
  const [searchTerm, setSearchTerm] = React.useState("");
  const openTododetailsModal = useTodoDetailsDialog();
  const { handleSelectedTodo } = useTodoActions();

  React.useEffect(() => {
    if (document.activeElement === inputRef) {
      setVisible(true);
    }
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleVisibleTrue = () => {
    setVisible(true);
  };

  const handleVisibleFalse = () => {
    setVisible(false);
  };

  const handleEditSelectedTodo = (i) => {
    handleSelectedTodo(i);
    openTododetailsModal();
    handleVisibleFalse();
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        handleVisibleFalse();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, handleVisibleFalse]);

  const searchProjects = Object.values(projectsItems)
    .filter((i) => i.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((i) => {
      const to = `project/${i.id}`;
      return (
        <StyledLink to={to} onClick={handleVisibleFalse}>
          <SearchItemContainer>
            <IconContainer>
              <Icon name="dot" color={i.color.color} />
            </IconContainer>
            <TitleContainer>{i.title}</TitleContainer>
          </SearchItemContainer>
        </StyledLink>
      );
    });

  const searchTodos = Object.values(todos)
    .filter((i) => i.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((i) => {
      const project = Object.values(projects).find(
        (p) => p.id === i.categoryId
      );

      return (
        <SearchItemContainer onClick={() => handleEditSelectedTodo(i)}>
          <IconContainer>
            <CheckBoxIcon></CheckBoxIcon>
          </IconContainer>
          <TitleContainer>{i.title}</TitleContainer>
          <ProjectTitleContainer>
            {project && project.title}
          </ProjectTitleContainer>
        </SearchItemContainer>
      );
    });

  return (
    <SearchContainer style={{ width: 450 }}>
      <IconSearchContainer>
        <Icon name="search" />
      </IconSearchContainer>
      <Input
        placeholder="Find"
        onClick={handleVisibleTrue}
        value={searchTerm}
        onChange={handleChange}
      />
      {visible && (
        <CrossContainer onClick={handleVisibleFalse}>
          <Plus>+</Plus>
        </CrossContainer>
      )}
      {searchTodos.length || searchProjects.length ? (
        <Container ref={inputRef}>
          {visible && (
            <CollapsiblePanelContainer>
              {searchProjects}
              {searchTodos}
            </CollapsiblePanelContainer>
          )}
        </Container>
      ) : null}
    </SearchContainer>
  );
};
export default SearchInput;
