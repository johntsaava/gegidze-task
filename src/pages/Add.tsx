import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { ObservableTodoStore } from "../store";
import { PlusIcon } from "../components/icons/plus";
import { ArrowUturnLeftIcon } from "../components/icons/arrow-uturn-left";

const CloseLink = styled(Link)`
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
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  height: 100%;
`;

const Input = styled.input`
  font-size: 1.125rem;
  padding: 1.319rem 1rem;
  border: none;
  background: none;
  width: 100%;
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
  box-shadow: 0 10px 15px 0px rgb(0 0 0 / 50%);
`;

export const Add = observer(({ store }: { store: ObservableTodoStore }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        if (inputRef.current) {
          store.addTodo(inputRef.current.value);
          inputRef.current.blur();
          navigate("../");
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
        }}
      >
        <CloseLink to="../">
          <ArrowUturnLeftIcon />
        </CloseLink>
      </motion.div>
      <motion.div
        initial={{
          top: 250,
          borderBottom: "1px solid #0d0d0d",
          backgroundColor: "transparent",
          opacity: 0,
          left: 64,
          right: 64,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          top: 187,
          borderColor: "rgba(0,0,0,0)",
          backgroundColor: "#f2f2f2",
          left: 32,
          right: 32,
          borderRadius: "0.5rem",
          paddingLeft: 66,
          opacity: 0,
        }}
        style={{
          position: "absolute",
        }}
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
