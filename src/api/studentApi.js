import axios from 'axios';

export const getAllStudents = async () => {
  try {
    const response = await axios.get('http://localhost:8080/students',{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
};

export const getStudentById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/students/${id}`,{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching student with ID ${id}:`, error);
    throw error;
  }
};

export const getInternships= async ()=>{
    try{
        const response = await axios.get('http://localhost:8080/student/internships',{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching internships:', error);
        throw error;
    }
};


export const getMentorships = async ()=>{
  try{
    const response = await axios.get('http://localhost:8080/api/v1/alumni/all',{
      headers:{
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    });
    return response.data;
  }
  catch(error){
    console.error('Error fetching mentorships:', error);
    throw error;
  }
};

export const getSuccessStories = async ()=>{
  const token = localStorage.getItem("token");

  try{
    const response = await axios.get('http://localhost:8080/api/v1/student/getStory',{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    }); 
    return response.data;
  }
  catch(error){ 
    console.error('Error fetching success stories:', error);
    throw error;
  }
};
