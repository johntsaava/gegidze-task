import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { ObservableTodoStore } from "../store";
import { TodoItem } from "./TodoItem";

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:last-child {
    margin-bottom: 6rem;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  padding: 1rem;
  font-style: italic;
`;

export const TodoList = observer(
  ({ store }: { store: ObservableTodoStore }) => {
    if (store.queriedTodos.length === 0) {
      return <Paragraph>Nothing To-Do</Paragraph>;
    }

    return (
      <Root>
        {store.queriedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} store={store} />
        ))}
      </Root>
    );
  }
);
