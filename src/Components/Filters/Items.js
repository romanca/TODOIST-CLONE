import React from "react";
import { filters } from "../../shared/mockData";
import { useParams } from "@reach/router";
import { useTodos } from "../../Providers/ItemProvider";
import styled from "styled-components";
import FilterDropDown from "../DropDowns/FilterDropDown";
import TodayProjectItem from "../TodayProjectItem";

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

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  color: grey;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  padding: ${(props) => props.theme.spaces[28]};
  margin-right: -5px;
  margin-top: 10px;
`;

const HeaderContentTitleContainer = styled.span`
  font-size: ${(props) => props.theme.spaces[33]};
  font-weight: ${(props) => props.theme.spaces[34]};
  padding: 4px;
  border-radius: 5px;
  :hover {
    background: ${(props) => props.theme.colors.muted3};
  }
`;

const HeaderButtonsIconContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[14]};
  color: ${(props) => props.theme.colors.text3};
`;

const HeaderButtonTitleContainer = styled.div`
  font-size: ${(props) => props.theme.spaces[36]};
  margin-left: ${(props) => props.theme.spaces[1]};
  margin-right: ${(props) => props.theme.spaces[2]};
  color: ${(props) => props.theme.colors.text3};
`;

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
    <div>
      <ContentHeader>
        <HeaderContent>
          <HeaderContentTitleContainer>
            {filter && filter.title}
          </HeaderContentTitleContainer>
          <FilterDropDown />
        </HeaderContent>
      </ContentHeader>
      {Object.values(todos)
        .filter((i) => usedFilters.filterMethod(i))
        .filter((i) => !i.visible)
        .map((i) => {
          return <TodayProjectItem item={i} key={i.id} />;
        })}
    </div>
  );
};
export default Items;
