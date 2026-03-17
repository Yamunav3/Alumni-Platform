import api from "./api";

export const getStudentById = async (id) => {
  try {
    const response = await api.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
    throw error;
  }
};

export const getInternships = async () => {
  try {
    const response = await api.get("/student/internships");
    return response.data;
  } catch (error) {
    console.error("Error fetching internships:", error);
    throw error;
  }
};

export const getMentorships = async () => {
  try {
    const response = await api.get("/api/v1/alumni/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching mentorships:", error);
    throw error;
  }
};

export const getSuccessStories = async () => {
  try {
    const response = await api.get("/api/v1/student/getStory");
    return response.data;
  } catch (error) {
    console.error("Error fetching success stories:", error);
    throw error;
  }
};

export const getEvents = async () => {
  try {
    const response = await api.get("/events/");
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
