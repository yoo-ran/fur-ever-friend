

// Banner GSAP Animation
// Star Icon Animation
    gsap.fromTo(".star", {
    scale:0.5
    },
    {
    rotate:180,
    duration:2,
    repeat:-1,
    yoyo:true,
    ease:"elastic"
    });


// Banner GSAP Animation
// Image, Text, Button Animation
    const item = gsap.timeline({
        scrollTrigger: {
        trigger: ".banner",
        start: "top top",
        end: "+=900",
        scrub: 1,
        pin: true
        }
    });

    // when scroll is down and it left the banner, 
    // banner image, text, button will disappear
    // when scroll goes up and enter the banner
    // banner image, text, button will appear again
    item.to(".bannerImg", {opacity:0,y:0,duration:0.1, ease:"back"});
    item.to([".bannerH1",".bannerP"], {opacity:0,y:0, ease:"back"});
    item.to(".bannerBtn", {opacity:0,duration:1,ease:"back"});


// GSAP Animation
// Dog Footprint in Scrolla part
    gsap.to(".footprint",{scale:1.2, yoyo:true, repeat:-1, ease:"bounce", duration:1})


// Number Count Plugin
// Count start
    // I made funtion counting for scrolltrigger
    // When user scrolldown, this function will run which is counting number
    const counting = () => {
        // "counto" Plugin to count number
        $('#adoption').counto(1100, 2000);
        $('#rescue').counto(2048, 2000);
        $('#client').counto(950, 2000);
        $('#services').counto(410, 2000);
    }

    // Sanitize number in Counter box to restart
    // When user scroll up or down, leaving count part, the number will be 0 to restart again
    function clear() {
        $("#adoption").text("0");
        $("#rescue").text("0");
        $("#client").text("0");
        $("#services").text("0");
    }

    // Counter scroll
    // Based on .counterBox position, 
    // when the scroll is above the .counterBox 60%, the count plugin will run
    // when the scroll is almost middle of the .counterBox, the count plugin will run
    const count = gsap.timeline({
        scrollTrigger: {
            trigger: ".counterBox",
            start: "top-=60% top",
            end: "bottom-=50%",
            scrub: 1,

            // when the scroll-start enters the Start  of .counterBox, count plugin will run
            onEnter: () => counting(),
            // when the scroll-start leave the Star of .counterBox the number will be zero
            onLeave: () => clear(),
            // when the scroll-start enter the end of the End of .counterBox, count plugin will run
            onEnterBack: () => counting(),
            // when the scroll-start leave the end of the End of .counterBox, the number will be zero
            onLeaveBack: () => clear()
        }
    });



// Drag DropDown
    // Dragon plugin
    $('.dragCat').dragon({
        // user can drag only x axis way
        'axis':'x',
        // I set the limitation
        // dragging is accessible only in the .dragBox article
        'within': $('.dragBox article'),
    });

    // Heart animation | GSAP
    // When the cat reached to the house, the heart image will have animation
    var heartAnimate = gsap.to(".heart", {
        scale:1.5,
        repeat:-1,
        yoyo:true,
        ease:"bounce",
        duration:2
    })
 
    // Add Animation and functioanlity to drag plug in
    // When the cat is being dragged, this function will run
    // Eventlistener is in #dragCat img tag, ondrag="drop()"
    const drop = () => {
        const cat = $(".dragCat");
        // Set variable of position left of image cat
        // whenever user drags the cat, the cat's position will be changed so I used" let"
        let catX= cat.position().left

        const house = $(".dragHouse")
        // Set variable of position left of image house
        // house's position won't be changed, so I used "const"
        const houseX = house.position().left
        const heart = $(".heart")
        // I removed cursor style of cat
        cat.css("cursor","none")
        // when cat's position and house's position is same, which means the cat reached the house
        if(catX == houseX){
            // cat image changed to happy cat image which is smiling
            cat.attr("src","/images/drag/happyCat.png")
            // then house will disappear
            house.css("opacity","0")
            // and heart will appear
            heart.css("opacity","1")
            // and heart is beating
            // heartanimation will be run by GSAP method play()
            heartAnimate.play()
        }else{
            // if cat's position and house's position is not same, which means the cat didn't reach to house or it left house
            // happy cat turned to regular cat
            cat.attr("src","/images/drag/cat.png")
            // and house appears again
            house.css("opacity","1")
            // heart disappears
            heart.css("opacity","0")
        }
    }






// GSAP SCroll Trigger 
// Call to action 
// This is from plugin
    gsap.registerPlugin(ScrollTrigger);

    let container = document.querySelector(".slides"),
    slides = gsap.utils.toArray(".slide"),
    getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

    slides.forEach((slide, i) => {
    let bg = slide.querySelector(".background"),
        content = slide.querySelector(".content"),
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: slide,
                start: () => i ? "top bottom" : "top top",
                end: "bottom top",
                scrub: true,
                invalidateOnRefresh: true
            }
        });

        tl.fromTo(bg, {
            y: () => i ? -window.innerHeight * getRatio(slide) : 0
        }, {
            y: () => window.innerHeight * (1 - getRatio(slide)),
            ease: "none"
        });
        tl.fromTo(content, {
            y: () => i ? window.innerHeight * -getRatio(slide) * 2 : 0
        }, {
            y: () => window.innerHeight * getRatio(slide) * 2,
            ease: "none"
        }, 0);
    });


