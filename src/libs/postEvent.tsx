import dayjs from "dayjs";
import { getSession } from "next-auth/react";

export default async function createEvent({
  name,
  description,
  eventDate,
  venue,
  organizer,
  availableTicket,
  posterPicture,
}: {
  name: string;
  description?: string;
  eventDate: dayjs.Dayjs;
  venue: string;
  organizer: string;
  availableTicket: number;
  posterPicture?: string;
}) {
  const session = await getSession();
  if (!session) {
    throw new Error("User is not authenticated.");
  }

  // Log session details for debugging
  console.log("Session Details:", session);

  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.token}`,
    },
    body: JSON.stringify({
      name,
      description,
      eventDate: eventDate.toISOString(),
      venue,
      organizer,
      availableTicket,
      posterPicture,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage =
      errorData?.message || errorData?.error || "Failed to create event";
    alert(errorMessage);
    throw new Error("Failed to create event");
  }

  return await response.json();
}
