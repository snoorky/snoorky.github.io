import axios from "axios";

export const APIProjects = axios.create({
    baseURL: '/projects.json'
})