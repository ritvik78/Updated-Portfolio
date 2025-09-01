// Rithik Verma's Portfolio Application Data
const portfolioData = {
  personalInfo: {
    name: "Rithik Verma",
    title: "Electrical & Computer Engineering Student",
    subtitle: "Full-Stack Developer | AR/IoT Enthusiast",
    email: "er.rock4rithik@gmail.com",
    tagline: "Building innovative solutions at the intersection of hardware and software",
    bio: "I'm an Electrical and Computer Engineering student at Thapar Institute with a passion for creating innovative technology solutions. My journey spans from electrical systems to full-stack web development, AR interfaces, and IoT applications. I believe in leveraging technology to solve real-world problems and create meaningful user experiences.",
    location: "Available for opportunities",
    resumeUrl: "https://drive.google.com/file/d/1Qdv5OM9565vf_ePO6blATI9gbWCLy4Zv/view?usp=sharing",
    profileImage: "./assets/ritwik1.png"
  },
  education: [
    {
      institution: "Thapar Institute of Engineering and Technology",
      degree: "B.E Electrical and Computer Engineering",
      period: "2023 - Present",
      location: "Patiala, Punjab",
      status: "Ongoing",
      description: "Currently pursuing Bachelor's degree with focus on electrical systems, computer engineering, and modern technologies including embedded systems and IoT."
    },
    {
      institution: "Govt. Polytechnic Buxar",
      degree: "Diploma in Electrical Engineering",
      period: "Completed June 2023",
      cgpa: "7.75/10.0",
      location: "Buxar, Bihar",
      description: "Completed diploma with strong foundation in electrical engineering principles and practical applications."
    }
  ],
  skills: {
    programming: ["C/C++", "C#", "Python", "JavaScript", "HTML5", "CSS3", "React", "SQL", "Node.js", "PHP", "XML"],
    tools: ["GitHub", "VS Code", "Adobe Creative Suite", "Figma", "Canva"],
    hardware: ["Arduino", "Eagle CAD", "Blynk", "WiFi NINA", "MKR1010", "RFID Systems"],
    gamedev: ["Unity", "C#", "2D/3D Graphics", "Game Mechanics", "UI Design"],
    web: ["React", "Node.js", "PHP", "JavaScript", "HTML5", "CSS3", "SQL", "Responsive Design"]
  },
  projects: [
    {
      id: 1,
      title: "Snap Camera Kit",
      category: "ar",
      technologies: ["C#", "JavaScript", "Python", "Unity", "VS Code"],
      description: "Creating an augmented reality (AR) interface similar to Snapchat with real-time filters detecting gestures",
      longDescription: "Advanced AR application that implements real-time computer vision for gesture detection and filter application. Built using Unity engine with custom C# scripts for performance optimization and Python backend for machine learning components.",
      features: ["Real-time gesture detection", "AR filter application", "Cross-platform compatibility", "Performance optimization"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: "🤳"
    },
    {
      id: 2,
      title: "2D Asteroid Shooter",
      category: "game",
      technologies: ["Unity", "C#", "VS Code"],
      description: "Developed Unity game with C#, implementing mechanics, UI, and asset integration. Optimized performance through playtesting",
      longDescription: "Classic arcade-style game built in Unity featuring smooth gameplay mechanics, particle effects, and progressive difficulty. Includes comprehensive UI system and performance optimization.",
      features: ["Smooth gameplay mechanics", "Particle effects system", "Progressive difficulty", "Performance optimization"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: "🚀"
    },
    {
      id: 3,
      title: "Online Food Delivery Management System",
      category: "web",
      technologies: ["HTML5", "CSS3", "PHP", "JavaScript", "SQL"],
      description: "Built responsive food delivery system with real-time order tracking, secure payments, and optimized performance",
      longDescription: "Complete food delivery platform with user authentication, real-time order tracking, secure payment integration, and admin dashboard for restaurant management.",
      features: ["Real-time order tracking", "Secure payment integration", "Admin dashboard", "Responsive design"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: "🍕"
    },
    {
      id: 4,
      title: "E-Commerce Website",
      category: "web",
      technologies: ["HTML5", "CSS3", "PHP", "JavaScript", "SQL"],
      description: "Developed responsive e-commerce platform with secure payments, product catalogs, user authentication",
      longDescription: "Full-featured e-commerce website with product catalog, shopping cart, user accounts, order management, and secure payment processing.",
      features: ["Product catalog management", "Shopping cart system", "User authentication", "Order management"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      icon: "🛒"
    },
    {
      id: 5,
      title: "RFID Smart Door Lock",
      category: "iot",
      technologies: ["Arduino IDE", "BLYNK", "WiFi NINA", "RFID", "MKR1010"],
      description: "WiFi NINA based automatic door locking system using RFID with Blynk.io software and MKR1010 microcontroller",
      longDescription: "IoT-enabled smart lock system with RFID authentication, remote monitoring via Blynk app, and WiFi connectivity for real-time access control.",
      features: ["RFID authentication", "WiFi connectivity", "Remote monitoring", "Real-time access control"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      icon: "🔐"
    }
  ],
  experience: [
    {
      title: "Campus Ambassador",
      company: "InternsElite",
      period: "Sept 2024 – Dec 2024",
      type: "Leadership Role",
      description: "Helping TIET students develop expertise in web applications and enhance problem-solving skills",
      achievements: [
        "Mentored fellow students in web development",
        "Organized technical workshops and sessions",
        "Promoted skill development programs"
      ]
    },
    {
      title: "Industrial Training",
      company: "InternsElite",
      period: "Jan 2024 – Sept 2024",
      type: "Training Program",
      description: "Developed expertise in building web applications, enhancing problem-solving skills, and gaining industry-ready experience",
      achievements: [
        "Completed comprehensive full-stack development training",
        "Built multiple real-world projects",
        "Gained industry-ready experience in modern web technologies"
      ]
    },
    {
      title: "Volunteer",
      company: "Conscious Planet",
      period: "Oct 2022 – Jan 2023",
      type: "Community Service",
      description: "Raised awareness about preserving soil health and environmental conservation",
      achievements: [
        "Organized awareness campaigns",
        "Educated community about soil health",
        "Contributed to environmental conservation efforts"
      ]
    }
  ],
  certifications: [
    {
      name: "ELC in Game Development and Animations",
      issuer: "Educational Institution",
      date: "2024",
      category: "Game Development",
      icon: "🎮"
    },
    {
      name: "ELC in Robotic Arm Control",
      issuer: "Educational Institution", 
      date: "2024",
      category: "Robotics",
      icon: "🤖"
    },
    {
      name: "ELC in Power Amplifier",
      issuer: "Educational Institution",
      date: "2024", 
      category: "Electronics",
      icon: "⚡"
    },
    {
      name: "IT Essentials: PC Hardware and Software",
      issuer: "CISCO",
      date: "2024",
      category: "IT Fundamentals",
      icon: "💻"
    },
    {
      name: "Cybersecurity Essentials",
      issuer: "CISCO",
      date: "2024",
      category: "Security",
      icon: "🔒"
    },
    {
      name: "Full Stack Web Development",
      issuer: "InternsElite",
      date: "2024",
      category: "Web Development",
      icon: "🌐"
    },
    {
      name: "Industrial Training Certificate",
      issuer: "InternsElite",
      date: "2024",
      category: "Professional Training",
      icon: "🏭"
    }
  ],
  social: {
    github: "https://github.com/rithikverma",
    linkedin: "https://linkedin.com/in/rithikverma", 
    leetcode: "https://leetcode.com/rithikverma",
    email: "er.rock4rithik@gmail.com"
  }
};

// Application state
let appState = {
  isLoading: true,
  currentTheme: 'dark',
  activeSection: 'home',
  isMenuOpen: false,
  currentFilter: 'all',
  scrollY: 0,
  isScrollingToSection: false
};

// Utility functions
const utils = {
  // Debounce function for performance optimization
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Smooth scroll to element
  scrollToElement(elementId, offset = 0) {
    const element = document.getElementById(elementId.replace('#', ''));
    if (element) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = element.offsetTop - navHeight - offset;
      
      appState.isScrollingToSection = true;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        appState.isScrollingToSection = false;
      }, 1000);
    }
  },

  // Check if element is in viewport
  isInViewport(element, threshold = 0.3) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const elementHeight = rect.bottom - rect.top;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return visibleHeight / elementHeight >= threshold;
  },

  // Generate gradient for project cards
  getProjectGradient(category) {
    const gradients = {
      ar: 'linear-gradient(135deg, #00D4FF, #0099FF)',
      web: 'linear-gradient(135deg, #00FF88, #00D4AA)',
      game: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
      iot: 'linear-gradient(135deg, #FFD93D, #FF8F00)',
      default: 'linear-gradient(135deg, #00D4FF, #0099FF)'
    };
    return gradients[category] || gradients.default;
  }
};

// Loading screen functionality
const loadingScreen = {
  init() {
    this.loadingElement = document.getElementById('loading-screen');
    this.progressBar = document.querySelector('.loading-progress');
    this.startLoading();
  },

  startLoading() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => this.hideLoading(), 500);
      }
      this.updateProgress(progress);
    }, 150);
  },

  updateProgress(progress) {
    if (this.progressBar) {
      this.progressBar.style.width = `${Math.min(progress, 100)}%`;
    }
  },

  hideLoading() {
    if (this.loadingElement) {
      this.loadingElement.classList.add('fade-out');
      setTimeout(() => {
        this.loadingElement.style.display = 'none';
        appState.isLoading = false;
        this.onLoadingComplete();
      }, 500);
    }
  },

  onLoadingComplete() {
    // Initialize other components after loading
    navigation.init();
    hero.init();
    scrollAnimations.init();
    projects.init();
    contact.init();
    themeToggle.init();
    scrollToTop.init();
    skills.init();
  }
};

// Navigation functionality
const navigation = {
  init() {
    this.nav = document.querySelector('.nav');
    this.navMenu = document.getElementById('nav-menu');
    this.navToggle = document.getElementById('nav-toggle');
    this.navLinks = document.querySelectorAll('.nav-link');
    
    this.bindEvents();
    this.updateActiveSection();
  },

  bindEvents() {
    // Mobile menu toggle
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Navigation links
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleNavClick(e));
    });

    // Hero action buttons
    const viewProjectsBtn = document.querySelector('a[href="#projects"]');
    const getInTouchBtn = document.querySelector('a[href="#contact"]');
    
    if (viewProjectsBtn) {
      viewProjectsBtn.addEventListener('click', (e) => this.handleNavClick(e));
    }
    
    if (getInTouchBtn) {
      getInTouchBtn.addEventListener('click', (e) => this.handleNavClick(e));
    }

    // Scroll event for nav background and active section
    window.addEventListener('scroll', utils.throttle(() => {
      this.handleScroll();
      this.updateActiveSection();
    }, 16));
  },

  toggleMobileMenu() {
    appState.isMenuOpen = !appState.isMenuOpen;
    if (this.navMenu) this.navMenu.classList.toggle('active');
    if (this.navToggle) this.navToggle.classList.toggle('active');
  },

  closeMobileMenu() {
    appState.isMenuOpen = false;
    if (this.navMenu) this.navMenu.classList.remove('active');
    if (this.navToggle) this.navToggle.classList.remove('active');
  },

  handleNavClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      utils.scrollToElement(href);
      this.closeMobileMenu();
    }
  },

  handleScroll() {
    appState.scrollY = window.scrollY;
    
    // Add scrolled class to nav
    if (appState.scrollY > 50) {
      if (this.nav) this.nav.classList.add('scrolled');
    } else {
      if (this.nav) this.nav.classList.remove('scrolled');
    }
  },

  updateActiveSection() {
    if (appState.isScrollingToSection) return;

    const sections = document.querySelectorAll('section[id]');
    const navHeight = this.nav ? this.nav.offsetHeight : 80;
    
    let currentSection = '';

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= navHeight + 100 && rect.bottom >= navHeight + 100) {
        currentSection = section.id;
      }
    });

    if (currentSection && currentSection !== appState.activeSection) {
      appState.activeSection = currentSection;
      
      this.navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }
};

// Hero section functionality
const hero = {
  init() {
    this.heroName = document.getElementById('hero-name');
    this.heroTagline = document.getElementById('hero-tagline');
    
    this.startTypingAnimation();
    this.createParticles();
  },

  startTypingAnimation() {
    if (!this.heroTagline) return;

    const text = portfolioData.personalInfo.tagline;
    const typeSpeed = 60;
    const startDelay = 1500;
    
    // Clear initial text
    this.heroTagline.textContent = '';
    
    setTimeout(() => {
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          this.heroTagline.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, typeSpeed);
        }
      };
      typeWriter();
    }, startDelay);
  },

  createParticles() {
    const particleContainer = document.querySelector('.hero-particles');
    if (!particleContainer) return;

    // Create floating particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 6 + 2}px;
        height: ${Math.random() * 6 + 2}px;
        background: ${Math.random() > 0.5 ? '#00D4FF' : '#0099FF'};
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.8 + 0.2};
        animation: float-particle ${Math.random() * 10 + 20}s linear infinite;
      `;
      particleContainer.appendChild(particle);
    }

    // Add CSS animation for particles
    if (!document.querySelector('#particle-styles')) {
      const style = document.createElement('style');
      style.id = 'particle-styles';
      style.textContent = `
        @keyframes float-particle {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }
};

// Scroll animations
const scrollAnimations = {
  init() {
    this.observeElements();
    this.createIntersectionObserver();
  },

  observeElements() {
    // Add animate-on-scroll class to elements that should animate
    const elementsToAnimate = [
      '.section-header',
      '.about-text',
      '.about-stats',
      '.skill-category',
      '.project-card',
      '.timeline-item',
      '.education-item',
      '.cert-item',
      '.contact-item',
      '.contact-form'
    ];

    elementsToAnimate.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        element.classList.add('animate-on-scroll');
        element.style.transitionDelay = `${index * 100}ms`;
      });
    });
  },

  createIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    });

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }
};

// Projects functionality
const projects = {
  init() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.projectsGrid = document.getElementById('projects-grid');
    
    // Render projects immediately
    this.renderProjects();
    this.bindFilterEvents();
  },

  bindFilterEvents() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = button.dataset.filter;
        this.filterProjects(filter);
        
        // Update active button
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        appState.currentFilter = filter;
      });
    });
  },

  renderProjects() {
    if (!this.projectsGrid) {
      console.error('Projects grid not found');
      return;
    }

    const projectsHTML = portfolioData.projects.map(project => `
      <div class="project-card" data-category="${project.category}">
        <div class="project-image" style="background: ${utils.getProjectGradient(project.category)}">
          <div class="project-icon" style="font-size: 3rem; color: rgba(255,255,255,0.8);">${project.icon}</div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <div>
              <h3 class="project-title">${project.title}</h3>
              <span class="project-category">${this.getCategoryName(project.category)}</span>
            </div>
          </div>
          <p class="project-description">${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.githubUrl}" class="project-link" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    `).join('');

    this.projectsGrid.innerHTML = projectsHTML;
    
    console.log(`Rendered ${portfolioData.projects.length} projects`);
    
    // Add scroll animation class with delay
    setTimeout(() => {
      this.projectsGrid.querySelectorAll('.project-card').forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 100}ms`;
      });
    }, 100);
  },

  getCategoryName(category) {
    const categoryNames = {
      ar: 'AR/COMPUTER VISION',
      web: 'FULL-STACK WEB',
      game: 'GAME DEVELOPMENT',
      iot: 'IOT/HARDWARE'
    };
    return categoryNames[category] || category.toUpperCase();
  },

  filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      const category = card.dataset.category;
      
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
        card.classList.remove('hidden');
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 50);
      } else {
        card.classList.add('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          if (card.classList.contains('hidden')) {
            card.style.display = 'none';
          }
        }, 300);
      }
    });
  }
};

// Skills functionality
const skills = {
  init() {
    this.addSkillInteractions();
  },

  addSkillInteractions() {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
      const skillTags = category.querySelectorAll('.skill-tag');
      
      skillTags.forEach((tag, index) => {
        // Add staggered hover effects
        tag.addEventListener('mouseenter', () => {
          setTimeout(() => {
            tag.style.transform = 'scale(1.1) rotate(2deg)';
          }, index * 20);
        });
        
        tag.addEventListener('mouseleave', () => {
          tag.style.transform = 'scale(1) rotate(0deg)';
        });

        // Add click effect for mobile
        tag.addEventListener('click', () => {
          tag.style.animation = 'pulse-electric 0.6s ease-in-out';
          setTimeout(() => {
            tag.style.animation = '';
          }, 600);
        });
      });
    });
  }
};

// Contact form functionality
const contact = {
  init() {
    this.form = document.getElementById('contact-form');
    if (this.form) {
      this.bindFormEvents();
      console.log('Contact form initialized');
    } else {
      console.error('Contact form not found');
    }
  },

  bindFormEvents() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Add real-time validation
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearErrors(input));
    });
  },

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    
    // Validate all fields
    const isValid = this.validateForm(data);
    
    if (isValid) {
      this.submitForm(data);
    }
  },

  validateForm(data) {
    let isValid = true;
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
    
    requiredFields.forEach(field => {
      if (!data[field] || !data[field].trim()) {
        this.showError(field, 'This field is required');
        isValid = false;
      }
    });
    
    // Validate email format
    if (data.email && !this.isValidEmail(data.email)) {
      this.showError('email', 'Please enter a valid email address');
      isValid = false;
    }
    
    return isValid;
  },

  validateField(input) {
    const value = input.value.trim();
    const name = input.name;
    
    this.clearErrors(input);
    
    if (!value && input.required) {
      this.showError(name, 'This field is required');
      return false;
    }
    
    if (name === 'email' && value && !this.isValidEmail(value)) {
      this.showError(name, 'Please enter a valid email address');
      return false;
    }
    
    return true;
  },

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  showError(fieldName, message) {
    const field = this.form.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    this.clearErrors(field);
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.cssText = `
      color: var(--color-error);
      font-size: var(--font-size-sm);
      margin-top: var(--space-4);
    `;
    
    field.parentNode.appendChild(errorElement);
    field.style.borderColor = 'var(--color-error)';
  },

  clearErrors(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
      existingError.remove();
    }
    field.style.borderColor = '';
  },

  async submitForm(data) {
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
      // Simulate API call (replace with actual endpoint)
      await this.simulateAPICall(data);
      
      // Show success message
      this.showSuccessMessage();
      this.form.reset();
      
    } catch (error) {
      // Show error message
      this.showErrorMessage('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  },

  simulateAPICall(data) {
    return new Promise((resolve, reject) => {
      console.log('Contact form data:', data);
      console.log(`Message from ${data.name} (${data.email}): ${data.message}`);
      setTimeout(() => {
        Math.random() > 0.1 ? resolve() : reject(new Error('Network error'));
      }, 2000);
    });
  },

  showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'form-message success';
    message.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
    message.style.cssText = `
      background: rgba(0, 255, 136, 0.1);
      color: var(--portfolio-success);
      padding: var(--space-16);
      border-radius: var(--radius-base);
      margin-bottom: var(--space-20);
      border: 1px solid rgba(0, 255, 136, 0.3);
      animation: fadeInUp 0.5s ease-out;
    `;
    
    this.form.parentNode.insertBefore(message, this.form);
    
    setTimeout(() => {
      message.remove();
    }, 5000);
  },

  showErrorMessage(text) {
    const message = document.createElement('div');
    message.className = 'form-message error';
    message.textContent = text;
    message.style.cssText = `
      background: rgba(255, 84, 89, 0.1);
      color: var(--color-error);
      padding: var(--space-16);
      border-radius: var(--radius-base);
      margin-bottom: var(--space-20);
      border: 1px solid rgba(255, 84, 89, 0.3);
      animation: fadeInUp 0.5s ease-out;
    `;
    
    this.form.parentNode.insertBefore(message, this.form);
    
    setTimeout(() => {
      message.remove();
    }, 5000);
  }
};

// Theme toggle functionality
const themeToggle = {
  init() {
    this.toggle = document.getElementById('theme-toggle');
    
    if (this.toggle) {
      this.icon = this.toggle.querySelector('.theme-icon');
      // Load saved theme
      this.loadSavedTheme();
      this.toggle.addEventListener('click', () => this.toggleTheme());
    }
  },

  toggleTheme() {
    const newTheme = appState.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  },

  setTheme(theme) {
    appState.currentTheme = theme;
    document.documentElement.setAttribute('data-color-scheme', theme);
    
    if (this.icon) {
      this.icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    
    // Save theme preference
    localStorage.setItem('rithik-portfolio-theme', theme);
  },

  loadSavedTheme() {
    const savedTheme = localStorage.getItem('rithik-portfolio-theme');
    if (savedTheme) {
      this.setTheme(savedTheme);
    }
  }
};

// Scroll to top functionality
const scrollToTop = {
  init() {
    this.button = document.getElementById('scroll-to-top');
    
    if (this.button) {
      this.button.addEventListener('click', () => this.scrollToTop());
      window.addEventListener('scroll', utils.throttle(() => this.handleScroll(), 100));
    }
  },

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 500) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  },

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};

// Easter eggs and special effects
const easterEggs = {
  init() {
    this.addKeyboardShortcuts();
    this.addClickEffects();
  },

  addKeyboardShortcuts() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', (e) => {
      konamiCode.push(e.code);
      konamiCode = konamiCode.slice(-konamiSequence.length);
      
      if (konamiCode.join('') === konamiSequence.join('')) {
        this.activateEasterEgg();
      }
    });
  },

  addClickEffects() {
    document.addEventListener('click', (e) => {
      if (e.target.closest('.hero-avatar')) {
        this.createClickRipple(e.pageX, e.pageY);
      }
    });
  },

  createClickRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 100px;
      height: 100px;
      border: 2px solid var(--portfolio-accent);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      pointer-events: none;
      z-index: 1000;
      animation: ripple-effect 0.6s ease-out forwards;
    `;

    document.body.appendChild(ripple);

    // Add CSS animation
    if (!document.querySelector('#ripple-styles')) {
      const style = document.createElement('style');
      style.id = 'ripple-styles';
      style.textContent = `
        @keyframes ripple-effect {
          to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    setTimeout(() => {
      ripple.remove();
    }, 600);
  },

  activateEasterEgg() {
    console.log('🎉 Konami Code activated! Welcome to the secret debug mode!');
    
    // Create rainbow effect on hero name
    const heroName = document.getElementById('hero-name');
    if (heroName) {
      heroName.style.animation = 'rainbow-text 2s linear infinite';
      
      // Add rainbow CSS animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes rainbow-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
      
      heroName.style.background = 'linear-gradient(-45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)';
      heroName.style.backgroundSize = '400%';
      heroName.style.webkitBackgroundClip = 'text';
      heroName.style.webkitTextFillColor = 'transparent';
      
      setTimeout(() => {
        heroName.style.animation = '';
        heroName.style.background = '';
        heroName.style.webkitBackgroundClip = '';
        heroName.style.webkitTextFillColor = '';
      }, 5000);
    }
    
    // Show debug info
    this.showDebugModal();
  },

  showDebugModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeInUp 0.3s ease-out;
    `;
    
    modal.innerHTML = `
      <div style="
        background: var(--portfolio-card);
        border: 1px solid var(--portfolio-accent);
        border-radius: var(--radius-lg);
        padding: var(--space-32);
        max-width: 500px;
        text-align: center;
        box-shadow: var(--shadow-electric);
      ">
        <h2 style="color: var(--portfolio-accent); margin-bottom: var(--space-16);">🎮 Debug Mode Activated!</h2>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--space-24);">
          You found the secret Konami Code! Here's some debug info:
        </p>
        <div style="background: var(--portfolio-darker); padding: var(--space-16); border-radius: var(--radius-base); margin-bottom: var(--space-24); font-family: monospace; text-align: left; font-size: 12px;">
          <div>Current Theme: ${appState.currentTheme}</div>
          <div>Active Section: ${appState.activeSection}</div>
          <div>Scroll Y: ${Math.round(appState.scrollY)}px</div>
          <div>Current Filter: ${appState.currentFilter}</div>
          <div>Projects Loaded: ${portfolioData.projects.length}</div>
          <div>Skills Categories: ${Object.keys(portfolioData.skills).length}</div>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="
          background: var(--portfolio-accent);
          color: var(--portfolio-dark);
          border: none;
          padding: var(--space-8) var(--space-24);
          border-radius: var(--radius-base);
          cursor: pointer;
          font-weight: 600;
        ">Close</button>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Auto close after 10 seconds
    setTimeout(() => {
      if (document.body.contains(modal)) {
        modal.remove();
      }
    }, 10000);
  }
};

// Performance monitoring
const performance = {
  init() {
    this.measureLoadTime();
    this.addPerformanceObserver();
  },

  measureLoadTime() {
    window.addEventListener('load', () => {
      const loadTime = window.performance.now();
      console.log(`🚀 Rithik's Portfolio loaded in ${Math.round(loadTime)}ms`);
      console.log('📊 Performance metrics:', {
        projects: portfolioData.projects.length,
        skills: Object.keys(portfolioData.skills).reduce((acc, key) => acc + portfolioData.skills[key].length, 0),
        experience: portfolioData.experience.length,
        certifications: portfolioData.certifications.length
      });
    });
  },

  addPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'navigation') {
            console.log('📈 Navigation timing:', entry);
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.log('Performance Observer not supported');
      }
    }
  }
};

// Main application initialization
const app = {
  init() {
    console.log('🚀 Initializing Rithik Verma\'s Portfolio...');
    console.log('📧 Contact:', portfolioData.personalInfo.email);
    console.log('🎓 Education:', portfolioData.education[0].institution);
    
    // Initialize loading screen
    loadingScreen.init();
    
    // Initialize performance monitoring
    performance.init();
    
    // Initialize easter eggs
    easterEggs.init();
    
    console.log('✅ Portfolio initialized successfully!');
  }
};

// Start the application
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('👋 Thanks for visiting Rithik\'s portfolio!');
  } else {
    console.log('🎉 Welcome back to Rithik\'s portfolio!');
  }
});

// Handle resize events
window.addEventListener('resize', utils.debounce(() => {
  console.log('📱 Responsive design activated:', window.innerWidth, 'x', window.innerHeight);
}, 250));

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioData, utils, appState };
}