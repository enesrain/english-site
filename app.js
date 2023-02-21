let main = document.querySelector("main")
let some = document.querySelector(".some")
let any = document.querySelector(".any")
let alotof = document.querySelector(".alotof")





alert("İNFO:Miktar belirtmek için 2 türde bilgi girmeniz gerekiyor.   1-)Cümle tipi: olumlu-olumsuz-soru.     2-)Miktar: cok-hic-biraz-birkac")



function kontrol(){



    //input------------------------------------
    let sentence = prompt("Cümle tipi giriniz:")
    let amount = prompt("Miktar giriniz:")





    //olumlu-------------------------------------
    if(sentence=="olumlu"){
     
        if(amount=="cok"){
        
         main.classList.add("show")
         alotof.classList.add("show")

        }
        else if(amount=="biraz"||amount=="bir kaç"){
            

            main.classList.add("show")
            some.classList.add("show")
        } 
    }



    //Olumsuz---------------------------------------
    else if(sentence=="olumsuz"){
        if(amount=="cok"){
            
             main.classList.add("show")
             alotof.classList.add("show")

           }
      
        
        else if(amount=="hic"){
             main.classList.add("show")
            any.classList.add("show")
           }
    }




    //Soru-------------------------------------------
    else if(sentence=="soru"){

        if(amount=="cok"){
            main.classList.add("show")
            alotof.classList.add("show")
        }
        else if(amount=="hic"){
               
             main.classList.add("show")
             any.classList.add("show")

           }
         else if(amount=="biraz"||amount=="bir kaç"){
            
            main.classList.add("show")
            some.classList.add("show")

         }

    }

}
kontrol()