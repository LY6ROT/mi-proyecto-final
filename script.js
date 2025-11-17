document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // --- 1. BASE DE DATOS (Simulada) ---
    // =============================================
    
    // Base de datos de Planes de Membresía
    const membershipPlans = {
        'plan-basico': {
            id: 'plan-basico',
            name: 'Plan Básico',
            price: 79.90,
            description: 'Acceso a un solo gimnasio, área de musculación y cardio.',
            image: 'https://placehold.co/100x100/008000/FFF?text=B%C3%A1sico'
        },
        'plan-black': {
            id: 'plan-black',
            name: 'Plan Black',
            price: 109.90,
            description: 'Acceso a todas las sedes, invita a un amigo, área de musculación y cardio.',
            image: 'https://placehold.co/100x100/333/FFF?text=Black'
        },
        'plan-impacto': {
            id: 'plan-impacto',
            name: 'Plan Impacto Total',
            price: 129.90,
            description: 'Acceso total, clases grupales ilimitadas y asesoría nutricional.',
            image: 'https://placehold.co/100x100/8B0000/FFF?text=Impacto'
        },
        'plan-lux': {
            id: 'plan-lux',
            name: 'Plan Lux Power',
            price: 99.90,
            description: 'Enfocado en powerlifting y culturismo. Acceso 24/7.',
            image: 'https://placehold.co/100x100/FF8C00/FFF?text=Lux'
        }
    };

    // Base de datos de Gimnasios (basada en tu HTML)
    const gymData = {
        'smartfit-norte': {
            id: 'smartfit-norte',
            name: 'SMARTFIT',
            location: 'Lima Norte - Independencia',
            zona: 'norte',
            description: 'Una vida más saludable comienza en el entrenamiento y continúa con acciones para ayudar al planeta y la sociedad.',
            image: 'https://www.businessempresarial.com.pe/wp-content/uploads/2022/08/version-2018-294.jpg',
            rating: 4.5,
            reviews: 250,
            address: 'Av. Alfredo Mendiola 3698, Independencia',
            phone: '(01) 555-1111',
            email: 'contacto.norte@smartfit.com.pe',
            officialPage: 'https://www.smartfit.com.pe/',
            features: [
                { icon: 'fa-dumbbell', text: 'Área de peso libre y peso integrado' },
                { icon: 'fa-person-running', text: 'Zona de cardio completa' },
                { icon: 'fa-shower', text: 'Vestidores y duchas de alta calidad' },
                { icon: 'fa-users', text: 'Clases grupales (Plan Black)' }
            ],
            memberships: ['plan-basico', 'plan-black']
        },
        'impacto-norte': {
            id: 'impacto-norte',
            name: 'FITNESS DE IMPACTO',
            location: 'Lima Norte - Los Olivos',
            zona: 'norte',
            description: 'Experiencias únicas, con ambientes cómodos, clases motivadoras y atención personalizada. Donde estés, tienes acceso a lo mejor de Fitness de Impacto.',
            image: 'https://fitnessdeimpacto.com/wp-content/uploads/2025/08/imagen-ampliada-1280x960.png',
            rating: 4.8,
            reviews: 180,
            address: 'Av. Carlos Izaguirre 123, Los Olivos',
            phone: '(01) 555-2222',
            email: 'losolivos@fitnessdeimpacto.com',
            officialPage: 'https://fitnessdeimpacto.com/',
            features: [
                { icon: 'fa-dumbbell', text: 'Amplia zona de entrenamiento funcional' },
                { icon: 'fa-users', text: 'Clases grupales de alto impacto' },
                { icon: 'fa-user-shield', text: 'Asesoría de entrenadores profesionales' },
                { icon: 'fa-spa', text: 'Zona de relax y sauna' }
            ],
            memberships: ['plan-impacto']
        },
        'luxgym-este': {
            id: 'luxgym-este',
            name: 'LUX GYM',
            location: 'Lima Este - Vitarte',
            zona: 'este',
            description: 'Si llevas un tiempo pensando en iniciar el gym o en conocer nuestra sede Lux esta es tu señal.',
            image: 'https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/292397270_111383414966229_287104136534417690_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XN4Whhw0qs0Q7kNvwGXKDeN&_nc_oc=AdlWV6rhOLNaarNrJ8R3f2JDLNL531iEE_-5c_3xWSFOLuLPTs-0bFCVrskscAQAH8A&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=TcDzo_M5hW2lGyb17Zo-VQ&oh=00_Afd0ceKlQ3WE-8Dt8_Oj0Mn5rY95J6loGPnXaeDYoShWQw&oe=68F33253',
            rating: 4.2,
            reviews: 95,
            address: 'Carretera Central Km 7.5, Vitarte',
            phone: '(01) 555-3333',
            email: 'contacto@luxgym.com',
            officialPage: '#',
            features: [
                { icon: 'fa-dumbbell', text: 'Gran variedad de mancuernas y barras' },
                { icon: 'fa-person-chalkboard', text: 'Plataformas de levantamiento' },
                { icon: 'fa-clock', text: 'Abierto 24 horas (fines de semana)' }
            ],
            memberships: ['plan-lux']
        },
        'smartfit-sur': {
            id: 'smartfit-sur',
            name: 'SMARTFIT',
            location: 'Lima Sur - Chorrillos',
            zona: 'sur',
            description: 'Democratizando el fitness de alta calidad en Lima Sur.',
            image: 'https://www.peru-retail.com/wp-content/uploads/Smart-Fit-expansi%C3%B3n-Per%C3%BA.jpg',
            rating: 4.4,
            reviews: 190,
            address: 'Av. Guardia Civil 567, Chorrillos',
            phone: '(01) 555-4444',
            email: 'chorrillos@smartfit.com.pe',
            officialPage: 'https://www.smartfit.com.pe/',
            features: [
                { icon: 'fa-dumbbell', text: 'Área de peso libre y peso integrado' },
                { icon: 'fa-person-running', text: 'Zona de cardio completa' },
                { icon: 'fa-shower', text: 'Vestidores y duchas de alta calidad' }
            ],
            memberships: ['plan-basico', 'plan-black']
        },
        'bodytech-moderna': {
            id: 'bodytech-moderna',
            name: 'BODYTECH',
            location: 'Lima Moderna - Miraflores',
            zona: 'moderna',
            description: 'Transforma tu vida con la mejor tecnología y profesionales en el corazón de Miraflores.',
            image: 'https://centrocomercialellimbo.com/wp-content/uploads/2021/08/GIMNASIO-BODYTECH-1.jpg',
            rating: 4.7,
            reviews: 310,
            address: 'Av. Alfredo Benavides 1234, Miraflores',
            phone: '(01) 555-5555',
            email: 'miraflores@bodytech.com',
            officialPage: '#',
            features: [
                { icon: 'fa-water', text: 'Piscina semiolímpica' },
                { icon: 'fa-person-running', text: 'Zona de cardio con vista a la ciudad' },
                { icon: 'fa-spa', text: 'Sauna y Baño Turco' },
                { icon: 'fa-user-shield', text: 'Entrenamiento personalizado' }
            ],
            memberships: ['plan-black', 'plan-impacto']
        },
        'goldsgym-centro': {
            id: 'goldsgym-centro',
            name: "GOLD'S GYM",
            location: 'Centro de Lima',
            zona: 'centro',
            description: 'El legado del fitness. Fuerza, tradición y los mejores equipos en el Centro de Lima.',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/31/53/78/golds-gym.jpg?w=1200&h=-1&s=1',
            rating: 4.3,
            reviews: 150,
            address: 'Jirón de la Unión 899, Lima',
            phone: '(01) 555-6666',
            email: 'centro@goldsgym.pe',
            officialPage: '#',
            features: [
                { icon: 'fa-dumbbell', text: 'La mayor variedad de peso libre' },
                { icon: 'fa-person-chalkboard', text: 'Zona de calistenia' },
                { icon: 'fa-user-shield', text: 'Entrenadores certificados' }
            ],
            memberships: ['plan-basico', 'plan-lux']
        },
        
    };

    // Base de datos del Carousel
    const carouselData = [
        {
            image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80',
            title: 'Tu Gimnasio Ideal, a un Clic',
            subtitle: 'Compara precios, ubicaciones y servicios en todo Lima.',
            btnText: 'Buscar Gimnasios',
            btnPage: 'page-gimnasios'
        },
        {
            image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            title: 'Ofertas Exclusivas Online',
            subtitle: 'Inscríbete a través de SearchGym y obtén descuentos únicos.',
            btnText: 'Ver Ofertas',
            btnPage: 'page-ofertas'
        },
        {
            image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
            title: 'Planes para Cada Objetivo',
            subtitle: 'Desde el Plan Básico hasta el Black. Encuentra el tuyo.',
            btnText: 'Comprar Planes',
            btnPage: 'page-gimnasios'
        }
    ];

    // =============================================
    // --- 2. ESTADO DE LA APLICACIÓN ---
    // =============================================
    
    let cart = [];
    let currentPage = 'page-inicio';
    let currentCarouselSlide = 0;
    let carouselInterval;

    // =============================================
    // --- 3. SELECTORES DEL DOM ---
    // =============================================
    
    const body = document.body;
    const allPages = document.querySelectorAll('.page-section');
    const allNavLinks = document.querySelectorAll('.nav-link');
    
    // --- Header y Menú Móvil ---
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    
    // --- Modales ---
    const modalOverlay = document.getElementById('modal-overlay');
    const allCloseButtons = document.querySelectorAll('[data-close-modal]');
    
    // --- Búsqueda Global ---
    const globalSearchBtn = document.getElementById('global-search-btn');
    const searchModal = document.getElementById('search-modal');
    const globalSearchInput = document.getElementById('global-search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    
    // --- Carrito (Sidebar y Badge) ---
    const cartSidebarBtn = document.getElementById('cart-sidebar-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBadgeCount = document.getElementById('cart-badge-count');
    const cartSidebarItemsContainer = document.getElementById('cart-sidebar-items');
    const cartSidebarSubtotal = document.getElementById('cart-sidebar-subtotal');
    
    // --- Carrito (Página Completa) ---
    const cartPageItemsContainer = document.getElementById('cart-page-items-container');
    const cartPageSubtotal = document.getElementById('cart-page-subtotal');
    const cartPageIGV = document.getElementById('cart-page-igv');
    const cartPageTotal = document.getElementById('cart-page-total');
    
    // --- Página Inicio (Carousel) ---
    const carouselSlidesContainer = document.getElementById('carousel-slides-container');
    const carouselDotsContainer = document.getElementById('carousel-dots-container');

    // --- Página Gimnasios (Grid y Filtros) ---
    const gymGridContainer = document.getElementById('gym-grid-container');
    const gymSearchInput = document.getElementById('gym-search-input');
    const zonaFiltersContainer = document.getElementById('zona-filters');
    const noResultsMessage = document.getElementById('no-results-message');

    // --- Página Detalle ---
    const detalleContentContainer = document.getElementById('detalle-content-container');
    
    // --- Página Cuenta (Login) ---
    const loginWrapper = document.querySelector('.login-wrapper');
    const loginTabs = document.querySelectorAll('.login-tab');
    const loginForms = document.querySelectorAll('.login-form');
    const formSwitchLinks = document.querySelectorAll('.form-switch-link');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // =============================================
    // --- 4. LÓGICA DE NAVEGACIÓN (SPA) ---
    // =============================================

    /**
     * Navega a una página específica ocultando las demás.
     * @param {string} pageId - El ID de la sección (página) a mostrar.
     */
    function navigateTo(pageId) {
        // Ocultar todas las páginas
        allPages.forEach(page => page.classList.remove('active'));
        
        // Mostrar la página solicitada
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            currentPage = pageId;
            
            // Actualizar estado activo en los links
            updateActiveLinks(pageId);
            
            // Cerrar menú móvil si está abierto
            closeMobileMenu();
            
            // Cerrar modales
            closeModal(searchModal);
            closeModal(cartSidebar);
            
            // Scroll al inicio de la página
            window.scrollTo(0, 0);
        } else {
            console.error(`La página con ID "${pageId}" no existe.`);
        }
    }

    /**
     * Actualiza la clase 'active' en todos los links de navegación.
     * @param {string} pageId - El ID de la página activa.
     */
    function updateActiveLinks(pageId) {
        allNavLinks.forEach(link => {
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Asignar listeners a TODOS los links de navegación
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = e.currentTarget.dataset.page;
            if (pageId) {
                navigateTo(pageId);
            }
        });
    });

    // =============================================
    // --- 5. LÓGICA DE MENÚ MÓVIL ---
    // =============================================

    function openMobileMenu() {
        if (!mobileMenu) return;
        mobileMenu.classList.add('open');
        modalOverlay.classList.add('open');
        body.style.overflow = 'hidden'; // Evita scroll del body
    }

    function closeMobileMenu() {
        if (!mobileMenu) return;
        mobileMenu.classList.remove('open');
        modalOverlay.classList.remove('open');
        body.style.overflow = 'auto';
    }

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);

    // =============================================
    // --- 6. LÓGICA DE MODALES (Genérica) ---
    // =============================================

    function openModal(modalElement) {
        if (modalElement) {
            modalElement.classList.add('open');
            modalOverlay.classList.add('open');
            
            // Si no es el sidebar, bloquear scroll
            if (!modalElement.classList.contains('cart-sidebar')) {
                body.style.overflow = 'hidden';
            }
        }
    }

    function closeModal(modalElement) {
        if (modalElement) {
            modalElement.classList.remove('open');
            
            // Solo cerrar overlay si no hay OTRO modal abierto
            const anyModalOpen = document.querySelector('.search-modal.open, .cart-sidebar.open, .nav-mobile-menu.open');
            if (!anyModalOpen) {
                modalOverlay.classList.remove('open');
                body.style.overflow = 'auto';
            }
        }
    }
    
    // Cerrar al hacer clic en el overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            closeMobileMenu();
            closeModal(searchModal);
            closeModal(cartSidebar);
        });
    }
    
    // Cerrar al hacer clic en botones 'data-close-modal'
    allCloseButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.dataset.closeModal;
            const modalToClose = document.getElementById(modalId);
            closeModal(modalToClose);
        });
    });
    
    // Búsqueda Global
    if (globalSearchBtn) globalSearchBtn.addEventListener('click', () => openModal(searchModal));
    
    // Carrito Sidebar
    if (cartSidebarBtn) cartSidebarBtn.addEventListener('click', () => openModal(cartSidebar));

    // =============================================
    // --- 7. LÓGICA DE BÚSQUEDA GLOBAL ---
    // =============================================
    
    if (globalSearchInput) {
        globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResultsContainer.innerHTML = '';
            
            if (query.length < 2) {
                searchResultsContainer.innerHTML = '<p>Escribe al menos 2 caracteres...</p>';
                return;
            }
            
            let hasResults = false;
            
            // Buscar en Gimnasios
            Object.values(gymData).forEach(gym => {
                if (gym.name.toLowerCase().includes(query) || gym.location.toLowerCase().includes(query)) {
                    const item = document.createElement('div');
                    item.className = 'result-item';
                    item.innerHTML = `<strong>${gym.name}</strong> - <span>${gym.location}</span>`;
                    item.addEventListener('click', () => {
                        showGymDetail(gym.id); // Reutiliza la función de detalle
                    });
                    searchResultsContainer.appendChild(item);
                    hasResults = true;
                }
            });
            
            if (!hasResults) {
                searchResultsContainer.innerHTML = '<p>No se encontraron resultados.</p>';
            }
        });
    }

    // =============================================
    // --- 8. LÓGICA PÁGINA INICIO (CAROUSEL) ---
    // =============================================

    function initCarousel() {
        // Evitar error si no estamos en la página de inicio (aunque con SPA siempre está)
        if (!carouselSlidesContainer || !carouselDotsContainer) return; 

        carouselSlidesContainer.innerHTML = '';
        carouselDotsContainer.innerHTML = '';
        
        carouselData.forEach((slide, index) => {
            // Crear Slide
            const slideEl = document.createElement('div');
            slideEl.className = 'carousel-slide';
            slideEl.style.backgroundImage = `url(${slide.image})`;
            slideEl.innerHTML = `
                <div class="carousel-content">
                    <h1>${slide.title}</h1>
                    <p>${slide.subtitle}</p>
                    <button class="btn btn-secundario nav-link" data-page="${slide.btnPage}">${slide.btnText}</button>
                </div>
            `;
            carouselSlidesContainer.appendChild(slideEl);
            
            // Crear Dot
            const dotEl = document.createElement('div');
            dotEl.className = 'carousel-dot';
            dotEl.dataset.slide = index;
            if (index === 0) dotEl.classList.add('active');
            carouselDotsContainer.appendChild(dotEl);
        });
        
        // Re-asignar listeners a los nuevos botones dentro del carousel
        carouselSlidesContainer.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navigateTo(e.currentTarget.dataset.page);
            });
        });
        
        // Listeners para los dots
        carouselDotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentCarouselSlide = parseInt(e.currentTarget.dataset.slide);
                updateCarousel();
                resetCarouselInterval();
            });
        });
        
        startCarouselInterval();
    }
    
    function updateCarousel() {
        if (!carouselSlidesContainer) return;
        const slideWidth = carouselSlidesContainer.clientWidth;
        carouselSlidesContainer.style.transform = `translateX(-${currentCarouselSlide * slideWidth}px)`;
        
        carouselDotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentCarouselSlide);
        });
    }
    
    function nextSlide() {
        currentCarouselSlide = (currentCarouselSlide + 1) % carouselData.length;
        updateCarousel();
    }
    
    function startCarouselInterval() {
        clearInterval(carouselInterval); // Limpiar cualquier intervalo anterior
        carouselInterval = setInterval(nextSlide, 5000); // Cambia slide cada 5 segundos
    }
    
    function resetCarouselInterval() {
        clearInterval(carouselInterval);
        startCarouselInterval();
    }

    // =============================================
    // --- 9. LÓGICA PÁGINA GIMNASIOS (Filtro y Render) ---
    // =============================================

    function renderGymCards(searchText = '', zonaFilter = 'todos') {
        if (!gymGridContainer) return; // Salir si el contenedor no existe en la página actual (aunque en SPA sí)

        gymGridContainer.innerHTML = '';
        let hasResults = false;
        
        const query = searchText.toLowerCase().trim();
        
        Object.values(gymData).forEach(gym => {
            const matchesSearch = gym.name.toLowerCase().includes(query) || gym.location.toLowerCase().includes(query);
            const matchesZona = (zonaFilter === 'todos' || gym.zona === zonaFilter);
            
            if (matchesSearch && matchesZona) {
                hasResults = true;
                const card = document.createElement('article');
                card.className = 'gym-card';
                card.innerHTML = `
                    <div class="gym-card-image">
                        <img src="${gym.image}" alt="Fachada de ${gym.name}">
                    </div>
                    <div class="gym-card-content">
                        <h3>${gym.name}</h3>
                        <span class="gym-card-location">${gym.location}</span>
                        <p class="gym-card-description">${gym.description.substring(0, 100)}...</p>
                        <div class="gym-card-footer">
                            <span class="gym-card-rating">
                                <i class="fa-solid fa-star"></i> ${gym.rating} (${gym.reviews})
                            </span>
                            <button class="btn btn-outline btn-detalle" data-id="${gym.id}">Ver Detalle</button>
                        </div>
                    </div>
                `;
                // Event listener para el botón "Ver Detalle"
                card.querySelector('.btn-detalle').addEventListener('click', (e) => {
                    const gymId = e.currentTarget.dataset.id;
                    showGymDetail(gymId);
                });
                
                gymGridContainer.appendChild(card);
            }
        });
        
        if (noResultsMessage) noResultsMessage.classList.toggle('hidden', hasResults);
    }
    
    // Listeners para filtros de gimnasio
    if (gymSearchInput) {
        gymSearchInput.addEventListener('input', (e) => {
            const activeZona = zonaFiltersContainer.querySelector('.zona-btn.active').dataset.zona;
            renderGymCards(e.target.value, activeZona);
        });
    }
    
    if (zonaFiltersContainer) {
        zonaFiltersContainer.querySelectorAll('.zona-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Quitar activo de todos
                zonaFiltersContainer.querySelectorAll('.zona-btn').forEach(b => b.classList.remove('active'));
                // Poner activo al clickeado
                const clickedBtn = e.currentTarget;
                clickedBtn.classList.add('active');
                
                const zona = clickedBtn.dataset.zona;
                renderGymCards(gymSearchInput.value, zona);
            });
        });
    }

    // =============================================
    // --- 10. LÓGICA PÁGINA DETALLE (DINÁMICA) ---
    // =============================================

    /**
     * Esta es la función clave que reescribe la página de detalle.
     * Carga dinámicamente el contenido de un gimnasio desde el "JSON" (nuestro objeto gymData).
     * @param {string} gymId - El ID del gimnasio a mostrar.
     */
    function showGymDetail(gymId) {
        const gym = gymData[gymId];
        if (!gym) {
            detalleContentContainer.innerHTML = '<p>Error: Gimnasio no encontrado.</p>';
            navigateTo('page-detalle');
            return;
        }
        
        // --- Generar HTML de Features ---
        const featuresHtml = gym.features.map(feature => `
            <div class="feature-item">
                <i class="fa-solid ${feature.icon}"></i>
                <span>${feature.text}</span>
            </div>
        `).join('');
        
        // --- Generar HTML de Membresías ---
        const membershipsHtml = gym.memberships.map(planId => {
            const plan = membershipPlans[planId];
            if (!plan) return '';
            
            return `
                <div class="membership-card">
                    <h4>${plan.name}</h4>
                    <div class="membership-price">S/ ${plan.price.toFixed(2)} <span>/ mes</span></div>
                    <p>${plan.description}</p>
                    <button class="btn btn-primario btn-add-to-cart" data-id="${plan.id}">Añadir al Carrito</button>
                </div>
            `;
        }).join('');
        
        // --- Ensamblar todo el HTML de la página ---
        const fullDetailHtml = `
            <div class="detalle-page-container">
                <div class="detalle-header">
                    <div class="detalle-gallery">
                        <img src="${gym.image}" alt="Gimnasio ${gym.name}">
                    </div>
                    <div class="detalle-info-principal">
                        <h2>${gym.name}</h2>
                        <div class="detalle-rating">
                            <i class="fa-solid fa-star"></i> ${gym.rating} (${gym.reviews} reseñas)
                        </div>
                        <div class="detalle-contact-info">
                            <p><i class="fa-solid fa-location-dot"></i> ${gym.address}</p>
                            <p><i class="fa-solid fa-phone"></i> ${gym.phone}</p>
                            <p><i class="fa-solid fa-envelope"></i> ${gym.email}</p>
                        </div>
                        <div class="detalle-actions">
                            <a href="${gym.officialPage}" target="_blank" class="btn btn-outline">Ir a Página Oficial</a>
                            <button class="btn btn-secundario">Contratar por SearchGym (Pronto)</button>
                        </div>
                    </div>
                </div>
                <div class="detalle-body">
                    <section>
                        <h3>Descripción</h3>
                        <p>${gym.description}</p>
                    </section>
                    
                    <section style="margin-top: 2rem;">
                        <h3>Características</h3>
                        <div class="features-list">
                            ${featuresHtml}
                        </div>
                    </section>
                    
                    <section style="margin-top: 2rem;">
                        <h3>Planes y Membresías</h3>
                        <div class="membership-options-grid">
                            ${membershipsHtml}
                        </div>
                    </section>
                </div>
            </div>
        `;
        
        // Inyectar el HTML y navegar a la página
        detalleContentContainer.innerHTML = fullDetailHtml;
        navigateTo('page-detalle');
    }


    // =============================================
    // --- 11. LÓGICA PÁGINA CUENTA (LOGIN) ---
    // =============================================

    function switchLoginForm(formId) {
        // Tabs
        loginTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.form === formId);
        });
        // Forms
        loginForms.forEach(form => {
            form.classList.toggle('active', form.id === formId);
        });
    }

    if (loginTabs.length > 0) {
        loginTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                switchLoginForm(e.currentTarget.dataset.form);
            });
        });
        
        formSwitchLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                switchLoginForm(e.currentTarget.dataset.form);
            });
        });
    }

    // --- Validación de Formularios (Básica) ---
    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required]');
        
        inputs.forEach(input => {
            const errorMsg = input.nextElementSibling;
            if (!input.value.trim() || (input.type === 'email' && !isValidEmail(input.value)) || (input.type === 'password' && input.value.length < 6)) {
                isValid = false;
                errorMsg.style.display = 'block';
            } else {
                errorMsg.style.display = 'none';
            }
        });
        return isValid;
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(loginForm)) {
                alert('¡Inicio de sesión exitoso! (Simulación)');
                navigateTo('page-inicio');
            }
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm(registerForm)) {
                alert('¡Registro exitoso! (Simulación)');
                navigateTo('page-inicio');
            }
        });
    }

    // =============================================
    // --- 12. LÓGICA DE CARRITO (Core) ---
    // =============================================
    
    const CART_STORAGE_KEY = 'searchGymCart';

    /** Carga el carrito desde LocalStorage */
    function loadCart() {
        cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
        renderAllCarts();
    }

    /** Guarda el carrito en LocalStorage */
    function saveCart() {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        renderAllCarts();
    }

    /** Añade un item al carrito */
    function addToCart(itemId) {
        const plan = membershipPlans[itemId];
        if (!plan) return;
        
        const existingItem = cart.find(item => item.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...plan, quantity: 1 });
        }
        
        saveCart();
        openModal(cartSidebar); // Abrir sidebar al añadir
    }

    /** Actualiza la cantidad de un item */
    function updateCartQuantity(itemId, change) {
        const itemInCart = cart.find(item => item.id === itemId);
        if (!itemInCart) return;
        
        itemInCart.quantity += change;
        
        if (itemInCart.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
        }
    }
    
    /** Remueve un item del carrito */
    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        saveCart();
    }

    /**
     * Renderiza AMBOS carritos (sidebar y página completa) y el badge.
     * Esta es la función central de actualización de UI del carrito.
     */
    function renderAllCarts() {
        // Limpiar contenedores
        if (cartSidebarItemsContainer) cartSidebarItemsContainer.innerHTML = '';
        if (cartPageItemsContainer) cartPageItemsContainer.innerHTML = '';
        
        let subtotal = 0;
        let totalItems = 0;
        
        if (cart.length === 0) {
            const emptyMsg = '<p style="padding: 1rem; text-align: center;">Tu carrito está vacío.</p>';
            if (cartSidebarItemsContainer) cartSidebarItemsContainer.innerHTML = emptyMsg;
            if (cartPageItemsContainer) cartPageItemsContainer.innerHTML = emptyMsg;
        } else {
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
                totalItems += item.quantity;
                
                const itemTotalPrice = (item.price * item.quantity).toFixed(2);
                
                // --- Renderizar en Sidebar ---
                if (cartSidebarItemsContainer) {
                    cartSidebarItemsContainer.innerHTML += `
                        <div class="cart-sidebar-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="cart-sidebar-item-info">
                                <h4>${item.name}</h4>
                                <span class="cart-sidebar-item-price">S/ ${item.price.toFixed(2)}</span>
                                <span class="cart-sidebar-item-qty">Qty: ${item.quantity}</span>
                            </div>
                            <button class="cart-sidebar-remove-btn cart-remove" data-id="${item.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    `;
                }
                
                // --- Renderizar en Página Completa ---
                if (cartPageItemsContainer) {
                    cartPageItemsContainer.innerHTML += `
                        <div class="cart-page-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="cart-page-item-info">
                                <h3>${item.name}</h3>
                                <span class="item-price">S/ ${item.price.toFixed(2)}</span>
                                <div class="cart-quantity-controls" style="margin-top: 0.5rem;">
                                    <button class="cart-quantity-btn cart-quantity-minus" data-id="${item.id}">-</button>
                                    <span class="cart-item-quantity">${item.quantity}</span>
                                    <button class="cart-quantity-btn cart-quantity-plus" data-id="${item.id}">+</button>
                                </div>
                            </div>
                            <div class="cart-page-item-actions">
                                <span class="item-total-price">S/ ${itemTotalPrice}</span>
                                <button class="cart-remove-full-btn cart-remove" data-id="${item.id}">
                                    <i class="fa-solid fa-trash"></i> Quitar
                                </button>
                            </div>
                        </div>
                    `;
                }
            });
        }
        
        // --- Calcular Totales ---
        const igv = subtotal * 0.18;
        const total = subtotal + igv;
        
        // --- Actualizar Badge ---
        if (cartBadgeCount) {
            cartBadgeCount.textContent = totalItems;
            cartBadgeCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
        
        // --- Actualizar Footer Sidebar ---
        if (cartSidebarSubtotal) cartSidebarSubtotal.textContent = `S/ ${subtotal.toFixed(2)}`;
        
        // --- Actualizar Resumen Página Carrito ---
        if (cartPageSubtotal) cartPageSubtotal.textContent = `S/ ${subtotal.toFixed(2)}`;
        if (cartPageIGV) cartPageIGV.textContent = `S/ ${igv.toFixed(2)}`;
        if (cartPageTotal) cartPageTotal.textContent = `S/ ${total.toFixed(2)}`;
    }
    
    // --- Event Delegation para botones del Carrito (Añadir, Quitar, +/-) ---
    body.addEventListener('click', (e) => {
        const target = e.target;
        
        // Añadir al carrito (desde pág. detalle)
        if (target.classList.contains('btn-add-to-cart')) {
            addToCart(target.dataset.id);
        }
        
        // Quitar del carrito (ambos botones)
        if (target.closest('.cart-remove')) {
            removeFromCart(target.closest('.cart-remove').dataset.id);
        }
        
        // Sumar cantidad
        if (target.classList.contains('cart-quantity-plus')) {
            updateCartQuantity(target.dataset.id, 1);
        }
        
        // Restar cantidad
        if (target.classList.contains('cart-quantity-minus')) {
            updateCartQuantity(target.dataset.id, -1);
        }
    });

    // =============================================
    // --- 13. INICIALIZACIÓN DE LA APP ---
    // =============================================
    
    function init() {
        initCarousel();       // Cargar el carrusel de inicio
        renderGymCards();     // Cargar todas las tarjetas de gimnasios
        loadCart();           // Cargar carrito desde LocalStorage
        navigateTo('page-inicio'); // Asegurarse de empezar en Inicio
    }
    
    init();

});

