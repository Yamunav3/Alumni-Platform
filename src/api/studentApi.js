import api from "./api";

export const getCount = async () => {
  try {
    const response = await api.get("/api/v1/admin/getcount");
    const data = response.data;
    if (Array.isArray(data)) {
      return { alumni: data[1] ?? 0, staff: data[2] ?? 0, students: data[0] ?? 0, events: data[3] ?? 0 };
    }
    return data;
  } catch (error) {
    console.error("Error fetching admin counts:", error);
    throw error;
  }
};

export const postStory = async (storyData) => {
  try {
    const response = await api.post("/api/v1/student/share_story", storyData);
    return response.data;
  } catch (error) {
    console.error("Error posting story:", error);
    throw error;
  }
};

export const getStudentById = async (id) => {
  try {
    const response = await api.get(`/students/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
    throw error;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await api.get("/api/v1/student/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

export const updateUser = async (id, data) => {
  try {
    const response = await api.put(`/api/v1/user/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
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

export const sendConnectionRequest = async (alumniId) => {
  console.log(alumniId);
  const res = await api.post(`/api/connections/${alumniId}`,null, {
    withCredentials: "include",
  });

  return res.data;
};

// export const uploadProfilePicture = (file )=>{
    // this api has been implemented in profile.tsx component itself
    
// }