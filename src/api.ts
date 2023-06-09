import axios from "axios";
import { Response } from "../models/NewsArticles";


export async function getData(url:string): Promise<Response> {
    try{
        const response = await axios.get(`${url}`);
        // console.log(response.data);
        return response.data;
    }catch(error: any){
        console.error("ERROR: ", error.message);
        throw error;
    }
}

export async function getCategoryData(category:string): Promise<Response> {
    try{
        const response = await axios.get(`https://feedparsify.cyclic.app/toi/feeds/${category}`);
        // console.log(response.data);
        return response.data;
    }catch(error: any){
        console.error("ERROR: ", error.message);
        throw error;
    }
}