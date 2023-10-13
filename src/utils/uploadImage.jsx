import axios from "axios";


export const imgUploadToImgBB = async file => {              
        const formData = new  FormData();
        formData.append("key", "15abb5d6d10c5792735d187ebb3d95b0")
        formData.append("image", file)

        const response = await axios.post("https://api.imgbb.com/1/upload", formData);
        const imageUrl = response.data.data.url;       
        return imageUrl;

}

export default imgUploadToImgBB;