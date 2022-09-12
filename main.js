

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

const anchor = document.querySelectorAll("a")

const aside = document.querySelector("aside")

//  let classes = document.querySelectorAll(".name")
// //  console.log(classes[0])

const number = Math.floor(Math.random() * 10)

// const form = document.querySelector("form")

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
                    if(classes[0].value === ""){
                       error[0].classList.remove("hiddem")
                    } 
                    else if(classes[0].value === names){
                       error[0].classList.add("hiddem")
                       p1.textContent = `"${quote}"`
                       p2.textContent = `-${character}: ${anime}`
                }  
                    
                    })
                    
                    button[1].addEventListener("click", () => {
                        if(classes[1].value === ""){
                            error[1].classList.remove("hiddem")
                         } 
                         else if(classes[1].value === names){
                            error[1].classList.add("hiddem")
                            p3.textContent = `"${quote}"`
                            p4.textContent =  `-${character}: ${anime}`
                     }  
                        })
                        
                        button[2].addEventListener("click", () => {
                        if(classes[2].value === ""){
                            error[2].classList.remove("hiddem")
                         } 
                         else if(classes[2].value === names){
                            error[2].classList.add("hiddem")
                            p5.textContent = `"${quote}"`
                            p6.textContent = `-${character}: ${anime}`   
                     }  
                        
                    })
                    
                    button[3].addEventListener("click", () => {
                        if(classes[3].value === ""){
                            error[3].classList.remove("hiddem")
                         } 
                         else if(classes[3].value === names){
                            error[3].classList.add("hiddem")
                            p7.textContent = `"${quote}"`
                            p8.textContent = `-${character}: ${anime}`   
                     }  
                        
                    })
                    button[4].addEventListener("click", () => {
                         if(classes[4].value === ""){
                             error[4].classList.remove("hiddem")
                          } 
                          else if(classes[4].value === names){
                             error[4].classList.add("hiddem")
                             p9.textContent = `"${quote}"`
                             p10.textContent = `-${character}: ${anime}`   
                      }  
                        
                    })
                    button[5].addEventListener("click", () => {
                        if(classes[5].value === ""){
                            error[5].classList.remove("hiddem")
                         } 
                         else if(classes[5].value === names){
                            error[5].classList.add("hiddem")
                            p11.textContent = `"${quote}"`
                            p12.textContent = `-${character}: ${anime}`   
                     }  
                        
                    }) 
                    form.reset()
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
                        if(classes2[0].value === ""){
                           error[0].classList.remove("hiddem")
                        } 
                        else if(classes2[0].value === titles){
                           error[0].classList.add("hiddem")
                           p1.textContent = `"${quote}"`
                           p2.textContent = `-${character}: ${anime}`
                    }  
                        
                        })
                        
                        button[1].addEventListener("click", () => {
                            if(classes2[1].value === ""){
                                error[1].classList.remove("hiddem")
                             } 
                             else if(classes2[1].value === titles){
                                error[1].classList.add("hiddem")
                                p3.textContent = `"${quote}"`
                                p4.textContent =  `-${character}: ${anime}`
                         }  
                            })
                            
                            button[2].addEventListener("click", () => {
                            if(classes2[2].value === ""){
                                error[2].classList.remove("hiddem")
                             } 
                             else if(classes2[2].value === titles){
                                error[2].classList.add("hiddem")
                                p5.textContent = `"${quote}"`
                                p6.textContent = `-${character}: ${anime}`   
                         }  
                            
                        })
                        
                        button[3].addEventListener("click", () => {
                            if(classes2[3].value === ""){
                                error[3].classList.remove("hiddem")
                             } 
                             else if(classes2[3].value === titles){
                                error[3].classList.add("hiddem")
                                p7.textContent = `"${quote}"`
                                p8.textContent = `-${character}: ${anime}`   
                         }  
                            
                        })
                        button[4].addEventListener("click", () => {
                             if(classes2[4].value === ""){
                                 error[4].classList.remove("hiddem")
                              } 
                              else if(classes2[4].value === titles){
                                 error[4].classList.add("hiddem")
                                 p9.textContent = `"${quote}"`
                                 p10.textContent = `-${character}: ${anime}`   
                          }  
                            
                        })
                        button[5].addEventListener("click", () => {
                            if(classes2[5].value === ""){
                                error[5].classList.remove("hiddem")
                             } 
                             else if(classes2[5].value === titles){
                                error[5].classList.add("hiddem")
                                p11.textContent = `"${quote}"`
                                p12.textContent = `-${character}: ${anime}`   
                         }  
                            
                        }) 

            })
            .catch((err2) => console.log(err2))
         })
         })
        })

        
        anchor.forEach((a) => {
            a.addEventListener("click", () => {
                a.style.color = "blue"
            })
        })
        

