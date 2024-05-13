<!-- Footer -->
<footer class="footer">
    <div class="container-footer">
        <div class="footer-content">
            <div class="footer-logo">
            </div>
            <div class="footer-links">
                <ul class="footer-menu">
                    <li><a href="https://hallostrandeiland.nl/contact">Contact</a></li>
                    <li><a href="https://hallostrandeiland.nl/privacy-local">Privacy</a></li>
                    <li><a href="https://gebiedonline.nl">Ontwikkeld met software van coöperatie Gebiedonline</a></li>
                </ul>
            </div>
            <div class="footer-social">
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
                        <a href="https://twitter.com/?lang=nl" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                            </svg>
                        </a>
                    </li>
                    <!-- Instagram -->
                    <li>
                        <a href="https://www.instagram.com/" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M16.5 7.5l0 .01" />
                            </svg>
                        </a>
                    </li>
                    <!-- LinkedIn -->
                    <li>
                        <a href="https://nl.linkedin.com/" >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Hallo Strandeilanden.</p>
        </div>
    </div>
</footer>

<style>
.container-footer {
    width: 100%;
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
    grid-template-columns: 15% 70% 15%;
    align-items: center; 
}
.footer-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
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
/* Social icons */
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
/* Footer */
@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 20px;
    }
    .footer-menu {
        text-align: left;
    }
    .footer-menu li {
        display: block;
        margin-bottom: 10px;
    }
    .footer-bottom{
        text-align: left;
    }
    .social-icons {
        text-align: left;
    }
}
</style>