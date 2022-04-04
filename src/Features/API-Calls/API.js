import axios from 'axios';

export const fetchAllTickets = async () => {
  const response = await fetch('https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets.json');
  const data = await response.json();
  const flatData = Object.keys(data).map(key => {
    return {
      ...data[key],
      id: key
    }
  });
  return flatData;
};

export const putNewTicket = async (ticket) => {
  let ticketId = ticket.id;
  console.log(ticketId)
  axios.put(`https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets/${ticketId}.json`, ticket);
};
