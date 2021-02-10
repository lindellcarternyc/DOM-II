const randomSelection = (array) => () => {
    return array[Math.floor(Math.random() * array.length)]
}

const RANDOM_COLORS = [
    'red', 'yellow', 'orange', 
    'purple', 'teal', 'paleviolet',
    'green', 'blue', 'turquoise',
    'lightblue', 'olive', 'pink'
]
const pickRandomColor = randomSelection(RANDOM_COLORS)

// change color of nav links on mouseenter
// inherit color on mouseleave
const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseenter', () => {
        const randomColor = pickRandomColor()
        navLink.style.color = randomColor
    })

    navLink.addEventListener('mouseleave', () => {
        navLink.style.color = 'inherit'
    })

    navLink.addEventListener('click', evt => {
        evt.preventDefault()
        alert(`You Clicked: ${navLink.textContent}`)
    })

    navLink.addEventListener('mouseover', evt => {
        const { clientX, clientY } = evt
        console.log(clientX, clientY)
    })

    navLink.addEventListener('focus', evt => {
        const text = evt.target.textContent

        alert(`Click ${evt.target.textContent} if you want to navigate to '${text}'`)
    })
})

const textContentEls = document.querySelectorAll('.text-content')
textContentEls.forEach(textContentEl => {
    textContentEl.addEventListener('dblclick', () => {
        alert(`You double clicked a text content div`)
    })

    const textContentTitle = textContentEl.querySelector('h2')
    textContentTitle.addEventListener('dblclick', evt => {
        evt.stopPropagation()
        alert(`Stopped something happening ... dblclick! - ${textContentTitle.textContent}`)

    })
})

const logoHeading = document.querySelector('.logo-heading')
window.addEventListener('keydown', () => {
    logoHeading.style.color = pickRandomColor()
})

window.addEventListener('wheel', () => {
    alert('You just used the wheel :)')
})

const getScollPerc = () => {
    const perc = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    return perc * 100
}

const scrollTracker = document.createElement('div')
scrollTracker.style.position = 'fixed'
scrollTracker.style.width = `${getScollPerc()}%`
scrollTracker.style.height = '5px'
scrollTracker.style.backgroundColor = 'green'
scrollTracker.style.bottom = '0px'


document.querySelector('body').appendChild(scrollTracker)
document.addEventListener('scroll', () => {
    scrollTracker.style.width = `${getScollPerc()}%`
})

document.addEventListener('resize', () => {
    alert('I think you just changed this size :)')
})