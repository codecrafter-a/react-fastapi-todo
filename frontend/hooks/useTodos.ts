import { useCallback, useEffect, useState } from "react";
import { Todo, CreateTodoInput } from "@/lib/types";
import { todoService } from "@/lib/services/todoService";

interface UseTodosState {
  todos: Todo[];
  isLoading: boolean;
  isInitialLoad: boolean;
  error: string | null;
}

interface UseTodosActions {
  loadTodos: () => Promise<void>;
  addTodo: (data: CreateTodoInput) => Promise<void>;
  toggleTodo: (id: number, isCompleted: boolean) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  clearError: () => void;
}

export function useTodos(): UseTodosState & UseTodosActions {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load todos on mount
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = useCallback(async () => {
    try {
      setError(null);
      const data = await todoService.getAllTodos();
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load todos");
    } finally {
      setIsInitialLoad(false);
    }
  }, []);

  const addTodo = useCallback(async (data: CreateTodoInput) => {
    try {
      setError(null);
      setIsLoading(true);
      const newTodo = await todoService.createTodo(data);
      setTodos((prev) => [newTodo, ...prev]);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to add todo";
      setError(errorMsg);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const toggleTodo = useCallback(async (id: number, isCompleted: boolean) => {
    try {
      setError(null);
      setIsLoading(true);
      const updated = await todoService.updateTodo(id, {
        is_completed: isCompleted,
      });
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? updated : t))
      );
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to update todo";
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteTodo = useCallback(async (id: number) => {
    try {
      setError(null);
      setIsLoading(true);
      await todoService.deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Failed to delete todo";
      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    todos,
    isLoading,
    isInitialLoad,
    error,
    loadTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearError,
  };
}
