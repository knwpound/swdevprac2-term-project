export default async function getTickets(token:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/ticketing`,{
        method: "GET",
        headers:{
            authorization: `Bearer ${token}`,
        },
    })
    if(!response.ok){
        throw new Error(`Failed to fecth tickets`)
    }

    return await response.json()
}