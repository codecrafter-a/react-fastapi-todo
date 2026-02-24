"use client";

import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { ErrorAlert } from "@/components/common";
import { useTodos } from "@/hooks";

export default function Home() {
  const {
    todos,
    isLoading,
    isInitialLoad,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearError,
  } = useTodos();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            My Tasks
          </h1>
          <p className="text-gray-600">
            Stay organized and track your daily tasks
          </p>
        </div>

        {error && (
          <ErrorAlert
            title="Error"
            message={error}
            onClose={clearError}
          />
        )}

        {isInitialLoad && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {!isInitialLoad && (
          <div className="space-y-6">
            <TodoForm onSubmit={addTodo} isLoading={isLoading} />
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
}
