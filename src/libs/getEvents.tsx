interface GetEventsParams {
  name?: string;
  page?: number;
  limit?: number;
  sort?: "asc" | "desc";
  sortBy?: string;
}

export default async function getEvents({
  name,
  page = 1,
  limit = 10,
  sort = "asc",
  sortBy,
}: GetEventsParams = {}) {

  try {
    // สร้าง query string
    const params = new URLSearchParams();
    if (name) params.append("name", name);
    params.append("page", page.toString());
    params.append("limit", limit.toString());
    params.append("sort", sort);
    if (sortBy) params.append("sortBy", sortBy);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/events?${params.toString()}`);

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
