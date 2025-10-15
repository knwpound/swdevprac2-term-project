export default async function getCar(id:string) {
    const response = await fetch(`http://localhost:5000/api/v1/events/${id}`)
    if(!response.ok){
        throw new Error(`Failed to fecth event ${id}`)
    }

    return await response.json()
}