const accordion = '.accordion',
      accordionBtn = '.accordion-button',
      accordionItem = '.accordion-item';

function initAcc(elem){
    document.addEventListener('click', function (e) {
        if (!e.target.matches(`${elem} ${accordionBtn}`)) return;
        else {
            const container = e.target.parentElement.parentElement;
            const button = container.querySelector(accordionBtn);
            if (!container.classList.contains('active')) {
                const elementList = document.querySelectorAll(`${elem} ${accordionItem}`);
                Array.prototype.forEach.call(elementList, function (e) {
                    e.classList.remove('active');
                    button.setAttribute('aria-expanded', 'true');
                });
                container.classList.add('active');
            } else {
                container.classList.remove('active');
                button.setAttribute('aria-expanded', 'false');
            }
        }
    });
}

initAcc(accordion);
