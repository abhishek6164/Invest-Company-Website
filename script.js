// header animation 
gsap.from('.logo div', {
    opacity: 0,
    delay: 1,
    x: 20
})

const menu_items = document.querySelector('.menu-items')

gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.5,
    stagger: {
        amount: 1
    }
})

// Stars animation jo scroll ho rhe hai from buttom to top automatically 
gsap.utils.toArray('.star').forEach(star => {
    gsap.fromTo(star, {
        rotation: 450,
        opacity: 0,
        y: 100
    }, {
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.5,
        scrollTrigger: star
    })
})

// Title Animation 
gsap.utils.toArray('.title').forEach(title => {
    gsap.fromTo(title, {
        letterSpacing: '10px',
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        letterSpacing: '0',
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .5,
        scrollTrigger: title
    })
})

// P tag animation  
gsap.utils.toArray('p').forEach(p => {
    gsap.fromTo(p, {
        opacity: 0,
        x: 150,
        skewX: 30
    }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .5,
        scrollTrigger: p
    })
})


// Button Tag animation 
gsap.utils.toArray('button').forEach(button => {
    gsap.fromTo(button, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: button
    })
})


// 1st page image animation 
gsap.from('.pyramid', {
    opacity: 0,
    scale: .5,
    duration: 1,
    delay: .5
})

// hand image animation 
gsap.fromTo('.hand',{
    scale:.2,
    opacity:0,
    skewY:30
},{
    scale:1,
    opacity:1,
    skewY:0,
    duration:1,
    delay:.5,
    scrollTrigger:'.hand'
})


// line animation 
gsap.utils.toArray('.line').forEach(line => {
    gsap.fromTo(line, {
        opacity: 0,
        width:'0%'
    }, {
        opacity: 1,
        width:'100%',
        duration: 1,
        delay: 1,
        scrollTrigger: line
    })
})

// boll image animation 

gsap.utils.toArray('.rotation').forEach(rotate=>{
    gsap.fromTo(rotate,{
        opacity:0,
        rotation:350,
        scale:.2
    },{
        opacity:1,
        rotation:0,
        scale:1,
        duration:1,
        delay:1,
        scrollTrigger:rotate

    })
})

// card animation 
gsap.fromTo('.card' ,{
    opacity:0,
    scale:.1,
},{
    opacity:1,
    scale:1,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:'.card'
})

const menu = document.querySelector('.menu')


//  3 cards images animation 
gsap.from(menu.children,{
    opacity:0,
    x:50,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:{
        trigger:menu.children
    }
})