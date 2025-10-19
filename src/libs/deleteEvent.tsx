export default async function deleteEvent(id:string,token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/events/${id}`,{
        method: "DELETE",
        headers:{
            authorization: `Bearer ${token}`,
        },
    })
    if(!response.ok){
        throw new Error(`Failed to delete event ${id}`)
    }

    return await response.json()
}