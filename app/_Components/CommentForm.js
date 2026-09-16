'use client';

import React, { useState } from "react";

const CommentForm = ({ postId }) => {
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          name: authorName,
          email: authorEmail,
          content,
        }),
      });

      if (response.ok) {
        setAuthorName("");
        setAuthorEmail("");
        setContent("");
        setSuccessMessage("Comment submitted successfully!");
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to submit comment.");
      }
    } catch (err) {
      setErrorMessage("Failed to submit comment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 bg-[#F6F8FB] border border-[#DDE3EA] rounded-2xl shadow-sm">
      <span className="text-[#0F766E] text-[12px] font-bold uppercase tracking-[0.15em] block mb-1">
        JOIN THE CONVERSATION
      </span>
      <h3 className="text-[20px] font-bold text-[#0C2E60] mb-5">
        Leave a Comment
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="authorName" className="block text-xs font-bold uppercase tracking-wider text-[#0C2E60] mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              id="authorName"
              value={authorName}
              placeholder="e.g. Rahul Sharma"
              onChange={(e) => setAuthorName(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-sm bg-white border border-[#DDE3EA] rounded-xl text-[#17202A] placeholder-[#9CA3AF] focus:border-[#1656B8] focus:ring-2 focus:ring-[#1656B8]/15 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="authorEmail" className="block text-xs font-bold uppercase tracking-wider text-[#0C2E60] mb-1.5">
              Your Email *
            </label>
            <input
              type="email"
              id="authorEmail"
              value={authorEmail}
              placeholder="name@company.com"
              onChange={(e) => setAuthorEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 text-sm bg-white border border-[#DDE3EA] rounded-xl text-[#17202A] placeholder-[#9CA3AF] focus:border-[#1656B8] focus:ring-2 focus:ring-[#1656B8]/15 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="content" className="block text-xs font-bold uppercase tracking-wider text-[#0C2E60] mb-1.5">
            Your Comment *
          </label>
          <textarea
            id="content"
            value={content}
            placeholder="Share your thoughts, questions, or project feedback..."
            onChange={(e) => setContent(e.target.value)}
            required
            rows="4"
            className="w-full p-4 text-sm bg-white border border-[#DDE3EA] rounded-xl text-[#17202A] placeholder-[#9CA3AF] focus:border-[#1656B8] focus:ring-2 focus:ring-[#1656B8]/15 outline-none transition-all resize-none"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-bold text-sm text-white bg-[#1656B8] hover:bg-[#0C2E60] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 min-h-[44px]"
          >
            {isSubmitting ? "Submitting..." : "Post Comment"}
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="mt-4 p-3 bg-[#E8F5F3] border border-[#0F766E]/30 rounded-xl text-[#0F766E] text-xs font-bold">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-[#D2292B] text-xs font-bold">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default CommentForm;
