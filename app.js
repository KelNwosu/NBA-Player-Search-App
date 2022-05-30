
const form = document.querySelector('#search');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://www.balldontlie.io/api/v1/players?per_page=100&search=${searchTerm}`);
    // const playerData =  (res.data.data[0]);
    const playerData = await (res.data.data[0]);
    let firstName = (res.data.data[0].first_name);
    let lastName = (res.data.data[0].last_name)
    const height = `${(res.data.data[0].height_feet)}ft `
    const heading = document.createElement('h2');
    heading.innerHTML = `${firstName} ${lastName}`;
    const playerDetails = document.createElement('p')
    playerDetails.innerHTML = height

    const searchBar = document.querySelector('#searchBar')
    searchBar.addEventListener('click', () => {
        searchBar.innerHTML = ''
    })



    document.body.append(heading)
    document.body.append(playerDetails)

    console.log(`This is ${firstName} ${lastName}`);
    console.log(playerData)
})









