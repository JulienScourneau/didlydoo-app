

export const updateEvent = async (id,event) => {
    try {
        const response = await fetch(`http://localhost:3000/api/events/${id}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": event.name,
                "description": event.description,
                "author": event.author
               })
        });
        response.json().then(data =>{
            console.log(data);
        })
    } catch (error) {
        console.error(error);
    }
};

const updateDate = async (id,dates) =>{
    try {
        const response = await fetch(`http://localhost:3000/api/events/${id}/add_dates`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "dates": dates
            })
        })
        
    } catch (error) {
        console.error(error);
    }
}