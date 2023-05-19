const updateSlides = (slides, activeSlideIndex, nextActiveSlideIndex) => {
  return slides.map((slide, index) => {
    if (index === activeSlideIndex) {
      slide.classList.remove('active');

      return slide;
    }

    if (index === nextActiveSlideIndex) {
      slide.classList.add('active');

      return slide;
    }

    return slide;
  });
};

const isInRange = (number, range) => {
  if (number > range || number < 1) {
    return false;
  }

  return true;
};

const createNewSlide = (imageSrc, titleText) => {
  const newSlide = document.createElement('div');
  newSlide.classList.add('slider-item');

  const newSlideImage = document.createElement('img');
  newSlideImage.src = imageSrc;
  newSlideImage.alt = titleText;

  const title = document.createElement('p');
  title.innerText = titleText;
  title.classList.add('title');

  newSlide.appendChild(newSlideImage);
  newSlide.appendChild(title);

  return newSlide;
};

class Slider {
  constructor(root) {
    this.root = root;
    this.slides = [...root.querySelectorAll('.slider-item')];
  }

  nextSlide() {
    const activeSlideIndex = this.getActiveSlideIndex();
    const nextActiveSlideIndex =
      activeSlideIndex === this.slides.length - 1 ? 0 : activeSlideIndex + 1;

    this.slides = updateSlides(
      this.slides,
      activeSlideIndex,
      nextActiveSlideIndex
    );
  }

  prevSlide() {
    const activeSlideIndex = this.getActiveSlideIndex();
    const nextActiveSlideIndex =
      activeSlideIndex === 0 ? this.slides.length - 1 : activeSlideIndex - 1;

    this.slides = updateSlides(
      this.slides,
      activeSlideIndex,
      nextActiveSlideIndex
    );
  }

  getActiveSlideIndex() {
    return this.slides.findIndex((slide) => slide.classList.contains('active'));
  }

  lastSlide() {
    const activeSlideIndex = this.getActiveSlideIndex();
    const nextActiveSlideIndex = this.slides.length - 1;

    if (activeSlideIndex === nextActiveSlideIndex) {
      return;
    }

    this.slides = updateSlides(
      this.slides,
      activeSlideIndex,
      nextActiveSlideIndex
    );
  }

  firstSlide() {
    const activeSlideIndex = this.getActiveSlideIndex();
    const nextActiveSlideIndex = 0;

    if (activeSlideIndex === nextActiveSlideIndex) {
      return;
    }

    this.slides = updateSlides(
      this.slides,
      activeSlideIndex,
      nextActiveSlideIndex
    );
  }

  openSlideByIndex(number) {
    if (!isInRange(number, this.slides.length)) {
      return;
    }

    const activeSlideIndex = this.getActiveSlideIndex();

    this.slides = updateSlides(this.slides, activeSlideIndex, number - 1);
  }

  removeSlide(number) {
    if (!isInRange(number, this.slides.length)) {
      return;
    }

    const index = number - 1;
    const slide = this.slides[index];

    const nextActiveSlideIndex =
      index === 0 ? this.slides.length - 1 : index - 1;

    if (slide.classList.contains('active')) {
      this.slides = updateSlides(this.slides, index, nextActiveSlideIndex);
    }

    slide.remove();
    this.slides.pop();

    if (this.slides.length === 0) {
      this.root.style.display = 'none';
    }
  }

  removeLastSlide() {
    this.removeSlide(this.slides.length);
  }

  addSlide(imageSrc, titleText) {
    const newSlide = createNewSlide(imageSrc, titleText);

    const sliderInner = this.root.querySelector('.slider-inner');
    sliderInner.appendChild(newSlide);

    this.slides.push(newSlide);
  }

  insertSlide(number, imageSrc, titleText) {
    if (!isInRange(number, this.slides.length)) {
      return;
    }

    const index = number - 1;
    const newSlide = createNewSlide(imageSrc, titleText);

    const insertPlaceEl = this.slides[index];
    insertPlaceEl.after(newSlide);

    this.slides.splice(index, 0, newSlide);
  }
}

const sliderEl = document.querySelector('#slider');
const slider = new Slider(sliderEl);

const prevButton = document.querySelector('.slider-control-prev');
const nextButton = document.querySelector('.slider-control-next');
const firstSlideButton = document.querySelector('.first-slide-button');
const lastSlideButton = document.querySelector('.last-slide-button');
const removeLastSlideButton = document.querySelector(
  '.remove-last-slide-button'
);

prevButton.addEventListener('click', () => {
  slider.prevSlide();
});

nextButton.addEventListener('click', () => {
  slider.nextSlide();
});

firstSlideButton.addEventListener('click', () => {
  slider.firstSlide();
});

lastSlideButton.addEventListener('click', () => {
  slider.lastSlide();
});

removeLastSlideButton.addEventListener('click', () => {
  slider.removeLastSlide();
});

slider.insertSlide(
  2,
  'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_480/public/Birman_body_6.jpg?itok=Me_xJBY1',
  'Birman Cat Breed'
);

slider.addSlide(
  'https://www.purina.com/sites/default/files/styles/kraken_generic_max_width_480/public/Bombay_body_6.jpg?itok=v2NCadbN',
  'Bombay Cat Breed'
);

// slider.openSlideByIndex(3)