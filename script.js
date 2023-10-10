const testimonials = [
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-3.jpg',
    name: 'Jena Karlis',
    title: 'Store Owner',
    alt: 'Image of',
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-4.jpg',
    name: 'Matt Brandon',
    title: 'Freelancer',    
    alt: 'Image of',

  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-5.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    alt: 'Image of',
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-2.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    alt: 'Image of',
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-1.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    alt: 'Image of',
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-2.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    alt: 'Image of',
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-2.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    alt: 'Image of',
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi veritatis pariatur quaerat illum, enim architecto nostrum adipisci, nesciunt culpa repellendus cumque, cupiditate perferendis ut libero voluptate aspernatur cum voluptatum!',
    image: '/Techie/img/testimonials/testimonials-2.jpg',
    name: 'John Larson',
    title: 'Entrepreneur',
    alt: 'Image of',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const testimonyPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonyPerPage);
  const testimonyPages = [];

  for (let currentPage = 0; currentPage < pageCount; currentPage++) {
    testimonyPage = testimonials.slice(
      currentPage * testimonyPerPage,
      Math.min(currentPage * testimonyPerPage + testimonyPerPage, testimonials.length)
    );

    console.log(currentPage * testimonyPerPage,
      Math.min(currentPage * testimonyPerPage + testimonyPerPage, testimonials.length));

    testimonyPages.push(testimonyPage);
  }

  const testimonialsElement = document.querySelector('#testimonialsCarousel .testimonials');
  const testimonialsIndicatorElement = document.querySelector('#testimonialsCarousel .testimony-indicators');
  
  testimonyPages.forEach((testimonyPage, page) => {
    let testimonialsHtml = `<div class="carousel-item${page == 0 ? ' active':''}">
      <div class="d-flex gap-5 justify-content-center">`;

    for (let i = 0; i < testimonyPage.length; i++) {
      const testimony = testimonyPage[i];
  
      const testimonyHtml = `
        <div class="testimony">
          <div class="testimony-body bg-light p-3 shadow rounded-3">
            ${testimony.content}
          </div>
          <div class="testimony-footer py-2 px-4 fw-bold">
            <div class="testimony-icon">
              <img class="testimony-icon" src="${testimony.image}" alt="${testimony.alt}">
            </div>	
            <div class="testimony-name mt-2">
              ${testimony.name}
            </div>
            <div class="testimony-title">
            ${testimony.title}
            </div>
          </div>
        </div>
      `;
      testimonialsHtml += testimonyHtml;
    }

    testimonialsHtml += '</div></div>';
    testimonialsElement.innerHTML += testimonialsHtml;
    testimonialsIndicatorElement.innerHTML += 
      `<button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="${page}" ${page == 0 ? 'class="active" aria-current="true"':''} aria-label="Page ${page + 1}"></button>`;
  });
});
