
const form = document.querySelector('#search');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://www.balldontlie.io/api/v1/players?per_page=100&search=${searchTerm}`);
    // const playerData =  (res.data.data[0]);
    const playerData = await (res.data.data[0]);
    let firstName = (res.data.data[0].first_name);
    let lastName = (res.data.data[0].last_name)
    let weight = `${(res.data.data[0].weight_pounds)} lbs`
    const height = `${(res.data.data[0].height_feet)} ft ${(res.data.data[0].height_inches)} in`
    const heading = document.createElement('h2');
    const team = (res.data.data[0].team.full_name);
    heading.innerHTML = `${firstName} ${lastName} - ${team}`;
    const playerDetails = document.createElement('h3')
    playerDetails.innerHTML = `${height} ${weight}`


    document.body.append(heading)
    document.body.append(playerDetails)

    console.log(`This is ${firstName} ${lastName}`);
    console.log(playerData)
})









