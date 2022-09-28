import { observer } from "mobx-react-lite";
import styled from "styled-components";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { ObservableTodoStore, Todo } from "../store";

const Root = styled("div")`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Main = styled("div")`
  display: flex;
  border-left: 2px solid #0d0d0d;
  padding: 1rem 0 1rem 1rem;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
  width: 100%;
`;

const DeleteButton = styled("button")`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;

export const SelectCheckbox = styled(CheckboxPrimitive.Root)`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 0.25rem;
  border: 1px solid #0d0d0d;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
  &[data-state="checked"] {
    background: #0d0d0d;
  }
`;
export const SelectCheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  color: #fff;
  display: flex;
`;

export const CompleteCheckbox = styled(CheckboxPrimitive.Root)`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border-radius: 2rem;
  border: 1px solid #0d0d0d;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
  &[data-state="checked"] {
    border-color: #05c148;
    background: #05c148;
  }
`;
export const CompleteCheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  color: #fff;
  display: flex;
`;

export const TodoItem = observer(
  ({ todo, store }: { todo: Todo; store: ObservableTodoStore }) => {
    return (
      <Root>
        <SelectCheckbox
          checked={todo.selected}
          onCheckedChange={() => store.toggleSelect(todo.id)}
        >
          <SelectCheckboxIndicator>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={16}
              height={16}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </SelectCheckboxIndicator>
        </SelectCheckbox>

        <DeleteButton type="button" onClick={() => store.deleteTodo(todo.id)}>
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
        </DeleteButton>

        <Main>
          <Label htmlFor={`${todo.id}-completed`}>{todo.title}</Label>
          <CompleteCheckbox
            id={`${todo.id}-completed`}
            checked={todo.completed}
            onCheckedChange={() => store.toggleComplete(todo.id)}
          >
            <CompleteCheckboxIndicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={24}
                height={24}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </CompleteCheckboxIndicator>
          </CompleteCheckbox>
        </Main>
      </Root>
    );
  }
);
