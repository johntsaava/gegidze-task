import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { AddForm } from "./components/AddForm";
import { BatchForm } from "./components/BatchForm";
import { QueryForm } from "./components/QueryForm";
import { Link, Outlet, Route, Routes } from "react-router-dom";

import { TodoList } from "./components/TodoList";
import { ObservableTodoStore } from "./store";

const Root = styled("div")`
  margin: auto;
  padding: 2rem;
  max-width: 40rem;
  width: 100%;
  height: 100%;
  max-height: 44rem;
`;

const Main = styled("main")`
  position: relative;
  background-color: #fff;
  padding: 2rem;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AddLink = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4rem;
  height: 4rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background-color: #262626;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = observer(({ store }: { store: ObservableTodoStore }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Root>
            <Main>
              <Outlet />
            </Main>
          </Root>
        }
      >
        <Route
          index
          element={
            <React.Fragment>
              <QueryForm store={store} />
              <BatchForm store={store} />
              <TodoList store={store} />
              <AddLink to="/add">
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
            </React.Fragment>
          }
        />
        <Route path="add" element={<AddForm store={store} />} />
      </Route>
    </Routes>
  );
});

export default App;
