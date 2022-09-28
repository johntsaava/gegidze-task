import React from "react";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BatchForm } from "./BatchForm";
import { QueryForm } from "./QueryForm";
import { TodoList } from "./TodoList";
import { ObservableTodoStore } from "../store";
import { PlusIcon } from "./icons/plus";

const AddLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: #0d0d0d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Index = observer(({ store }: { store: ObservableTodoStore }) => {
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    linkRef.current?.focus();
  }, []);

  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          padding: "2rem",
          overflow: "auto",
        }}
      >
        <QueryForm store={store} />
        <BatchForm store={store} />
        <TodoList store={store} />
      </motion.div>

      <motion.div
        initial={{ bottom: 20 }}
        exit={{ bottom: 190 }}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AddLink to="/add" ref={linkRef}>
          <PlusIcon />
        </AddLink>
      </motion.div>
    </React.Fragment>
  );
});
