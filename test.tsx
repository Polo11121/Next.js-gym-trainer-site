import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  configureStore,
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// --- Typy ---

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}

// --- Async thunk do pobierania todos z API JSONPlaceholder ---
export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    return await response.json();
  }
);

// --- Slice ---
const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  } as TodosState,
  reducers: {
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

const { toggleTodo } = todosSlice.actions;

// --- Store ---
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

// --- Typowanie hooków redux ---
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// --- App ---
function App() {
  const { items, loading, error } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: 600,
        margin: "2rem auto",
      }}
    >
      <h1>Todo List</h1>

      {loading && <p>Loading todos...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && (
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {items.map((todo) => (
            <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
              <label
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggle(todo.id)}
                  style={{ marginRight: "0.5rem" }}
                />
                {todo.title}
              </label>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => dispatch(fetchTodos())}
        disabled={loading}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Refresh Todos
      </button>
    </div>
  );
}

// --- Render ---
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
