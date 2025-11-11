export default async function createTicket({
  event,
  ticketAmount,
  token,
}: {
  event: string;
  ticketAmount: number;
  token: string;
}) {
  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/ticketing`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      event,
      ticketAmount: Number(ticketAmount),
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage =
      errorData?.message || errorData?.error || "Failed to create reservation";
    alert(errorMessage);
    throw new Error("Failed to reserve ticket");
  }

  return await response.json();
}
