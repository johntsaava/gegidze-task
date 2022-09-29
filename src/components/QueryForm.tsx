import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { ObservableTodoStore, QueryType } from "../store";
import { XmarkIcon } from "./icons/x-mark";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  font-size: 1.125rem;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #0d0d0d;
  width: 100%;
`;

const ClearButton = styled("button")`
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.5rem;
`;

const ToggleGroupItem = styled(ToggleGroup.Item)`
  border: 1px solid #0d0d0d;
  border-radius: 0.25rem;
  background: none;
  cursor: pointer;
  &[data-state="on"] {
    background: #0d0d0d;
    color: #fff;
  }
`;

export const QueryForm = observer(
  ({ store }: { store: ObservableTodoStore }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
      <Root>
        <Form>
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search by title..."
            onChange={(e) => store.setQueryText(e.target.value)}
          />
          <ClearButton
            type="button"
            onClick={() => {
              store.setQueryText("");

              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          >
            <XmarkIcon />
          </ClearButton>
        </Form>

        <ToggleGroupRoot
          type="single"
          value={store.queryType}
          onValueChange={(value) => {
            if (value) {
              store.setQueryType(value as QueryType);
            }
          }}
        >
          <ToggleGroupItem value="all">all: {store.todosCount}</ToggleGroupItem>
          <ToggleGroupItem value="completed">
            done: {store.completedTodosCount}
          </ToggleGroupItem>
        </ToggleGroupRoot>
      </Root>
    );
  }
);
