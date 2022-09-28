import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { ObservableTodoStore } from "../store";
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
  padding: 0;
  margin-right: auto;
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

        <DeleteButton
          type="button"
          disabled={store.selectedTodosCount === 0}
          onClick={() => store.batchDelete()}
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
        </DeleteButton>

        <CompleteCheckbox
          disabled={store.selectedTodosCount === 0}
          onCheckedChange={(checked) => store.batchComplete(checked as boolean)}
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
      </Form>
    );
  }
);
