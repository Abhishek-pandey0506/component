// utils/errorHandler.js
export const handleApiError = (error) => {
  let errorMessage = "An unexpected error occurred.";
  let validationErrors = null;

  if (error.response) {
    const responseData = error.response.data;

    if (responseData.validation_error) {
      // If validation errors exist, format them
      validationErrors = responseData.validation_error;
      errorMessage = "Validation failed. Please check the input fields.";

      // Log or process validation errors if needed
      console.error("Validation errors:", validationErrors);
    } else if (responseData.message) {
      // General error message
      errorMessage = responseData.message;
    }

    console.log(`Error ${error.response.status}: ${error.response.statusText}`);
    console.log("Response data:", responseData);
  } else if (error.request) {
    // Request was made, but no response was received
    errorMessage = "No response received from the server.";
    console.error("No response from the server:", error.request);
  } else {
    // Other errors (e.g., network issues)
    errorMessage = error.message;
    console.error("Error Message:", error.message);
  }

  return { errorMessage, validationErrors };
};
