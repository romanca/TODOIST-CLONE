import React from "react";
import { filters } from "../../shared/mockData";
import { useParams } from "@reach/router";
import { useTodos } from "../../Providers/ItemProvider";
import styled from "styled-components";
// import FilterDropDown from "../DropDowns/FilterDropDown";
import TodayProjectItem from "../../Components/Projects/TodayProject/TodayProjectItem";

const ContentHeader = styled.div`
  display: flex;
  background-color: #fff;
  top: ${(props) => props.theme.spaces[28]};
  padding-top: ${(props) => props.theme.spaces[55]};
`;

const HeaderContent = styled.div`
  display: flex;
  width: ${(props) => props.theme.spaces[27]};
  padding-bottom: ${(props) => props.theme.spaces[43]};
  margin: ${(props) => props.theme.spaces[28]} auto;
  border-bottom: ${(props) => props.theme.spaces[8]} solid transparent;
  align-items: flex-start;
  justify-content: space-between;
  word-break: break-word;
  margin: ${(props) => props.theme.spaces[56]}
    ${(props) => props.theme.spaces[28]} ${(props) => props.theme.spaces[28]}
    ${(props) => props.theme.spaces[57]};
  padding: ${(props) => props.theme.spaces[39]}
    ${(props) => props.theme.spaces[9]};
`;

const HeaderContentTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
  padding: ${(props) => props.theme.spaces[9]};
  border-radius: ${(props) => props.theme.spaces[1]};
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;

const Container = styled.div``;

const Items = (props) => {
  const { todos } = useTodos();
  const { id } = useParams();
  const usedFilters = filters[id];
  const filter = React.useMemo(
    () => Object.values(filters).find((i) => i.id === props.id),
    [props.id]
  );
  // const [valueSelect, setValueSelect] = React.useState(0);

  // const toggleContent = (e) => {
  //   setValueSelect(e.target.value);
  // };

  // const switchContent = (value) => {
  //   switch (value) {
  //     case "sort aphabetically":
  //       return (
  //         <div>
  //           {Object.values(todos)
  //             .filter((i) => usedFilters.filterMethod(i))
  //             .filter((i) => !i.visible)
  //             .sort((a, b) => {
  //               const titleA = a.title.toUpperCase(); //
  //               const titleB = b.title.toUpperCase();
  //               if (titleA < titleB) {
  //                 return -1;
  //               } else if (titleA > titleB) {
  //                 return 1;
  //               }
  //               return 0;
  //             })
  //             .map((i) => {
  //               return <TodoItem item={i} key={i.id} />;
  //             })}
  //         </div>
  //       );
  //     case "sort by priority":
  //       return (
  //         <div>
  //           {Object.values(todos)
  //             .filter((i) => usedFilters.filterMethod(i))
  //             .filter((i) => !i.visible)
  //             .sort((a, b) => {
  //               return a.priority > b.priority ? 1 : -1;
  //             })
  //             .map((i) => {
  //               return <TodoItem item={i} key={i.id} />;
  //             })}
  //         </div>
  //       );
  //     default:
  //       return null;

  //   }
  // };

  return (
    <Container>
      <ContentHeader>
        <HeaderContent>
          <HeaderContentTitleContainer>
            {filter && filter.title}
          </HeaderContentTitleContainer>
          {/* <FilterDropDown /> */}
        </HeaderContent>
      </ContentHeader>
      {Object.values(todos)
        .filter((i) => usedFilters.filterMethod(i))
        .filter((i) => !i.visible)
        .map((i) => {
          return <TodayProjectItem item={i} key={i.id} />;
        })}
    </Container>
  );
};
export default Items;
