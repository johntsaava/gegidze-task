import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import { ObservableTodoStore, QueryType } from "../store";

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
  border-bottom: 1px solid #262626;
  width: 100%;
`;

const ClearButton = styled("button")`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  padding: 0;
`;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 0.5rem;
`;
const ToggleGroupItem = styled(ToggleGroup.Item)`
  border: 1px solid #262626;
  border-radius: 0.25rem;
  background: none;
  &[data-state="on"] {
    background: #262626;
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
            placeholder="Enter title..."
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width={24}
              height={24}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
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
