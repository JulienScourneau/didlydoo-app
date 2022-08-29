export const getEvent = async (id) => {

    let response = await fetch(`http://localhost:3000/api/events/${id}`);
    return await response.json();
    
};