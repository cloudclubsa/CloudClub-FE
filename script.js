document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initEventDetailsModal();
    initFaq();
    initCarousel();
});

function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNavbar = document.querySelector('.menu-navbar');

    if (!menuToggle || !menuNavbar) return;

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuNavbar.classList.toggle('active');
    });

    const menuLinks = menuNavbar.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuNavbar.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuNavbar.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuNavbar.classList.remove('active');
        }
    });
}

function initEventDetailsModal() {
    const modal = document.getElementById('event-details-modal');
    const closeBtn = document.querySelector('.event-modal-close');
    const detailsButtons = document.querySelectorAll('.event-details-btn');

    if (!modal || !closeBtn) return;

    const eventData = {
        1: {
            day: '19',
            month: 'JAN',
            title: 'Conhecendo AWS #1',
            location: 'Hub Goiás — Miniauditório (2º andar)',
            time: '19h30 às 22h · Presencial + online',
            description: `<p>Conhecendo AWS Cloud Club #1 é o primeiro encontro da nossa comunidade e foi pensado para mostrar, na prática, como a nuvem é usada em ambientes reais — do código à infraestrutura. Se você está começando em cloud ou quer evoluir para o próximo nível na carreira em tecnologia, este evento é para você.</p>

<p><strong>O que você vai ver:</strong></p>
<ul>
    <li>Experiências reais com AWS em cenários de produção</li>
    <li>Visão arquitetural aplicada ao desenvolvimento de software</li>
    <li>Infraestrutura como código (IaC) com Terraform em casos práticos</li>
</ul>

<p><strong>Data, horário e formato</strong><br>
19 de janeiro, das 19:30h às 22h<br>
Hub Goiás — Mini-auditório 2° Andar (Setor Leste Universitário), Goiânia/GO<br>
Presencial + transmissão ao vivo pelo Instagram <a href="https://www.instagram.com/cloudclub_sa" target="_blank">@cloudclub_sa</a></p>

<p><strong>Público-alvo (prioridade)</strong><br>
Este evento tem prioridade para estudantes:</p>
<ul>
    <li>Graduação/tecnólogo</li>
    <li>Ensino médio com interesse em tecnologia</li>
    <li>Pós-graduação, especialização ou mestrado</li>
</ul>

<p>Se você não for estudante, recomendamos acompanhar os eventos abertos da comunidade AWS Goiânia. Caso haja vagas remanescentes para o presencial, entre em contato pelo Instagram <a href="https://www.instagram.com/cloudclub_sa" target="_blank">@cloudclub_sa</a> para entrar na lista de espera.</p>

<p><strong>Inscrição</strong><br>
Evento gratuito<br>
Vagas presenciais limitadas<br>
Transmissão online pelo Instagram oficial</p>

<p>Inscreva-se pelo Sympla para receber lembretes, acesso à transmissão e materiais do evento por e-mail.</p>`,
            ctaUrl: 'https://www.sympla.com.br/evento/aws-cloud-club-sa-conhecendo-aws-cloud-club-1/3276397?share_id=copiarlink'
        },
        2: {
            day: '4',
            month: 'ABR',
            title: 'Conhecendo AWS #2',
            location: 'Hub Goiás — Auditório Principal',
            time: '19h às 21h45 · Presencial + Transmissão ao vivo',
            description: `<p>Vem aí o Conhecendo AWS #2!</p>
<p>Depois de um primeiro evento incrível, estamos de volta com ainda mais conteúdo, networking e experiências na prática.</p>

<p><strong>O que teremos:</strong></p>
<ul>
    <li>Coffee-break e Sorteios</li>
    <li>Networking com a comunidade</li>
</ul>

<p>E dessa vez com um time de peso como:</p>
<ul>
    <li><strong>Bruna Alencar</strong> - Head de Capital Humano na AUVP Capital.</li>
    <li><strong>Pedro Goiânia</strong> - Fundador da Pix Ai, Dev na gringa Ex-NuBank e Ex-Itaú</li>
    <li><strong>Pedro Cardoso</strong> - Desenvolvedor Back-end na Decisão Sistemas e Core-Team AWS Cloud Club.</li>
</ul>

<p>Trazendo conteúdos imperdíveis! (Em breve mais informações)</p>

<p><strong>Data, horário e local</strong><br>
04 de abril, das 19:00 às 21:45<br>
Hub Goiás no auditório principal<br>
Presencial + transmissão ao vivo</p>

<p><strong>Evento gratuito com vagas limitadas — não fica de fora!</strong></p>

<p>E nos acompanhe no Instagram: <a href="https://www.instagram.com/cloudclub.go" target="_blank">@CloudClub.GO</a></p>
<p>#AWS #CloudComputing #Tech #Comunidade #AWSCloudClub #Dev</p>`,
            ctaUrl: ''
        }
    };

    function openModal(eventId) {
        const event = eventData[eventId];
        if (!event) return;

        document.querySelector('.event-modal-day').textContent = event.day;
        document.querySelector('.event-modal-month').textContent = event.month;
        document.querySelector('.event-modal-title').textContent = event.title;
        document.querySelector('.event-modal-location').textContent = event.location;
        document.querySelector('.event-modal-time').textContent = event.time;
        document.querySelector('.event-modal-description').innerHTML = event.description;
        document.querySelector('.event-modal-cta').href = event.ctaUrl;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            if (!modal.classList.contains('active')) {
                document.body.style.overflow = '';
            }
        }, 300);
    }

    detailsButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const eventId = btn.getAttribute('data-event-id');
            openModal(eventId);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');

        if (!question) {
            return;
        }

        question.addEventListener('click', (e) => {
            e.preventDefault();

            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');

            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
}

function initCarousel() {
    const grid = document.getElementById('organizersGrid');
    if (!grid) return;

    let autoPlayInterval;
    let timeoutId;
    let isAutoPlaying = true;
    const pauseDuration = 5000;
    const scrollSpeed = 2500;

    function startAutoPlay() {
        if (!isAutoPlaying) return;
        
        if (grid.scrollWidth <= grid.clientWidth) return;
        
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(() => {
            const card = grid.querySelector('.organizer-card');
            if (!card) return;
            const scrollAmount = card.clientWidth + parseInt(window.getComputedStyle(grid).gap || 0);

            if (grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10) {
                grid.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, scrollSpeed);
    }

    function pauseAutoPlay() {
        clearInterval(autoPlayInterval);
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            isAutoPlaying = true;
            startAutoPlay();
        }, pauseDuration);
    }

    startAutoPlay();

    grid.addEventListener('touchstart', pauseAutoPlay, { passive: true });
    grid.addEventListener('mousedown', pauseAutoPlay);
    grid.addEventListener('click', pauseAutoPlay);
    grid.addEventListener('wheel', pauseAutoPlay, { passive: true });
    
    window.addEventListener('resize', () => {
        if (grid.scrollWidth > grid.clientWidth) {
            isAutoPlaying = true;
            startAutoPlay();
        } else {
            clearInterval(autoPlayInterval);
            clearTimeout(timeoutId);
        }
    });
}