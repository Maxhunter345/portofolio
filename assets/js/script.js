// ================================================
// Navigation & Scroll Effects
// ================================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu if open
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ================================================
// Typing Effect
// ================================================

const typingTexts = [
    'Web Developer',
    'Backend Developer',
    'PHP Enthusiast',
    'Problem Solver'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeEffect() {
    const typingElement = document.querySelector('.typing-text');
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % typingTexts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// ================================================
// Particles.js Configuration
// ================================================

particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#0066ff', '#00d4ff', '#7c3aed']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#0066ff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ================================================
// Modal Functionality
// ================================================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal on escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto';
    }
});

function openCertModal(imgSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certModalImg');
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    document.body.style.overflow = 'hidden';
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ================================================
// Skill Bars Animation
// ================================================

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            bar.style.width = progress + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ================================================
// AOS (Animate On Scroll)
// ================================================

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementPartiallyInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    return (vertInView && horInView);
}

function handleScrollAnimation() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        if (isElementPartiallyInViewport(element)) {
            element.classList.add('aos-animate');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Initialize fade-up animation positions
document.addEventListener('DOMContentLoaded', () => {
    const fadeUpElements = document.querySelectorAll('[data-aos="fade-up"]');
    fadeUpElements.forEach(el => {
        el.style.transform = 'translateY(30px)';
    });
    
    const fadeRightElements = document.querySelectorAll('[data-aos="fade-right"]');
    fadeRightElements.forEach(el => {
        el.style.transform = 'translateX(-30px)';
    });
    
    const fadeLeftElements = document.querySelectorAll('[data-aos="fade-left"]');
    fadeLeftElements.forEach(el => {
        el.style.transform = 'translateX(30px)';
    });
    
    const zoomInElements = document.querySelectorAll('[data-aos="zoom-in"]');
    zoomInElements.forEach(el => {
        el.style.transform = 'scale(0.9)';
    });
    
    const flipLeftElements = document.querySelectorAll('[data-aos="flip-left"]');
    flipLeftElements.forEach(el => {
        el.style.transform = 'rotateY(-30deg)';
    });
    
    const flipRightElements = document.querySelectorAll('[data-aos="flip-right"]');
    flipRightElements.forEach(el => {
        el.style.transform = 'rotateY(30deg)';
    });
});

// ================================================
// Back to Top Button
// ================================================

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ================================================
// Contact Form Handling
// ================================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const accessKeyInput = contactForm.querySelector('input[name="access_key"]');
    const accessKey = accessKeyInput ? accessKeyInput.value : '';
    
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        // Fallback to mailto link if key is not set
        const mailtoLink = `mailto:maxell.nathanael@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        alert('Thank you for your message! Your email client will open to send the message.\n\nTip: You can get a free Access Key at web3forms.com and insert it in index.html to send emails automatically in the background without opening any app!');
        contactForm.reset();
    } else {
        // Submit via Web3Forms in the background
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonHTML = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        })
        .then(async (response) => {
            const json = await response.json();
            if (response.status == 200) {
                alert('Thank you! Your message has been sent successfully.');
                contactForm.reset();
            } else {
                console.log(response);
                alert(json.message || 'Something went wrong. Please try again or use email directly.');
            }
        })
        .catch((error) => {
            console.log(error);
            alert('Form submission failed. Please try again.');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonHTML;
        });
    }
});

// ================================================
// 3D Card Tilt Effect
// ================================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `translateY(-15px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});


// Apply 3D effect to certificate cards
const certificateCards = document.querySelectorAll('.certificate-card');

certificateCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * 5;
        
        card.style.transform = `translateY(-10px) scale(1.03) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
    });
});

// ================================================
// Preloader
// ================================================

function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }
}

window.addEventListener('load', () => {
    setTimeout(hidePreloader, 1000);
    
    // Trigger initial animations after preloader fades out
    setTimeout(() => {
        handleScrollAnimation();
        animateSkillBars();
    }, 1500);
});

// Fallback safety: hide preloader after 2.5s maximum even if external images are slow
setTimeout(hidePreloader, 2500);

// ================================================
// Parallax Effect for Hero Section
// ================================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
    
    // Update scroll progress bar
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercentage = height > 0 ? (winScroll / height) * 100 : 0;
        scrollProgress.style.width = scrolledPercentage + '%';
    }
});

// ================================================
// Show More / Show Less Projects
// ================================================

const btnShowMore = document.getElementById('btnShowMoreProjects');
if (btnShowMore) {
    btnShowMore.addEventListener('click', () => {
        const hiddenCards = document.querySelectorAll('.project-card.hidden-project');
        const isShowingAll = btnShowMore.getAttribute('data-showing') === 'all';
        
        if (isShowingAll) {
            // Collapse back to 3
            hiddenCards.forEach(card => {
                card.style.display = 'none';
            });
            btnShowMore.innerHTML = '<i class="fas fa-plus"></i> Show More';
            btnShowMore.setAttribute('data-showing', 'three');
            
            // Smooth scroll back to projects section title
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Reveal all 6
            hiddenCards.forEach(card => {
                card.style.display = 'block';
            });
            btnShowMore.innerHTML = '<i class="fas fa-minus"></i> Show Less';
            btnShowMore.setAttribute('data-showing', 'all');
            
            // Refresh AOS animations for the newly visible cards
            if (window.AOS) {
                AOS.refresh();
            }
        }
    });
}

// ================================================
// Deep Linking / URL Hash Project Auto-Open
// ================================================

function handleProjectHash() {
    const hash = window.location.hash;
    if (!hash) return;

    // Find card by ID (e.g. #project-sman6) or matching modal ID (e.g. #modal2)
    let targetCard = document.querySelector(hash);
    if (!targetCard && hash.startsWith('#modal')) {
        const modalId = hash.substring(1);
        targetCard = document.querySelector(`[onclick*="${modalId}"]`)?.closest('.project-card');
    }

    if (targetCard) {
        // If the target project card is hidden inside Show More, expand Show More first
        if (targetCard.classList.contains('hidden-project')) {
            const btnShowMore = document.getElementById('btnShowMoreProjects');
            if (btnShowMore && btnShowMore.getAttribute('data-showing') !== 'all') {
                btnShowMore.click();
            }
        }

        // Scroll smoothly to target card and automatically trigger its modal popup
        setTimeout(() => {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            const viewBtn = targetCard.querySelector('.btn-view-details');
            const onclickAttr = viewBtn ? viewBtn.getAttribute('onclick') : null;
            if (onclickAttr) {
                const match = onclickAttr.match(/openModal\('([^']+)'\)/);
                if (match && match[1]) {
                    openModal(match[1]);
                }
            }
        }, 400);
    }
}

window.addEventListener('load', handleProjectHash);
window.addEventListener('hashchange', handleProjectHash);

// ================================================
// Skills Category Filtering
// ================================================

const filterTabs = document.querySelectorAll('.filter-tab');
const skillItems = document.querySelectorAll('.skill-item');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const filterValue = tab.getAttribute('data-filter');
        
        skillItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (filterValue === 'all' || itemCategory === filterValue) {
                item.style.display = 'block';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ================================================
// Copy Contact & Toast Notification
// ================================================

let toastTimeout;
function copyToClipboard(text, label) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`Copied ${label} to clipboard! 📋`);
        }).catch(err => {
            fallbackCopyTextToClipboard(text, label);
        });
    } else {
        fallbackCopyTextToClipboard(text, label);
    }
}

function fallbackCopyTextToClipboard(text, label) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showToast(`Copied ${label} to clipboard! 📋`);
    } catch (err) {
        showToast(`Failed to copy ${label}`);
    }
    document.body.removeChild(textArea);
}

function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const toastMsg = document.getElementById('toastMessage');
    if (toast && toastMsg) {
        toastMsg.textContent = message;
        toast.classList.add('show');
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ================================================
// Ultra-Smooth 3D Steam Card Tilt Effect (Jitter-Free)
// ================================================

function initSteamCardTilt() {
    const certCards = document.querySelectorAll('.certificate-card');
    if (window.innerWidth < 768) return;

    certCards.forEach(card => {
        let isHovered = false;
        let animationFrameId = null;
        let currentRotateX = 0, currentRotateY = 0;
        let targetRotateX = 0, targetRotateY = 0;

        function updateTilt() {
            if (!isHovered && Math.abs(currentRotateX) < 0.05 && Math.abs(currentRotateY) < 0.05) {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                animationFrameId = null;
                return;
            }

            // Smooth linear interpolation (lerp) for 60fps buttery motion
            currentRotateX += (targetRotateX - currentRotateX) * 0.12;
            currentRotateY += (targetRotateY - currentRotateY) * 0.12;

            card.style.transform = `perspective(1000px) rotateX(${currentRotateX.toFixed(2)}deg) rotateY(${currentRotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
            animationFrameId = requestAnimationFrame(updateTilt);
        }

        card.addEventListener('mouseenter', () => {
            isHovered = true;
            card.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(updateTilt);
            }
        });

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Gentle max tilt (+- 8 deg)
            targetRotateX = ((y - centerY) / centerY) * -8;
            targetRotateY = ((x - centerX) / centerX) * 8;
        });

        card.addEventListener('mouseleave', () => {
            isHovered = false;
            targetRotateX = 0;
            targetRotateY = 0;
        });
    });
}

document.addEventListener('DOMContentLoaded', initSteamCardTilt);

// ================================================
// Secret Presentation PDF Export Mode
// ================================================

function initPresentationPDFMode() {
    // Check url parameter ?export=pdf
    const urlParams = new URLSearchParams(window.location.search);
    
    function enablePDFMode() {
        document.body.classList.add('presentation-pdf-mode');
        
        // Force all skill progress bars to render instantly for printing
        document.querySelectorAll('.skill-progress').forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });

        // Show instruction banner dynamically
        let banner = document.getElementById('printInstructionsBanner');
        if (!banner) {
            banner = document.createElement('div');
            banner.id = 'printInstructionsBanner';
            banner.className = 'print-instructions-banner';
            banner.innerHTML = `
                <span>📺 <strong>Presentation PDF Mode Active</strong> (Use Landscape in print settings)</span>
                <div style="display: flex; gap: 10px;">
                    <button onclick="window.print()" style="background: #ffffff; color: #0066ff; border: none; padding: 6px 12px; border-radius: 6px; font-weight: bold; cursor: pointer;">Save as PDF</button>
                    <button onclick="location.reload()" style="background: rgba(255,255,255,0.2); color: #ffffff; border: 1px solid #ffffff; padding: 6px 12px; border-radius: 6px; font-weight: bold; cursor: pointer;">Exit</button>
                </div>
            `;
            document.body.appendChild(banner);
        }
    }

    if (urlParams.has('export') && urlParams.get('export') === 'pdf') {
        enablePDFMode();
    }

    // Toggle on Ctrl + Shift + E shortcut
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
            e.preventDefault();
            enablePDFMode();
        }
    });
}

document.addEventListener('DOMContentLoaded', initPresentationPDFMode);

// ================================================
// Console Message
// ================================================

console.log('%c👋 Hello Developer!', 'color: #0066ff; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to Maxell Nathanael\'s Portfolio!', 'color: #00d4ff; font-size: 16px;');
console.log('%cInterested in the code? Check it out on GitHub!', 'color: #7c3aed; font-size: 14px;');
console.log('%chttps://github.com/Maxhunter345', 'color: #ffffff; font-size: 14px;');
