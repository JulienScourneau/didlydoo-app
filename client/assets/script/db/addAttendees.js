export const addAttendess = async (attendees,id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/events/${id}/attend`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": attendees.name,
                "date": attendees.dates,
               })
        });
        response.json().then(data =>{
            console.log(data);
        })
    } catch (error) {
        console.error(error);
    }
};
