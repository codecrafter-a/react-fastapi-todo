"use client";

import { Todo } from "@/lib/types";
import { TodoItem } from "./TodoItem";
import { ChecklistIcon } from "./common";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number, isCompleted: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  isLoading?: boolean;
}

export function TodoList({
  todos,
  onToggle,
  onDelete,
  isLoading = false,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
        <div className="text-gray-400 mb-2 mx-auto w-12 h-12">
          <ChecklistIcon size={48} stroke="currentColor" />
        </div>
        <p className="text-gray-600 font-medium">No tasks yet</p>
        <p className="text-gray-400 text-sm mt-1">Create your first task to get started</p>
      </div>
    );
  }

  const completedCount = todos.filter((t) => t.is_completed).length;

  return (
    <div className="space-y-3">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">{todos.length}</span> task
          {todos.length !== 1 ? "s" : ""} ({completedCount} completed)
        </p>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}
