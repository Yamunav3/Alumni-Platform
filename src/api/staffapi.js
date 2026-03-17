import api from "./api";

export const getAllStudents = async () => {
  try {
    const response = await api.get("/api/v1/student/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

export const getStaffDetails = async () => {
  try {
    const response = await api.get("/api/v1/staff/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching staff details:", error);
    throw error;
  }
};

export const postSuggestion = async (suggestionData) => {
  try {
    const payload = {
      student_name: suggestionData.student_name,
      title: suggestionData.title,
      content: suggestionData.content,
    };

    const response = await api.post("/api/v1/student/suggest", payload, {
      params: payload,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting suggestion:", error);
    throw error;
  }
};

export const getSuggestions = async () => {
  try {
    const response = await api.get("/api/v1/staff/get_suggestions");
    return response.data;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    throw error;
  }
};

export const getSuccessStories = async () => {
  try {
    const response = await api.get("/api/v1/staff/get_Story");
    return response.data;
  } catch (error) {
    console.error("Error fetching success stories:", error);
    throw error;
  }
};
