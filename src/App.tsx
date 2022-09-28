import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { ObservableTodoStore } from "./store";
import { Index } from "./components/Index";
import { AddForm } from "./components/AddForm";

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
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = observer(({ store }: { store: ObservableTodoStore }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
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
          <Route index element={<Index store={store} />} />
          <Route path="add" element={<AddForm store={store} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
});

export default App;
