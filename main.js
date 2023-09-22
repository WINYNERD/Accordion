let accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
        let accordionItem = this.closest('.accordion-item');
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            this.querySelector('.fa-solid').classList.remove('fa-chevron-down');
            this.querySelector('.fa-solid').classList.add('fa-chevron-up');
        } else {
            let activeItems = document.querySelectorAll('.accordion-item.active');
            activeItems.forEach(function (item) {
                item.classList.remove('active');
                item.querySelector('.fa-solid').classList.remove('fa-chevron-down');
                item.querySelector('.fa-solid').classList.add('fa-chevron-up');
            });
            accordionItem.classList.add('active');
            this.querySelector('.fa-solid').classList.remove('fa-chevron-up');
            this.querySelector('.fa-solid').classList.add('fa-chevron-down');
        }
    });
});
