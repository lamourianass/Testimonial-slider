import { testimonials } from './testimonials.js'

const imgEl = document.querySelector('img')
const testimonialEl = document.querySelector('.text')
const nameEl = document.querySelector('.username')

let index = 0

function updateTestimonial() {
  const {name, photoUrl, testimonial} = testimonials[index]
  imgEl.src = photoUrl
  testimonialEl.textContent = testimonial
  
}
