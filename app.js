const tvform = document.getElementById('search')
tvform.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchterm = document.getElementById('seaval').value;
    const config={params:{q:searchterm} }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    makeimages(res.data);   
    console.log(res.data)

})
const makeimages = (shows) => {
    for (imgpic of shows) {
        const imgele = document.createElement('img')
        imgele.src = imgpic.show.image.medium;
        document.body.append(imgele)
    }
}
