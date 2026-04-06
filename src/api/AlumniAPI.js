import api from "./api";

// import { console } from "console";

const normalizeText = (value, separator = ", ") => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean).join(separator);
  }

  return typeof value === "string" ? value.trim() : "";
};

export const postJob = async (jobData) => {
  try {
    const payload = {
      jobtitle: jobData.jobtitle ?? jobData.title ?? "",
      company: jobData.company ?? "",
      location: jobData.location ?? "",
      jobtype: jobData.jobtype ?? jobData.type ?? "Full-time",
      salary_range: jobData.salary_range ?? jobData.salary ?? "",
      jobdescription: jobData.jobdescription ?? jobData.description ?? "",
      responsibilities: normalizeText(jobData.responsibilities, "\n"),
      qualifications: normalizeText(jobData.qualifications, "\n"),
      benefits: normalizeText(jobData.benefits, "\n"),
      requiredskills: normalizeText(jobData.requiredskills ?? jobData.skills),
      email: jobData.email ?? jobData.contactEmail ?? "",
    };

    const params = {
      jobtitle: payload.jobtitle,
      company: payload.company,
      location: payload.location,
      jobtype: payload.jobtype,
      salary_range: payload.salary_range,
      jobdescription: payload.jobdescription,
      requiredskills: payload.requiredskills,
      responsibilities: payload.responsibilities,
      qualifications: payload.qualifications,
      benefits: payload.benefits,
      email: payload.email,
    };

    const endpoints = ["/alumni/add_job", "/api/v1/alumni/add_job"];
    let lastError;

    for (const endpoint of endpoints) {
      try {
        const response = await api.post(endpoint, payload, {
          params,
        });
        return response.data;
      } catch (error) {
        lastError = error;
        const status = error?.response?.status;

        // Retry only when the route may be protected/misrouted.
        if (status !== 403 && status !== 404) {
          throw error;
        }
      }
    }

    throw lastError;
  } catch (error) {
    console.error("Error posting job:", error);
    throw error;
  }
};

export const poststory = async (data)=>{

  try{
     const payload = {
       title:data.title??"",
       content:data.content??"",
       author:data.author,
     };
    

     try{
        const response = await api.post("/api/v1/alumni/share_story",payload,{params:payload});
         return response.data;
     }catch(error){
      const status = error?.response?.status;

      if(status!=403 && status !=404)
         throw error;
     }
  }catch(error){
    console.log("Error in posting Story ....");
    throw error;
  }
};


export const postEvent = async (data)=>{
    try{
      const payload = {
        eventname:data.eventname,
        eventtype:data.eventtype,
        description:data.description,
        image:data.image,
        time:data.time,
        location:data.location,
        date:data.date,
      };

      try {
       const response = await api.post("/events/addEvent",payload,{params:payload});
       return response.data;
        
      } catch (error) {
        const status = error?.response?.status;

      if(status!=403 && status !=404)
         throw error;
      }
    }catch(err){
      console.error(err.msg);
      throw err;
    }
}