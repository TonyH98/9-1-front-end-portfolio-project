const url = `https://animechan.vercel.app/api/quotes`

fetch(url)
.then((res) => res.json())
.then((resJson) => {
    console.log(resJson)
    // resJson.forEach((element) => {
    //     console.log(element.anime)
    // })
})
.catch(error => {
    console.log(error)
})