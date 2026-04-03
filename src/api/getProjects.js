import axios from "axios";

const API_BASE_URL = "https://my-portfolio-cms-10o2.onrender.com/api";

export const fetchProjects = async () => {
  const response = await axios.get(`${API_BASE_URL}/projects?populate=*&sort=order:asc`);
  return response.data.data;
};
