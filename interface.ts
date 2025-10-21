interface EventItem {
  _id: string;
  name: string;
  description: string;
  eventDate: string;
  venue: string;
  organizer: string;
  availableTicket: number;
  posterPicture: string;
  __v: number;
}

interface EventJson {
  success: boolean;
  count: number;
  data: EventItem[];
}

interface User{
  email: string;
  name: string;
  role: string;
  tel: string;
  _id:string;
}

interface TicketItem {
  _id: string;
  user: User; 
  event: EventItem;
  ticketAmount: number;
}

interface TicketJson {
  success: boolean;
  count: number;
  data: TicketItem[];
}