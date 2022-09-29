import { observer } from "mobx-react-lite";
import styled from "styled-components";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { ObservableTodoStore, Todo } from "../store";
import { XmarkIcon } from "./icons/x-mark";
import { CheckIcon } from "./icons/check";

const Root = styled("div")`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
`;

const Main = styled("div")`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-left: 0.5rem;
`;

const Label = styled.label<{
  $completed: boolean;
}>`
  font-size: 1.125rem;
  width: 100%;
  font-weight: ${({ $completed }) => ($completed ? 400 : 500)};
  font-style: ${({ $completed }) => ($completed ? "italic" : "normal")};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

const DeleteButton = styled("button")`
  width: 1.5;
  height: 1.5;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  color: #734230;
  display: flex;
`;

export const SelectCheckbox = styled(CheckboxPrimitive.Root)`
  flex-shrink: 0;
  width: 1.125rem;
  height: 1.125rem;
  padding: 0;
  border-radius: 0.25rem;
  border: 2px solid #734230;
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
    background: #734230;
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
  border: 1px solid #734230;
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
            <CheckIcon width={16} height={16} />
          </SelectCheckboxIndicator>
        </SelectCheckbox>

        <DeleteButton type="button" onClick={() => store.deleteTodo(todo.id)}>
          <XmarkIcon />
        </DeleteButton>

        <Main>
          <Label htmlFor={`${todo.id}-completed`} $completed={todo.completed}>
            {todo.title}
          </Label>
          <CompleteCheckbox
            id={`${todo.id}-completed`}
            checked={todo.completed}
            onCheckedChange={() => store.toggleComplete(todo.id)}
          >
            <CompleteCheckboxIndicator>
              <CheckIcon />
            </CompleteCheckboxIndicator>
          </CompleteCheckbox>
        </Main>
      </Root>
    );
  }
);
