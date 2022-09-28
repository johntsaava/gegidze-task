import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { ObservableTodoStore } from "../store";
import { PlusIcon } from "./icons/plus";
import { ArrowUturnLeftIcon } from "./icons/arrow-uturn-left";

const CloseLink = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 2rem;
  border: none;
  color: #0d0d0d;
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
  border-bottom: 1px solid #0d0d0d;
`;

const AddButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  border-radius: 2rem;
  background-color: #0d0d0d;
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <CloseLink to="../">
          <ArrowUturnLeftIcon />
        </CloseLink>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Input ref={inputRef} autoFocus required placeholder="Enter title..." />
      </motion.div>
      <motion.div
        initial={{
          bottom: 190,
        }}
        exit={{
          bottom: 20,
        }}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AddButton type="submit">
          <PlusIcon />
        </AddButton>
      </motion.div>
    </Form>
  );
});
