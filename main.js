
// let classes2 = document.querySelectorAll(".title")
// let titles = classes2.value.trim().split(' ').join('+')
// let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`

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
            
        });
        
        
    })
