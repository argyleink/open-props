let containers = [];
let linkMap = {};
let matches = new Set();
const scrollNavLinkSelector = '#scroll-nav li a';

// Find out what the IDs are for the parent containers
// <a href="#colors"></a> => <section id="colors"></section>
for(let link of document.querySelectorAll(scrollNavLinkSelector)) {
  const containerId = link.href.replace(`${location.origin}/`, '');
  const container = document.querySelector(containerId);
  containers = [...containers, container];
  linkMap[containerId] = document.querySelector(`a[href="${containerId}"]`);
}

let observer = new IntersectionObserver(entries => {
  for(let entry of entries) {
    // Get the id of the container
    const id = entry.target.id;
    // Find it's corresponding link
    const link = linkMap[`#` + id];
    // Highlight the link of the interesecting container
    // and remove any existing containers
    if(entry.isIntersecting) {
      link.classList.add('in-view')
      for (let match of matches) {
        const matchedLink = linkMap[`#${match}`];
        matchedLink.classList.remove('in-view')
        matches.delete(id);
      }
      matches.add(id);
    } else {
      // Delete entries once they no longer intersect
      link.classList.remove('in-view')
      matches.delete(id);
    }
  }
  // Set a threshold of 10% of the target's visibility to trigger the 
  // observer's calback. This will trigger the new section faster and
  // help keep multiple sections higlighted.
}, { threshold: .1 });

for (let container of containers) {
  observer.observe(container);      
}