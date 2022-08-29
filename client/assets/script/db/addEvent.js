export const addEvent = async (event) => {
    try {
        const response = await fetch(`http://localhost:3000/api/events`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": event.name,
                "description": event.description,
                "dates": event.dates,
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
