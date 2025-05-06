document.addEventListener('DOMContentLoaded', function() {
    // Funzionalità per il menu di navigazione
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Chiudi il menu quando si clicca su un link
    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Funzionalità per gli slider del portfolio
    document.querySelectorAll('.portfolio-grid-container').forEach(function(container) {
        const slider = container.querySelector('.portfolio-grid-slider');
        const grids = slider.querySelectorAll('.grid-container');
        const dots = container.querySelectorAll('.slider-dots .dot');
        const leftArrow = container.querySelector('.left-arrow');
        const rightArrow = container.querySelector('.right-arrow');
        let currentIndex = 0;
        
        // Funzione per mostrare un grid specifico
        function showGrid(index) {
            if (index < 0) index = grids.length - 1;
            if (index >= grids.length) index = 0;
            
            grids.forEach(grid => grid.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            grids[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
            
            currentIndex = index;
        }
        
        // Navigazione con le frecce
        if (leftArrow) {
            leftArrow.addEventListener('click', function() {
                showGrid(currentIndex - 1);
            });
        }
        
        if (rightArrow) {
            rightArrow.addEventListener('click', function() {
                showGrid(currentIndex + 1);
            });
        }
        
        // Navigazione con i punti
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                showGrid(index);
            });
        });
        
        // Inizializza il primo grid come attivo
        showGrid(0);
    });
    
    // Verifica se il modale esiste già nell'HTML
    let modal = document.getElementById('project-modal');
    
    // Se il modale non esiste, crealo dinamicamente
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'project-modal';
        modal.className = 'project-modal';
        
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-body">
                    <h3 class="modal-title">Titolo Progetto</h3>
                    <div class="modal-image">
                        <img src="" alt="Project Detail">
                    </div>
                    <div class="modal-description">
                        <p>Descrizione del progetto...</p>
                        <div class="modal-details">
                            <div class="detail-item">
                                <span class="detail-label">Data:</span>
                                <span class="detail-value date">2023</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Software:</span>
                                <span class="detail-value software">Adobe Illustrator</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Cliente:</span>
                                <span class="detail-value client">Personale</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    const closeModal = modal.querySelector('.close-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalImage = modal.querySelector('.modal-image img');
    const modalDescription = modal.querySelector('.modal-description p');
    const modalDate = modal.querySelector('.detail-value.date') || modal.querySelector('.detail-item:nth-child(1) .detail-value');
    const modalSoftware = modal.querySelector('.detail-value.software') || modal.querySelector('.detail-item:nth-child(2) .detail-value');
    const modalClient = modal.querySelector('.detail-value.client') || modal.querySelector('.detail-item:nth-child(3) .detail-value');
    
    // Database completo dei progetti
    const projectsData = {
        // Graphic projects - prima pagina
        'graphic1': {
            title: 'Carta Yoshi',
            image: 'carta yoshi.png',
            description: 'Tarocco con tematica Mario Bros. Un\'interpretazione artistica del personaggio Yoshi in stile carta dei tarocchi, unendo elementi tradizionali con l\'universo di Mario.',
            date: '2023',
            software: 'Adobe Illustrator',
            client: 'Personale'
        },
        'graphic2': {
            title: 'Infografica',
            image: 'infografica.png',
            description: 'Infografica informativa che combina dati e design per presentare informazioni complesse in modo chiaro e visivamente accattivante.',
            date: '2023',
            software: 'Adobe Illustrator',
            client: 'Progetto Accademico'
        },
        'graphic3': {
            title: 'Render Simpson',
            image: 'render simpson.png',
            description: 'Progetto di rendering 3D ispirato ai Simpson. Un\'interpretazione moderna e tridimensionale dei personaggi iconici della serie animata.',
            date: '2024',
            software: 'Adobe Dimension, Illustrator',
            client: 'Personale'
        },
        'graphic4': {
            title: 'ADV Accademia',
            image: 'advaccademia.png',
            description: 'Poster pubblicitario creato per l\'Accademia di Belle Arti. Design moderno che comunica i valori e l\'offerta formativa dell\'istituzione.',
            date: '2023',
            software: 'Adobe Photoshop',
            client: 'Accademia di Belle Arti'
        },
        // Graphic projects - seconda pagina
        'graphic5': {
            title: 'Etichetta Vino',
            image: 'etichetta vino.png',
            description: 'Design di etichetta per bottiglia di vino. Unisce elementi tradizionali e moderni per creare un\'immagine distintiva e memorabile per il prodotto.',
            date: '2024',
            software: 'Adobe Illustrator',
            client: 'Progetto Concept'
        },
        'graphic6': {
            title: 'Profilo',
            image: 'profilo.png',
            description: 'Illustrazione stilizzata di un profilo umano. Esplorazione di forme e colori per creare un\'opera visivamente interessante e simbolica.',
            date: '2023',
            software: 'Procreate',
            client: 'Personale'
        },
        'graphic7': {
            title: 'Progetto 7',
            image: 'progetto7.png',
            description: 'Descrizione dettagliata del progetto 7. Questo lavoro esplora temi di... e utilizza tecniche di... per creare un impatto visivo significativo.',
            date: '2024',
            software: 'Adobe Photoshop',
            client: 'Cliente XYZ'
        },
        'graphic8': {
            title: 'Progetto 8',
            image: 'progetto8.png',
            description: 'Descrizione dettagliata del progetto 8. Un\'esplorazione creativa di... che mira a comunicare... attraverso l\'uso di elementi visivi distintivi.',
            date: '2023',
            software: 'Canva',
            client: 'Personale'
        }
    };
    
    // Aggiungi CSS per mostrare il modal
    const style = document.createElement('style');
    style.textContent = `
        .project-modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            overflow-y: auto;
        }
        
        .project-modal.show {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .modal-content {
            position: relative;
            background-color: white;
            width: 90%;
            max-width: 800px;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            margin: 40px auto;
            animation: modalFadeIn 0.3s ease;
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .close-modal {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            color: #333;
            transition: color 0.3s;
            z-index: 1002;
        }
        
        .close-modal:hover {
            color: #000;
        }
        
        .modal-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
            border-bottom: 2px solid #eee;
            padding-bottom: 10px;
            text-transform: uppercase;
        }
        
        .modal-image {
            margin-bottom: 20px;
            text-align: center;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .modal-image img {
            max-width: 100%;
            max-height: 400px;
            object-fit: contain;
            display: block;
            margin: 0 auto;
        }
        
        .modal-description {
            margin-bottom: 20px;
            line-height: 1.6;
            color: #333;
        }
        
        .modal-description p {
            margin-bottom: 15px;
        }
        
        .modal-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #eee;
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
        }
        
        .detail-item {
            display: flex;
            flex-direction: column;
        }
        
        .detail-label {
            font-weight: bold;
            margin-bottom: 5px;
            color: #666;
            font-size: 0.9rem;
            text-transform: uppercase;
        }
        
        .detail-value {
            color: #333;
            font-weight: 500;
        }
        
        @media (max-width: 600px) {
            .modal-content {
                padding: 15px;
                margin: 20px auto;
            }
            
            .modal-title {
                font-size: 20px;
            }
            
            .modal-details {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Assicuriamoci che funzioni la funzionalità dell'overlay
    const overlayStyle = document.createElement('style');
    overlayStyle.textContent = `
        .grid-item {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            border-radius: 8px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }
        
        .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
        }
        
        .grid-item .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        
        .grid-item:hover .overlay {
            opacity: 1;
        }
        
        .grid-item:hover img {
            transform: scale(1.05);
        }
        
        .overlay span {
            color: #fff;
            font-size: 1rem;
            font-weight: 600;
            text-align: center;
            padding: 10px 20px;
            border: 2px solid #fff;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .overlay span:hover {
            background-color: #fff;
            color: #000;
        }
    `;
    document.head.appendChild(overlayStyle);
    
    // Assicuriamoci che ogni elemento grid-item abbia un overlay
    document.querySelectorAll('.grid-item').forEach(function(item) {
        // Verifica se l'overlay esiste già
        let overlay = item.querySelector('.overlay');
        
        // Se non esiste, crealo
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.innerHTML = '<span>Visualizza dettagli</span>';
            item.appendChild(overlay);
        }
        
        // Aggiungi event listener per aprire il modal
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-id');
            const project = projectsData[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalImage.alt = project.title;
                modalDescription.textContent = project.description;
                modalDate.textContent = project.date;
                modalSoftware.textContent = project.software;
                modalClient.textContent = project.client;
                
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // Previene lo scroll del body
            } else {
                console.error(`Nessun dato trovato per il progetto con ID: ${projectId}`);
                // Fallback: apri comunque il modal con dati di esempio
                modalTitle.textContent = "Dettagli Progetto";
                modalImage.src = item.querySelector('img').src;
                modalImage.alt = "Immagine Progetto";
                modalDescription.textContent = "Descrizione non disponibile per questo progetto.";
                modalDate.textContent = "N/D";
                modalSoftware.textContent = "N/D";
                modalClient.textContent = "N/D";
                
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Chiudi il modal quando si clicca sulla X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Ripristina lo scroll
        });
    }
    
    // Chiudi il modal quando si clicca fuori dal contenuto
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Ripristina lo scroll
        }
    });
    
    // Chiudi il modal quando si preme ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = ''; // Ripristina lo scroll
        }
    });
    
    // Gestione del form di contatto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Qui puoi aggiungere il codice per inviare il form
            // Per esempio, usando fetch o XMLHttpRequest
            
            alert('Grazie per avermi contattato! Ti risponderò al più presto.');
            contactForm.reset();
        });
    }
});