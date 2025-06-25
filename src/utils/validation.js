export const validateInputs = (inputs) => {
  const newErrors = {};

  if (!inputs.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(inputs.name)) {
      // Optional: Allow only letters and spaces
      newErrors.name = "Name can only contain letters and spaces";
    }

  if (!inputs.phone_number.trim()) {
    newErrors.phone_number = "Phone number is required";
  } else if (!/^\d{10}$/.test(inputs.phone_number)) {
    newErrors.phone_number = "Enter a valid 10-digit phone number";
  }

  if (!inputs.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!inputs.website_url.trim()) {
    newErrors.website_url = "Website URL is required";
  } else if (
    !/^(https?:\/\/)?((localhost:\d{1,5})|([\w-]+\.)+[\w-]{2,})(\/[^\s]*)?$/.test(inputs.website_url.trim())
  ) {
    newErrors.website_url = "Please enter a valid website URL (e.g. https://example.com)";
  }

  if (!inputs.message.trim()) newErrors.message = "Message is required";

  return newErrors;
};