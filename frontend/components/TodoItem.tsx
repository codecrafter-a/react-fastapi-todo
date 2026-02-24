"use client";

import { Todo } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { CheckIcon, TrashIcon, IconButton } from "./common";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number, isCompleted: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  isLoading?: boolean;
}

export function TodoItem({
  todo,
  onToggle,
  onDelete,
  isLoading = false,
}: TodoItemProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ${
        todo.is_completed ? "bg-gray-50" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox Button */}
        <IconButton
          onClick={() => onToggle(todo.id, !todo.is_completed)}
          disabled={isLoading}
          className={`shrink-0 mt-1 border-2 ${
            todo.is_completed
              ? "bg-green-100 text-green-600 hover:bg-green-200 border-green-300"
              : "bg-white text-gray-400 hover:bg-gray-100 border-gray-300 hover:border-gray-400"
          }`}
          icon={
            todo.is_completed ? (
              <CheckIcon size={20} />
            ) : null
          }
          aria-label={
            todo.is_completed ? "Mark as incomplete" : "Mark as complete"
          }
        />

        {/* Content */}
        <div className="grow min-w-0">
          <h3
            className={`font-semibold text-gray-900 ${
              todo.is_completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </h3>

          {todo.description && (
            <p
              className={`text-sm mt-1 ${
                todo.is_completed
                  ? "text-gray-400 line-through"
                  : "text-gray-600"
              }`}
            >
              {todo.description}
            </p>
          )}

          <p className="text-xs text-gray-400 mt-2">
            {formatDate(new Date(todo.created_at))}
          </p>
        </div>

        {/* Delete Button */}
        <IconButton
          onClick={() => onDelete(todo.id)}
          disabled={isLoading}
          className="shrink-0 text-gray-400 hover:text-red-600 hover:bg-red-50"
          icon={<TrashIcon size={20} />}
          aria-label="Delete task"
        />
      </div>
    </div>
  );
}
