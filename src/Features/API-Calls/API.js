import axios from 'axios';

/**
 * calls the API and returns all tickets
 * @returns initially all tickets that are stored at their ID (UUID)
 *  then flattens out the data by maping over each ticket and storing the tickets into an array of objects 
 */
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

/**
 * @param {the payload from the form} ticket 
 * stores the ticket into the database with the auto generated UUID as its key in the DB
 */
export const putNewTicket = async (ticket) => {
  let ticketId = ticket.id;
  axios.put(`https://ticket-master-428d7-default-rtdb.firebaseio.com/tickets/${ticketId}.json`, ticket);
};
