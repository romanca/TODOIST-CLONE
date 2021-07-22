import { Match } from "@reach/router";
import React from "react";
import { filters } from "../../shared/mockData";
import Link from "../../wrappers/Link";
import FilterItem from "./FilterItem";
import styled, { useTheme } from "styled-components";

const Container = styled.div``;

const FiltersList = () => {
  const { colors, spaces } = useTheme();

  return (
    <Container>
      {Object.values(filters).map((i) => {
        const to = `filter/${i.id}`;
        return (
          <Match path={to}>
            {({ match }) => (
              <Container
                style={{
                  backgroundColor: match && colors["muted3"],
                  borderRadius: match && spaces[1],
                  width: spaces[86],
                }}
              >
                <Link to={to}>
                  <FilterItem key={i.id} item={i} />
                </Link>
              </Container>
            )}
          </Match>
        );
      })}
    </Container>
  );
};

export default FiltersList;
