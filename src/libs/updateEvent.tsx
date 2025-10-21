import dayjs from "dayjs";
import { getSession } from "next-auth/react";

export default async function updateEvent({
  eid,
  name,
  description,
  eventDate,
  venue,
  organizer,
  availableTicket,
  posterPicture,
}: {
  eid: string;
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
  // console.log("Session Details:", session);

  const response = await fetch(`http://localhost:5000/api/v1/events/${eid}`, {
    method: "PUT",
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
      errorData?.message || errorData?.error || "Failed to update event";
    alert(errorMessage);
    throw new Error(`Failed to update event ${eid}`);
  }

  return await response.json();
}
