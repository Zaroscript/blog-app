"use client";

import React, { useState, useCallback, useEffect } from "react";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [errors, setErrors] = useState({
    title: false,
    body: false,
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: false }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const newErrors = {
      title: formData.title.trim() === "",
      body: formData.body.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!validateForm()) {
        setMessage("Please fill in all fields");
        setIsSuccess(false);
        return;
      }

      setLoading(true);
      const controller = new AbortController();
      const { signal } = controller;

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          signal,
        });

        const result = await res.json();
        if (res.ok) {
          setMessage("Form submitted successfully");
          setIsSuccess(true);
          setFormData({ title: "", body: "" }); // Reset form fields
        } else {
          setMessage(`Error: ${result.message}`);
          setIsSuccess(false);
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setMessage(`Error: ${error.message}`);
        } else {
          setMessage("An unknown error occurred");
        }
        setIsSuccess(false);
      } finally {
        setLoading(false);
      }

      return () => {
        controller.abort();
      };
    },
    [formData, validateForm]
  );

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setIsSuccess(null);
      }, 5000); // 3 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex flex-col rounded-lg p-4 w-2/3 mx-auto border border-slate-200 max-sm:w-[90%]"
    >
      <h2 className="font-bold text-2xl md:text-4xl text-center">Create a new post</h2>

      <div className="mt-4">
        <input
          placeholder="Post title"
          className="w-full bg-slate-200 rounded-md focus:border-slate-900 px-2 py-1 dark:text-black"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && (
          <span className="text-red-500">Title is required</span>
        )}
      </div>

      <div className="mt-4">
        <textarea
          placeholder="Write your post"
          className="w-full border bg-slate-200 rounded-md focus:border-slate-900 px-2 py-1 h-72 resize-none dark:text-black"
          name="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>
        {errors.body && <span className="text-red-500">Body is required</span>}
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-md px-4 py-1 hover:bg-slate-100 transition duration-500"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

      {message && (
        <p
          className={`absolute top-4 right-10 w-fit p-4 rounded-sm animate-message ${
            isSuccess
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
};

export default Form;
