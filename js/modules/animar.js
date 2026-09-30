export default function animar() {

}

const sections = document.querySelectorAll('[data-anima="show-right"]');
console.log(sections)

sections.forEach((item) => {
  setTimeout(() => {
    item.classList.add('ativo');
  }, 300);
});