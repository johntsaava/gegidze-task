import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { ObservableTodoStore } from "../store";
import { CheckIcon } from "./icons/check";
import { XmarkIcon } from "./icons/x-mark";
import {
  CompleteCheckbox,
  CompleteCheckboxIndicator,
  SelectCheckbox,
  SelectCheckboxIndicator,
} from "./TodoItem";

const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 2rem 1rem 0;
`;

const Paragraph = styled.p`
  width: 100%;
  font-style: italic;
  font-size: 0.875rem;
`;

const DeleteButton = styled("button")`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin-right: auto;
  &:disabled {
    cursor: default;
  }
`;

export const BatchForm = observer(
  ({ store }: { store: ObservableTodoStore }) => {
    return (
      <Form>
        <SelectCheckbox
          disabled={store.queriedTodos.length === 0}
          onCheckedChange={(checked) => {
            store.batchSelect(checked as boolean);
          }}
        >
          <SelectCheckboxIndicator>
            <CheckIcon width={16} height={16} />
          </SelectCheckboxIndicator>
        </SelectCheckbox>

        <DeleteButton
          type="button"
          disabled={store.selectedTodosCount === 0}
          onClick={() => store.batchDelete()}
        >
          <XmarkIcon />
        </DeleteButton>

        <CompleteCheckbox
          disabled={store.selectedTodosCount === 0}
          onCheckedChange={(checked) => store.batchComplete(checked as boolean)}
        >
          <CompleteCheckboxIndicator>
            <CheckIcon width={24} height={24} />
          </CompleteCheckboxIndicator>
        </CompleteCheckbox>
      </Form>
    );
  }
);
