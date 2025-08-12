import { testimonials } from './testimonials.js'

const imgEl = document.querySelector('img')
const testimonialEl = document.querySelector('.text')
const nameEl = document.querySelector('.username')

let index = 0

updateTestimonial()

function updateTestimonial() {
  const { name, photoUrl, testimonial } = testimonials[index]
  imgEl.src = photoUrl
  testimonialEl.textContent = testimonial
  nameEl.textContent = name
  index++
  setTimeout(() => {
    updateTestimonial()
  }, 2000)
}
