export const deleteEvent = async (id) => {
    try {
        console.log("delete");
         const response = await fetch(`http://localhost:3000/api/events/${id}`, {
             method: "DELETE",
         });
         response.json().then((data) => {
             console.log(data);
        });
    } catch (error) {
        console.error(error);
    }
};
