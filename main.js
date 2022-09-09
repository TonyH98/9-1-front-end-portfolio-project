

const button = document.querySelectorAll(".button")

button.forEach((buttons) => {
    buttons.addEventListener("click", (event) => {
        event.preventDefault()
        let classes = document.querySelectorAll(".name")
        classes.forEach((ele) => {
            let names = ele.value.trim().split(' ').join('+')
            let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`
            fetch(url)
            .then((res) => res.json())
            .then((resJson) => {
                resJson.forEach((element) => {
                    console.log(element)
                })
            })
            .catch((error) => console.log(error))
        })
        let classes2 = document.querySelectorAll(".title")
        classes2.forEach((ele2) => {
            let titles = ele2.value.trim().split(' ').join('+')
            let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
            fetch(url2)
            .then((res2) => res2.json())
            .then((resJson2) => {
                resJson2.forEach((element2) => {
                    console.log(element2)
                })
            })
            .catch
         })
         });
        })
