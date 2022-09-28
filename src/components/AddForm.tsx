import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { ObservableTodoStore } from "../store";
import { Link, useNavigate } from "react-router-dom";

const CloseLink = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  border: none;
  color: #262626;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  position: absolute;
  inset: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Input = styled.input`
  font-size: 1.125rem;
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #262626;
`;

const AddButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  border: none;
  background-color: #262626;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddForm = observer(({ store }: { store: ObservableTodoStore }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        if (inputRef.current) {
          store.addTodo(inputRef.current.value);
          inputRef.current.value = "";
          navigate("../");
        }
      }}
    >
      <CloseLink to="../">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={24}
          width={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </CloseLink>
      <Input ref={inputRef} autoFocus required placeholder="Enter title..." />
      <AddButton type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={24}
          width={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </AddButton>
    </Form>
  );
});
