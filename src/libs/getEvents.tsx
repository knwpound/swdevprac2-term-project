import { resolve } from "path"

export default async function getCars() {
    await new Promise((resolve)=>setTimeout(resolve,5000))

    const response = await fetch("http://localhost:5000/api/v1/events")
    if(!response.ok){
        throw new Error("Failed to fecth events")
    }
    return await response.json()
}