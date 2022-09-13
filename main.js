const anchor = document.querySelectorAll("a")
const button = document.querySelectorAll(".button")

let classes = document.querySelectorAll(".name")
let classes2 = document.querySelectorAll(".title")
const error = document.querySelector(".error")
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
const number = Math.floor(Math.random() * 10)
const form = document.querySelector("form")
console.log(form)


button.forEach((buttons) => {
   buttons.addEventListener("click", (event) => {
      event.preventDefault()
      let classes = document.querySelectorAll(".name")
      classes.forEach((ele) => {
         let names = ele.value.trim().split(' ').join('+')
         let url = `https://animechan.vercel.app/api/quotes/character?name=${names}`
         if(ele.value === ""){
            error.classList.remove("hidden")
         }
         else if (classes[0].value === names || classes[1].values === names || classes[2].value === names || classes[3].value === names || classes[4].value === names || classes[5].value === names){

            error.classList.add("hidden")
            fetch(url)
            .then((res) => res.json())
            .then((resJson) => {
               const quote = resJson[number].quote
               const character = resJson[number].character
               const anime = resJson[number].anime
               
               
               button[0].addEventListener("click", () => {
                  
                  p1.textContent = `"${quote}"`
                  p2.textContent = `-${character}: ${anime}`
                  
               }  
               )
               
               button[1].addEventListener("click", () => {
                  
                 
                  p3.textContent = `"${quote}"`
                  p4.textContent =  `-${character}: ${anime}`
               }  
               )
               
               button[2].addEventListener("click", () => {
                  
                 
                  p5.textContent = `"${quote}"`
                  p6.textContent = `-${character}: ${anime}`   
               }  
               
               )
               
               button[3].addEventListener("click", () => {
                  
                 
                  p7.textContent = `"${quote}"`
                  p8.textContent = `-${character}: ${anime}`   
               }  
               
               )
               button[4].addEventListener("click", () => {
                  
                
                  p9.textContent = `"${quote}"`
                  p10.textContent = `-${character}: ${anime}`   
               }  
               
               )
               button[5].addEventListener("click", () => {
                  
                 
                  p11.textContent = `"${quote}"`
                  p12.textContent = `-${character}: ${anime}`   
               }  
               
               ) 
               form.reset()
              
            })
            .catch((err) => console.log(err))
         }
      })
      
      let classes2 = document.querySelectorAll(".title")
      classes2.forEach((ele2) => {
         let titles = ele2.value.trim().split(' ').join('+')
         let url2 =  `https://animechan.vercel.app/api/quotes/anime?title=${titles}`
         event.preventDefault()
         if(ele2.value === ""){
            error.classList.remove("hidden")
         }
         else if (classes[0].value === titles || classes[1].values === titles || classes[2].value === titles || classes[3].value === titles || classes[4].value === titles || classes[5].value === titles){
            error.classList.add("hidden")
            fetch(url2)
            .then((res2) => res2.json())
            .then((resJson2) => {
               const quote = resJson2[number].quote
               const character = resJson2[number].character
               const anime = resJson2[number].anime    
               
               
               button[0].addEventListener("click", () => {
                  
                  
                  p1.textContent = `"${quote}"`
                  p2.textContent = `-${character}: ${anime}`
               }  
               
               )
               
               button[1].addEventListener("click", () => {
                  
                  
                  p3.textContent = `"${quote}"`
                  p4.textContent =  `-${character}: ${anime}`
               }  
               )
               
               button[2].addEventListener("click", () => {
                  
                  
                  p5.textContent = `"${quote}"`
                  p6.textContent = `-${character}: ${anime}`   
               }  
               
               )
               
               button[3].addEventListener("click", () => {
                  
                  
                  p7.textContent = `"${quote}"`
                  p8.textContent = `-${character}: ${anime}`   
               }  
               
               )
               button[4].addEventListener("click", () => {
                  
                  p9.textContent = `"${quote}"`
                  p10.textContent = `-${character}: ${anime}`   
               }  
               
               )
               button[5].addEventListener("click", () => {
                  
                  
                  
                  p11.textContent = `"${quote}"`
                  p12.textContent = `-${character}: ${anime}`   
                  
                  
               }) 
               form.reset()
            })
            .catch((err2) => console.log(err2))
         }
         })
      })
   })
   
   
   
   
   anchor.forEach((a) => {
            a.addEventListener("click", () => {
                a.style.color = "blue"
            })
        })
        

