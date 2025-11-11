export default async function getEvent(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/events/${id}`)
    if(!response.ok){
        throw new Error(`Failed to fecth event ${id}`)
    }

    return await response.json()
}