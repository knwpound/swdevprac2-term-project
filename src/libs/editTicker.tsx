export default async function updateTicket({
  ticketAmount,
  token,
  id,
}: {
  ticketAmount?: number;
  token: string;
  id: string;
}) {
  const response = await fetch(`http://localhost:5000/api/v1/ticketing/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ticketAmount,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage =
      errorData?.message || errorData?.error || "Failed to edit ticket";
    alert(errorMessage);

    throw new Error(
      `Failed to edit ticket detail ${id}. Status: ${response.status}.`
    );
  }

  return await response.json();
}
