import React from "react";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { BatchForm } from "./BatchForm";
import { QueryForm } from "./QueryForm";
import { TodoList } from "./TodoList";
import { ObservableTodoStore } from "../store";

const AddLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: #262626;
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
        </AddLink>
      </motion.div>
    </React.Fragment>
  );
});
