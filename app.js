btnAmount = document.querySelector(".btn-amount")
btnPresentTime = document.querySelector(".btn-present-tense")



btnAmount.addEventListener("click",function(){
    miktarBelirtme()
})

function miktarBelirtme(){

    let main = document.querySelector("amount")
let some = document.querySelector(".some")
let any = document.querySelector(".any")
let alotof = document.querySelector(".alotof")

    alert("İNFO:Miktar belirtmek için 2 türde bilgi girmeniz gerekiyor.   1-)Cümle tipi: olumlu-olumsuz-soru.     2-)Miktar: cok-hic-biraz-birkac")

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


btnPresentTime.addEventListener("click",function(){
    presentTime()
})

function presentTime(){
    let presentTense = document.querySelector(".present-tense")

    let olumluA = document.querySelector(".olumlu-a")
    let olumluB = document.querySelector(".olumlu-b")
    let olumsuzA = document.querySelector(".olumsuz-a")
    let olumsuzB = document.querySelector(".olumsuz-b")
    let soruA = document.querySelector(".soru-a")
    let soruB = document.querySelector(".soru-b")

    let olumluAresult = document.querySelector(".olumlu-a-result")
    let olumluBresult = document.querySelector(".olumlu-b-result")
    let olumsuzAresult = document.querySelector(".olumsuz-a-result")
    let olumsuzBresult = document.querySelector(".olumsuz-b-result")
    let soruAresult = document.querySelector(".soru-a-result")
    let soruBresult = document.querySelector(".soru-b-result")

    alert("Basit geniş zaman cümlesi kurmak için girmeniz gerekenler sırası ile:  1-cümle tipi  2-özne  3-fiil  4-nesne")

    let sentenceType = prompt("Cümle tipi giriniz")
    let subject = prompt("Özne giriniz")
    let verb = prompt("Fiil giriniz")
    let object = prompt("Nesne giriniz")


    //Gizleme ve gösterme
    function show_hidden(){
        presentTense.classList.add("show")
        btnAmount.classList.add("hidden")
        btnPresentTime.classList.add("hidden")
    }

    //Olumlu--------------------------------------------
    if(sentenceType=="olumlu"){


        //I-you-we-they
        if(subject=="i"||subject=="you"||subject=="we"||subject=="they"){
             
               olumluA.classList.add("show")
               olumluAresult.innerHTML= subject + verb + object
               show_hidden()

        }
        //he-she-it
        else if(subject=="he"||subject=="she"||subject=="it"){
            olumluB.classList.add("show")
             verb=verb+"s"
               olumluBresult.innerHTML= subject + " " + verb + " " + object
            show_hidden()
        }
    }
    
    //Olumsuz------------------------------------------
    else if(sentenceType=="olumsuz"){
        
          //I-you-we-they
        if(subject=="i"||subject=="you"||subject=="we"||subject=="they"){
            olumsuzA.classList.add("show")
            olumsuzAresult.innerHTML= subject + " do not " + verb + " " + object
            show_hidden()
        }
        //he-she-it
        else if(subject=="he"||subject=="she"||subject=="it"){
           
            olumsuzB.classList.add("show")
              olumsuzBresult.innerHTML= subject + " does not " + verb + " " + object
           show_hidden()
        }
    }

    //Soru-----------------------------------------------
    else if(sentenceType=="soru"){
        
         //I-you-we-they
        if(subject=="i"||subject=="you"||subject=="we"||subject=="they"){
            soruA.classList.add("show")
            soruAresult.innerHTML= "Do " + subject + " " + verb + " " + object
            show_hidden()

        }

        //he-she-it
        else if(subject=="he"||subject=="she"||subject=="it"){
            soruB.classList.add("show")
            soruBresult.innerHTML= "Does " + subject + " " + verb + " " + object
         show_hidden()
        }
    }
}
