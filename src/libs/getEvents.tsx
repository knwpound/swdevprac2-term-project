interface GetEventsParams {
  name?: string;
  page?: number;
  limit?: number;
  sort?: "asc" | "desc";
}

export default async function getEvents({
  name,
  page = 1,
  limit = 10,
  sort = "asc",
}: GetEventsParams = {}) {
  // simulate delay
  await new Promise((r) => setTimeout(r, 5000));

  try {
    // สร้าง query string
    const params = new URLSearchParams();
    if (name) params.append("name", name);
    params.append("page", page.toString());
    params.append("limit", limit.toString());
    params.append("sort", sort);

    const response = await fetch(`http://localhost:5000/api/v1/events?${params.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}
