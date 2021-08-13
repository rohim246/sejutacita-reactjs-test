import axios from "axios"

export const fetchArticleData = async () => {
    const response = await axios.get("https://today.line.me/id/portaljson")
    return response.data
}