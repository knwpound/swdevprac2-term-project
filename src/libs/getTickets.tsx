export default async function getTickets(token:string) {
    const response = await fetch(`http://localhost:5000/api/v1/ticketing`,{
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