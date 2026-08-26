/*
 * UoP Robotics Team - Website Core
 * Copyright (C) 2026 UoP Robotics Team <roboticsteam@go.uop.gr>
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */
document.addEventListener('DOMContentLoaded', function(){
    //Location Map
    let mapContainer = document.getElementById('location-map');
    if(mapContainer) {
        mapContainer.style.display = 'block';
        //Set the location of our team
        document.getElementById('googleMap').src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d359.3065066135203!2d21.747460234872776!3d38.21889940691661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e3700109d3243%3A0xc822e48c4a230a9b!2sRobotics%20Team%2C%20University%20of%20the%20Peloponnese!5e0!3m2!1sen!2sgr!4v1742153461887!5m2!1sen!2sgr";
        } else {
            console.error('Element with id "location-map" not found.');
        }
    //Reveal animation
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            if(el.getBoundingClientRect().top < windowHeight - 80) el.classList.add('active');
    });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    //Toggle Menu
    const navbarNav = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function () {
            navbarNav.classList.toggle('show');
        });
    }
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const menuCollapse = document.getElementById('navbarNav');
    const bsCollapse = menuCollapse ? new bootstrap.Collapse(menuCollapse, {toggle: false}):null;
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            // Κλείσιμο του Menu των κινητών
            if (bsCollapse && menuCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
                }
            }
        });
    });
    
    //Contact Form 
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            //HTML5 validation
            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }
            
            const subject = document.getElementById('formSubject').value.trim();
            const message = document.getElementById('formMessage').value.trim();

            const body = message;
            window.location.href=`mailto:roboticsteam@go.uop.gr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
});

