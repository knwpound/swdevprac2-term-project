export default async function getTicket(id:string,token:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/ticketing/${id}`,{
        method: "GET",
        headers:{
            authorization: `Bearer ${token}`,
        },
    })
    if(!response.ok){
        throw new Error(`Failed to fecth ticket ${id}`)
    }

    return await response.json()
}