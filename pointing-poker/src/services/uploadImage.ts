import axios from 'axios';
export const uploadImage= async (file:File | null)=>{
    const imageData = new FormData();
    file && imageData.append("file", file);
    imageData.append("upload_preset", "pqlbzyac");
    const response = await axios.post("https://api.cloudinary.com/v1_1/pointingpoker/image/upload", 
    imageData)
    return response;
  }