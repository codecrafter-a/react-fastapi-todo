"use client";

import { useState } from "react";
import { CreateTodoInput } from "@/lib/types";
import { Input, TextArea, PrimaryButton, ErrorAlert } from "./common";
import { UI, ERROR_MESSAGES } from "@/lib/constants";

interface TodoFormProps {
  onSubmit: (data: CreateTodoInput) => Promise<void>;
  isLoading?: boolean;
}

export function TodoForm({ onSubmit, isLoading = false }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    setTitleError(null);

    if (!title.trim()) {
      setTitleError(ERROR_MESSAGES.TITLE_REQUIRED);
      return false;
    }

    if (title.length > UI.FORM.TITLE_MAX_LENGTH) {
      setTitleError(ERROR_MESSAGES.TITLE_TOO_LONG);
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit({
        title: title.trim(),
        description: description.trim() || undefined,
      });
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : ERROR_MESSAGES.ADD_TODO_FAILED
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md border border-gray-200"
    >
      <h2 className="text-lg font-semibold text-gray-900">Add a new task</h2>

      {error && (
        <ErrorAlert
          message={error}
          onClose={() => setError(null)}
        />
      )}

      <Input
        label="Title"
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isLoading}
        placeholder="Enter task title"
        maxLength={UI.FORM.TITLE_MAX_LENGTH}
        error={titleError || undefined}
        helperText="Brief description of your task"
        characterLimit={UI.FORM.TITLE_MAX_LENGTH}
      />

      <TextArea
        label="Description (optional)"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        disabled={isLoading}
        placeholder="Add more details about your task"
        rows={3}
        helperText="Provide additional context or details"
      />

      <PrimaryButton
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
        className="w-full"
      >
        {isLoading ? "Adding Task..." : "Add Task"}
      </PrimaryButton>
    </form>
  );
}
