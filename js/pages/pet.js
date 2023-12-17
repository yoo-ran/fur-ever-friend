
// Modal Plugin
    // In modal, when user click some item of category, it will have dark-brwon background color
   $(".modal span").mousedown(function(){
        if(this.style.backgroundColor=="var(--dark-brown)"){
            this.style.backgroundColor = "var(--brown)";
        }else{
            this.style.backgroundColor = "var(--dark-brown)";
        }
    })

    // when User clicekd the clear button in modal, 
    // all the option will be clear, having brown background color
    $(".clearBtn").click(function(){
        $(".modal span").css("background-color","var(--brown)");
    })

    // On the pet profile card
    // when user click heart icon
    $(".fa-heart").click(function(){
        // if it was already filled with blue color, it will be empty
        // it means user disliked pet
        if(this.className == "fa-solid fa-heart"){
            this.className = "fa-regular fa-heart"
        }else{
            // if it was already empty, having only border
            // when user clicked it, it will be filled with blue color
            // it means user liked the pet
            this.className = "fa-solid fa-heart"
        }
    })