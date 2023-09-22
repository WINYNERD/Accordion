
let accordionHeaders = document.querySelectorAll('.accordion-header');

// DENTRO DESSA CLASSE E VER TODAS E FAZ UMA AERO FUNCTION COMO O ELEMENTO
accordionHeaders.forEach(function (header) {
    // QUANDO O ELEMENTO TIVER UM CLICK ELE FAZ A FUNCAO 
    header.addEventListener('click', function () {
        // A CLASSE PASSA A RECEBER O ELEMENTO COM O ANCESTRAL MAIS PROXIMO
        let accordionItem = this.closest('.accordion-item');

        // QUANDO CLICA NO ELEMENTO QUE JA ESTA ACTIVE!
        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            this.querySelector('.fa-solid').classList.remove('fa-chevron-down');
            this.querySelector('.fa-solid').classList.add('fa-chevron-up');
        } else {
            // Desativar todos os itens ativos (ELE VER TODOS OS ELEMENTOS QUE ESTAO COM ACTIVE E TIRA)
            let activeItems = document.querySelectorAll('.accordion-item.active');
            activeItems.forEach(function (item) {
                item.classList.remove('active');
                item.querySelector('.fa-solid').classList.remove('fa-chevron-down');
                item.querySelector('.fa-solid').classList.add('fa-chevron-up');
            });

            // ativar o item clicado (POSICAO DAS SETAS)
            accordionItem.classList.add('active');
            this.querySelector('.fa-solid').classList.remove('fa-chevron-up');
            this.querySelector('.fa-solid').classList.add('fa-chevron-down');
        }
    });
});

//---------------------------------------------------------------------------------------------------------------
