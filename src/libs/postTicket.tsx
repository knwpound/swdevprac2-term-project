export default async function createTicket({
  event,
  ticketAmount,
  token,
}: {
  event: string;
  ticketAmount: number;
  token: string;
}) {
  const response = await fetch("http://localhost:5000/api/v1/ticketing", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      event,
      ticketAmount,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to reserve ticket");
  }

  return await response.json();
}
