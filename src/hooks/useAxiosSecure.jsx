import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app'
})

export const useAxiosSecure = () =>{
    const {logOut} = useAuth();
    const navigate = useNavigate();

useEffect(() => {
    // intercept request (client ----> server)
    axiosSecure.interceptors.request.use(config => {
        const token = `Bearer ${localStorage.getItem('access-token')}`
        if(token){
            config.headers.Authorization = token;
        }
        return config;
    })

    // intercept response  (client <---- server)
    axiosSecure.interceptors.response.use(response => response, async error => {
    if(error.response && error.response.status === 401 || error.response && error.response.status === 403){
        await logOut();
        navigate('/login')
    }
    return Promise.reject(error)
    })

} ,[logOut, navigate, axiosSecure])


return [axiosSecure]
}