

const button = document.querySelectorAll(".button")
const error = document.querySelectorAll(".error")
const p1 = document.querySelector(".quote")
const p2 = document.querySelector(".character")
const p3 = document.querySelector(".quote2")
const p4 = document.querySelector(".character2")
const p5 = document.querySelector(".quote3")
const p6 = document.querySelector(".character3")

const anchor = document.querySelectorAll("a")

const aside = document.querySelector("aside")

 let classes = document.querySelectorAll(".name")
 console.log(classes[0])

const number = Math.floor(Math.random() * 10)

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
                    const quote = resJson[number].quote
                    const character = resJson[number].character
                    const anime = resJson[number].anime
                    
                    
                   button[0].addEventListener("click", () => {
                       p1.textContent = `"${quote}"`
                       p2.textContent = `-${character}: ${anime}`
                      
                    })
                  
                    
                    button[1].addEventListener("click", () => {
                        
                        p3.textContent = `"${quote}"`
                        p4.textContent =  `-${character}: ${anime}`
                        
                    })
                    
                    button[2].addEventListener("click", () => {
                        p5.textContent = `"${quote}"`
                        p6.textContent = `-${character}: ${anime}`   
                        
                    })
                    
                    button[3].addEventListener("click", () => {
                        p5.textContent = `"${quote}"`
                        p6.textContent = `-${character}: ${anime}`   
                        
                    })
                     button[4].addEventListener("click", () => {
                        p5.textContent = `"${quote}"`
                        p6.textContent = `-${character}: ${anime}`   
                        
                    })
                    button[5].addEventListener("click", () => {
                        p5.textContent = `"${quote}"`
                        p6.textContent = `-${character}: ${anime}`   
                        
                    }) 
            })
            .catch((err) => console.log(err))
        })

        let classes2 = document.querySelectorAll(".title")
        classes2.forEach((ele2) => {
            let titles = ele2.value.trim().split(' ').join('+')
            let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
            fetch(url2)
            .then((res2) => res2.json())
            .then((resJson2) => {
                    const quote = resJson2[number].quote
                    const character = resJson2[number].character
                    const anime = resJson2[number].anime    

                    button[0].addEventListener("click", () => {
                        p1.textContent = `"${quote}"`
                        p2.textContent = `-${character}: ${anime}`
                     })
                   
                     
                     button[1].addEventListener("click", () => {
                         
                         p3.textContent = `"${quote}"`
                         p4.textContent =  `-${character}: ${anime}`
                         
                     })
                     
                     button[2].addEventListener("click", () => {
                         p5.textContent = `"${quote}"`
                         p6.textContent = `-${character}: ${anime}`   
                         
                     })

                     button[3].addEventListener("click", () => {
                        p5.textContent = `"${quote}"`
                        p6.textContent = `-${character}: ${anime}`   
                        
                    })
                    button[4].addEventListener("click", () => {
                        p5.textContent = `"${quote}"`
                        p6.textContent = `-${character}: ${anime}`   
                        
                    })
                    button[5].addEventListener("click", () => {
                        p5.textContent = `"${quote}"`
                        p6.textContent = `-${character}: ${anime}`   
                        
                    })
            })
            .catch((err2) => console.log(err2))
         })
         });
        })

        
        anchor.forEach((a) => {
            a.addEventListener("click", () => {
                a.style.color = "blue"
            })
        })
        

