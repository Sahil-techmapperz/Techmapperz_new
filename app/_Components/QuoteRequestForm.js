'use client';
import React, { useState } from 'react';
import { useToast } from '../_hooks/useToast';
import { X } from 'lucide-react';

const init = {
  name: "",
  email: "",
  mobile: "",
  projectType: "Request_Quote",
  additionalDetails: ""
};

const RequestQuoteForm = ({ closeForm }) => {
  const [formData, setFormData] = useState(init);
  const [hasError, setHasError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const validateForm = () => {
    const errors = {};

    if (!formData.name?.trim()) {
      errors.name = "Full Name is required*";
    }

    if (!formData.email?.trim()) {
      errors.email = "Email is required*";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.mobile?.trim()) {
      errors.mobile = "Mobile number is required*";
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      errors.mobile = "Enter a valid 10-digit mobile number";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (hasError[name]) {
      setHasError((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setHasError(validationErrors);
      return;
    }

    setHasError({});
    setIsSubmitting(true);
    const { name, email, mobile, projectType, additionalDetails } = formData;
    const data = {
      name,
      email,
      mobile,
      projectType,
      projectdetails: additionalDetails || "Not Specified",
    };

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 200 || res.ok) {
        setFormData(init);
        toast({
          title: 'Request Submitted',
          description: "Thank you for your request. We will get back to you shortly.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        if (closeForm) closeForm();
      } else {
        toast({
          title: 'Submission Failed',
          description: "Unable to submit your request. Please try again.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: err.message || "Something went wrong.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="relative text-black w-full max-w-[540px] bg-white p-7 sm:p-10 rounded-2xl sm:rounded-[24px] shadow-2xl border border-gray-100/80 flex flex-col gap-4"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeForm}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-900 transition-colors p-1.5 rounded-full hover:bg-gray-100 cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="pt-1 pr-8 mb-2">
          <h2 className="text-[#0C2E60] text-2xl sm:text-[32px] font-bold tracking-tight">
            Discuss Your <span className="text-[#396BA9]">Project</span>
          </h2>
        </div>

        {/* Full Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Full Name *"
            className={`w-full px-4 py-3 sm:py-3.5 border rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#396BA9] focus:border-transparent text-[15px] placeholder-gray-400 transition-all ${
              hasError.name ? "border-red-500 bg-red-50/20" : "border-gray-300"
            }`}
          />
          {hasError.name && <p className="text-red-500 text-xs mt-1.5 pl-1">{hasError.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email *"
            className={`w-full px-4 py-3 sm:py-3.5 border rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#396BA9] focus:border-transparent text-[15px] placeholder-gray-400 transition-all ${
              hasError.email ? "border-red-500 bg-red-50/20" : "border-gray-300"
            }`}
          />
          {hasError.email && <p className="text-red-500 text-xs mt-1.5 pl-1">{hasError.email}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number *"
            className={`w-full px-4 py-3 sm:py-3.5 border rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#396BA9] focus:border-transparent text-[15px] placeholder-gray-400 transition-all ${
              hasError.mobile ? "border-red-500 bg-red-50/20" : "border-gray-300"
            }`}
          />
          {hasError.mobile && <p className="text-red-500 text-xs mt-1.5 pl-1">{hasError.mobile}</p>}
        </div>

        {/* Project Details */}
        <div>
          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder="Project Details (Optional)"
            rows={5}
            className="w-full px-4 py-3 sm:py-3.5 border border-gray-300 rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#396BA9] focus:border-transparent text-[15px] placeholder-gray-400 transition-all resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-[15px] sm:text-[16px] text-white bg-[#396BA9] hover:bg-[#2F5B92] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuoteForm;
