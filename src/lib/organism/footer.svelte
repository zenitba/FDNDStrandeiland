<!-- Footer -->
<footer class="footer">
    <div class="container-footer">
        <section class="footer-content">
            <nav class="footer-links">
                <h2>Contact en Informatie</h2> 
                <ul class="footer-menu">
                    <li><a href="https://hallostrandeiland.nl/contact">Contact</a></li>
                    <li><a href="https://hallostrandeiland.nl/privacy-local">Privacy</a></li>
                    <li><a href="https://gebiedonline.nl">Ontwikkeld met software van coöperatie Gebiedonline</a></li>
                </ul>
            </nav>
            <section class="footer-social">
                <ul class="social-icons">
                    <!-- Facebook -->
                    <li>
                        <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                            </svg>
                        </a>
                    </li>
                    <!-- Twitter -->
                    <li>
                        <a href="https://twitter.com/?lang=nl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                        </a>
                    </li>
                    <!-- Instagram -->
                    <li>
                        <a href="https://www.instagram.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                        </a>
                    </li>
                    <!-- LinkedIn -->
                    <li>
                        <a href="https://nl.linkedin.com/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </section>
        </section>
        <div class="footer-bottom">
            <p>&copy; 2024 Hallo Strandeilanden.</p>
        </div>
    </div>
</footer>


<style>
  /* Footer styling */
.container-footer {
    width: 100%;
    /* max-width: 1200px; */
    /* margin: 0 auto; */
}

.footer {
    font-size: 15px;
    width: 100%;
    background-color: var(--grey);
    color: var(--white);
    padding: 30px 30px;
}

.footer-content {
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
}

.footer-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}
.footer-links h2 {
    margin-bottom: 10px;
    font-size: 18px;
    color: var(--white);
    text-align: end;
}

.footer-menu li {
    display: inline-block;
    margin-right: 20px;
}

.footer-menu li:last-child {
    margin-right: 0;
}

.footer-menu a {
    color: var(--white);
    text-decoration: none;
    border-bottom: 2px solid var(--white);
    margin-right: 20px;
}

.footer-bottom {
    margin-top: 20px;
    text-align: center;
}

.footer-bottom p {
    margin: 0;
}

.social-icons {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}

.social-icons li {
    display: inline-block;
    margin-right: 10px;
}

.social-icons li:last-child {
    margin-right: 0;
}

.social-icons a {
    color: var(--white);
    text-decoration: none;
    font-size: 20px;
}

/* Mediaquery voor responsiviteit */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 20px;
    }

    .footer-menu {
        text-align: left;
    }

    .footer-menu li {
        display: inline-block; /* Hier de aanpassing */
        margin-bottom: 10px;
    }

    .footer-bottom {
        text-align: left;
    }

    .social-icons {
        text-align: left;
    }
}


</style>