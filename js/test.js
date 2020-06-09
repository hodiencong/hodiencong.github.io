async function test(){
    let event = await getEvents();
    console.table(event);
}