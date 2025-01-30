/**
 * Check if an object is empty (i.e., has no own enumerable properties).
 * @param {Object} obj - The object to check.
 * @returns {boolean} - Returns true if the object is empty, false otherwise.
 */
export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

/**
 * Check if all values in an object are null
 * @param {Object} obj - The object to check
 * @returns {boolean} - Returns true if all values are null, false otherwise
 */
export const areAllValuesNull = (obj) => {
  // Check if obj is an object and not null or undefined
  if (obj === null || typeof obj !== "object") {
    return true; // Return false if obj is null or not an object
  }

  return Object.values(obj).every((value) => value === null);
};

/**
 * Compares two objects and returns only the fields with changed values.
 *
 * @param {Object} values - The current values from the form.
 * @param {Object} initialValues - The initial values to compare against.
 * @returns {Object} An object containing only the fields that have changed.
 */
export const getChangedValues = async (values, initialValues) => {
  return Object.keys(values).reduce((acc, key) => {
    if (values[key] !== initialValues[key]) {
      acc[key] = values[key];
    }
    return acc;
  }, {});
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Converts a snake_case string to a human-readable format.
 *
 * @param {string} str - The input string in snake_case format.
 * @returns {string} - The converted string in human-readable format.
 */
export const snakeCaseToNormal = (str) => {
  if (!str) return "";
  return str.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export const capitalizeWord = (word) => {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
export const convertHyphenToTitleCase = (input) => {
  if (!input) return "";
  return input
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const getStatusMessage = (status) => {
  switch (status) {
    case "draft":
      return "Listing is in **Draft**. Make sure to complete it and submit for review.";
    case "submitted":
      return "Listing has been **Submitted**! It's waiting for review.";
    case "under_review":
    case "under review":
      return "Listing is currently **Under Review** by our team. Sit tight, we're on it!";
    case "approved":
      return "Congratulations! Your listing has been **Approved**. Please publish it to make it Live.";
    case "published":
      return "This Listing is Live on Platform.";
    case "rejected":
      return "Oops! Listing was **Rejected**. Check our feedback and try again.";
    case "inactive":
      return "Listing is **Inactive**. You can reactivate it anytime.";
    case "sold":
      return "Great news! This property has been marked as **Sold**.";
    case "rented":
      return "This property has been successfully **Rented Out**. Nice work!";
    default:
      return "Unknown status. Please contact support if you think this is an error.";
  }
};
// Great News!
// Your listing is now Live and visible to potential buyers or renters. 🎉

export const validatePAN = (pan) => {
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panPattern.test(pan);
};
export const validateAadhaar = (aadhaar) => {
  const aadhaarPattern = /^\d{12}$/;
  return aadhaarPattern.test(aadhaar);
};
