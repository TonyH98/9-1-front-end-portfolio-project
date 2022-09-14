const anchor = document.querySelectorAll("a")
const button = document.querySelectorAll(".button")

const error = document.querySelectorAll(".error")
const p1 = document.querySelector(".quote")
const p2 = document.querySelector(".character")
const p3 = document.querySelector(".quote2")
const p4 = document.querySelector(".character2")
const p5 = document.querySelector(".quote3")
const p6 = document.querySelector(".character3")
const p7 = document.querySelector(".quote4")
const p8 = document.querySelector(".character4")
const p9 = document.querySelector(".quote5")
const p10 = document.querySelector(".character5")
const p11 = document.querySelector(".quote6")
const p12 = document.querySelector(".character6")
const form = document.querySelector("form")



let classes = document.querySelectorAll(".name")
classes.forEach(() => {
   
   let url = `https://animechan.vercel.app/api/quotes/character?name=Luffy`
   fetch(url)
   .then((res) => res.json())
   .then((resJson3) => {
      
      const number = Math.floor(Math.random() * 10)
      const quote = resJson3[number].quote
      const character = resJson3[number].character
      const anime = resJson3[number].anime
      
      p1.textContent = `"${quote}"`
      p2.textContent = `-${character}: ${anime}`
      
      p3.textContent = `"${quote}"`
      p4.textContent =  `-${character}: ${anime}`
      
      p5.textContent = `"${quote}"`
      p6.textContent = `-${character}: ${anime}`   
      
      p7.textContent = `"${quote}"`
      p8.textContent = `-${character}: ${anime}`   
      
      p9.textContent = `"${quote}"`
      p10.textContent = `-${character}: ${anime}`   
      
      p11.textContent = `"${quote}"`
      p12.textContent = `-${character}: ${anime}`   
      
   })
   .catch()
})


let classes2 = document.querySelectorAll(".title")




button[0].addEventListener("click", (event) => {
   event.preventDefault()
   let names = classes[0].value.trim().split(' ').join('+')
   let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`

   
      fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
         const number = Math.floor(Math.random() * 10)
         const quote = resJson[number].quote
         const character = resJson[number].character
         const anime = resJson[number].anime
         
         p1.textContent = `"${quote}"`
         p2.textContent = `-${character}: ${anime}`

         form.reset()
         
      })
      .catch((err) => console.log(err))

   let titles = classes2[0].value.trim().split(' ').join('+')
   let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
   if(!titles && !names){
      error[0].classList.remove("hidden")
   }
   else if (titles || names){
      error[0].classList.add("hidden")
      fetch(url2)
      .then((res) => res.json())
      .then((resJson) => {
         const number = Math.floor(Math.random() * 10)
         const quote = resJson[number].quote
        const character = resJson[number].character
         const anime = resJson[number].anime
        
         p1.textContent = `"${quote}"`
        p2.textContent = `-${character}: ${anime}`
        form.reset()
        
      })
      .catch((err) => console.log(err))
  }
   })
   


   
   button[1].addEventListener("click", (event) => {
       event.preventDefault()
      let names = classes[1].value.trim().split(' ').join('+')
      let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`
          fetch(url)
          .then((res) => res.json())
          .then((resJson) => {
             const number = Math.floor(Math.random() * 10)
             const quote = resJson[number].quote
            const character = resJson[number].character
             const anime = resJson[number].anime
            
             p3.textContent = `"${quote}"`
            p4.textContent = `-${character}: ${anime}`
            
          })
          .catch((err) => console.log(err))
          let titles = classes2[1].value.trim().split(' ').join('+')
          let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
      if(!titles && !names){
         error[1].classList.remove("hidden")
      }
      else if(titles || names){
         error[1].classList.add("hidden")
         fetch(url2)
         .then((res) => res.json())
         .then((resJson) => {
            const number = Math.floor(Math.random() * 10)
            const quote = resJson[number].quote
           const character = resJson[number].character
            const anime = resJson[number].anime
           
            p3.textContent = `"${quote}"`
           p4.textContent = `-${character}: ${anime}`
           
         })
         .catch((err) => console.log(err))
     }
       })

       button[2].addEventListener("click", (event) => {
         event.preventDefault()
        let names = classes[2].value.trim().split(' ').join('+')
        let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`
            fetch(url)
            .then((res) => res.json())
            .then((resJson) => {
               const number = Math.floor(Math.random() * 10)
               const quote = resJson[number].quote
              const character = resJson[number].character
               const anime = resJson[number].anime
              
               p5.textContent = `"${quote}"`
              p6.textContent = `-${character}: ${anime}`
              
            })
            .catch((err) => console.log(err))
            let titles = classes2[2].value.trim().split(' ').join('+')
            let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
        if(!titles && !names){
           error[2].classList.remove("hidden")
        }
        else if(titles || names){
           error[2].classList.add("hidden")
           fetch(url2)
           .then((res) => res.json())
           .then((resJson) => {
              const number = Math.floor(Math.random() * 10)
              const quote = resJson[number].quote
             const character = resJson[number].character
              const anime = resJson[number].anime
             
              p5.textContent = `"${quote}"`
             p6.textContent = `-${character}: ${anime}`
             
           })
           .catch((err) => console.log(err))
       }
         })
       
      
         button[3].addEventListener("click", (event) => {
            event.preventDefault()
           let names = classes[3].value.trim().split(' ').join('+')
           let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`
               fetch(url)
               .then((res) => res.json())
               .then((resJson) => {
                  const number = Math.floor(Math.random() * 10)
                  const quote = resJson[number].quote
                 const character = resJson[number].character
                  const anime = resJson[number].anime
                 
                  p7.textContent = `"${quote}"`
                 p8.textContent = `-${character}: ${anime}`
                 
               })
               .catch((err) => console.log(err))
               let titles = classes2[3].value.trim().split(' ').join('+')
               let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
           if(!titles && !names){
              error[3].classList.remove("hidden")
           }
           else if(titles || names){
              error[3].classList.add("hidden")
              fetch(url2)
              .then((res) => res.json())
              .then((resJson) => {
                 const number = Math.floor(Math.random() * 10)
                 const quote = resJson[number].quote
                const character = resJson[number].character
                 const anime = resJson[number].anime
                
                 p7.textContent = `"${quote}"`
                p8.textContent = `-${character}: ${anime}`
                
              })
              .catch((err) => console.log(err))
          }
            })


            button[4].addEventListener("click", (event) => {
               event.preventDefault()
              let names = classes[4].value.trim().split(' ').join('+')
              let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`
                  fetch(url)
                  .then((res) => res.json())
                  .then((resJson) => {
                     const number = Math.floor(Math.random() * 10)
                     const quote = resJson[number].quote
                    const character = resJson[number].character
                     const anime = resJson[number].anime
                    
                     p9.textContent = `"${quote}"`
                    p10.textContent = `-${character}: ${anime}`
                    
                  })
                  .catch((err) => console.log(err))
                  let titles = classes2[4].value.trim().split(' ').join('+')
                  let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
              if(!titles && !names){
                 error[4].classList.remove("hidden")
              }
              else if(titles || names){
                 error[4].classList.add("hidden")
                 fetch(url2)
                 .then((res) => res.json())
                 .then((resJson) => {
                    const number = Math.floor(Math.random() * 10)
                    const quote = resJson[number].quote
                   const character = resJson[number].character
                    const anime = resJson[number].anime
                   
                    p9.textContent = `"${quote}"`
                   p10.textContent = `-${character}: ${anime}`
                   
                 })
                 .catch((err) => console.log(err))
             }
               })

               button[5].addEventListener("click", (event) => {
                  event.preventDefault()
                 let names = classes[5].value.trim().split(' ').join('+')
                 let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`
                     fetch(url)
                     .then((res) => res.json())
                     .then((resJson) => {
                        const number = Math.floor(Math.random() * 10)
                        const quote = resJson[number].quote
                       const character = resJson[number].character
                        const anime = resJson[number].anime
                       
                        p11.textContent = `"${quote}"`
                       p12.textContent = `-${character}: ${anime}`
                       form.reset()
                       
                     })
                     .catch((err) => console.log(err))
                     let titles = classes2[5].value.trim().split(' ').join('+')
                     let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
                 if(!titles && !names){
                    error[5].classList.remove("hidden")
                 }
                 else if(titles || names){
                    error[5].classList.add("hidden")
                    fetch(url2)
                    .then((res) => res.json())
                    .then((resJson) => {
                       const number = Math.floor(Math.random() * 10)
                       const quote = resJson[number].quote
                      const character = resJson[number].character
                       const anime = resJson[number].anime
                      
                       p11.textContent = `"${quote}"`
                      p12.textContent = `-${character}: ${anime}`

                      form.reset()
                      
                    })
                    .catch((err) => console.log(err))
                }
                  })     



   anchor.forEach((a) => {
            a.addEventListener("click", () => {
                a.style.color = "blue"
            })
        })
        

