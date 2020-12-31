// initilizing all DOM elements /

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const panels = container.querySelectorAll('.panel');
  const currentTarget = e.target.classList;

  panels.forEach((element) => {
    if (
      element.classList.contains('active') !== currentTarget.contains('active')
    ) {
      element.classList.remove('active');
    }
  });

  if (currentTarget.contains('panel')) {
    currentTarget.add('active');
  }
});
