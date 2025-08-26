(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9739796bb30e71ae',t:'MTc1NTk0MDIwMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

        // // Mobile menu toggle
        // const menuBtn = document.getElementById('menu-btn');
        // const mobileMenu = document.getElementById('mobile-menu');
        
        // menuBtn.addEventListener('click', () => {
        //     mobileMenu.classList.toggle('hidden');
        // });
      (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9739796bb30e71ae',t:'MTc1NTk0MDIwMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

        // // Mobile menu toggle
        // const menuBtn = document.getElementById('menu-btn');
        // const mobileMenu = document.getElementById('mobile-menu');
        
        // menuBtn.addEventListener('click', () => {
        //     mobileMenu.classList.toggle('hidden');
        // });
           const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a'); // all links inside mobile menu

    // Toggle menu on button click
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); 
        });
    });
        


        // Navigation active state
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkillBars() {
            skillBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            });
        }
        
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Animate skill bars when skills section is in viewport
        window.addEventListener('scroll', () => {
            const skillsSection = document.getElementById('skills');
            if (isInViewport(skillsSection)) {
                animateSkillBars();
            }
        });
        
        // Initial check for skills section
        if (isInViewport(document.getElementById('skills'))) {
            animateSkillBars();
        }
        
       
        // Resume modal functionality
        const previewBtn = document.getElementById('preview-cv');
        const resumeModal = document.getElementById('resume-modal');
        const closeModal = document.getElementById('close-modal');
        const closeModalBtn = document.getElementById('close-modal-btn');
        
        previewBtn.addEventListener('click', () => {
            resumeModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        const closeResumeModal = () => {
            resumeModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        };
        
        closeModal.addEventListener('click', closeResumeModal);
        closeModalBtn.addEventListener('click', closeResumeModal);
        
        // Close modal when clicking outside
        resumeModal.addEventListener('click', (e) => {
            if (e.target === resumeModal) {
                closeResumeModal();
            }
        });
        
        // Download functionality
        const downloadPdf = document.getElementById('download-pdf');
        const downloadWord = document.getElementById('download-word');
        const downloadText = document.getElementById('download-text');
        const modalDownloadPdf = document.getElementById('modal-download-pdf');
        
        // For demo purposes, we'll just simulate a download
        const simulateDownload = (format) => {
            // Create a temporary link
            const link = document.createElement('a');
            link.href = '#';
            link.download = `Adedeji_Adebayo_Resume.${format}`;
            
            // Show download started message
            const downloadMessage = document.createElement('div');
            downloadMessage.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
            downloadMessage.innerHTML = `<i class="fas fa-check-circle mr-2"></i> Download started: Adedeji_Adebayo_Resume.${format}`;
            document.body.appendChild(downloadMessage);
            
            // Remove the message after 3 seconds
            setTimeout(() => {
                downloadMessage.remove();
            }, 3000);
        };
        
        downloadPdf.addEventListener('click', (e) => {
            e.preventDefault();
            simulateDownload('pdf');
        });
        
        downloadWord.addEventListener('click', (e) => {
            e.preventDefault();
            simulateDownload('docx');
        });
        
        downloadText.addEventListener('click', (e) => {
            e.preventDefault();
            simulateDownload('txt');
        });
        
        modalDownloadPdf.addEventListener('click', (e) => {
            e.preventDefault();
            simulateDownload('pdf');
        });
        
        // Project pages functionality
        const viewAllProjectsBtn = document.getElementById('view-all-projects');
        const projectsPage = document.getElementById('projects-page');
        const closeProjectsPage = document.getElementById('close-projects-page');
        const projectDetailBtns = document.querySelectorAll('.project-detail-btn');
        const projectDetailModal = document.getElementById('project-detail-modal');
        const closeProjectModal = document.getElementById('close-project-modal');
        const projectModalTitle = document.getElementById('project-modal-title');
        const projectModalContent = document.getElementById('project-modal-content');
        
        // Project data
        const projectData = {
            elearning: {
                title: 'E-Learning Platform',
                description: 'A comprehensive online learning platform designed to provide an engaging educational experience for students and instructors.',
                features: [
                    'User authentication and authorization',
                    'Course creation and management',
                    'Interactive video lessons',
                    'Progress tracking and analytics',
                    'Discussion forums and chat',
                    'Assignment submission system',
                    'Certificate generation',
                    'Mobile-responsive design'
                ],
                technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary', 'Stripe API'],
                challenges: [
                    'Implementing real-time communication for live classes',
                    'Creating a scalable video streaming solution',
                    'Designing an intuitive course creation interface',
                    'Ensuring secure payment processing'
                ],
                outcomes: [
                    'Successfully deployed platform serving 500+ users',
                    'Achieved 95% user satisfaction rating',
                    'Reduced course creation time by 60%',
                    'Implemented secure payment system processing $10k+ monthly'
                ]
            },
            ecommerce: {
                title: 'E-Commerce Website',
                description: 'A full-featured online store with modern design and comprehensive functionality for both customers and administrators.',
                features: [
                    'Product catalog with search and filters',
                    'Shopping cart and wishlist',
                    'Secure checkout process',
                    'Order tracking system',
                    'Admin dashboard',
                    'Inventory management',
                    'Customer reviews and ratings',
                    'Email notifications'
                ],
                technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Nodemailer', 'Cloudinary'],
                challenges: [
                    'Implementing complex state management with Redux',
                    'Creating a secure payment gateway integration',
                    'Optimizing performance for large product catalogs',
                    'Building responsive design for all devices'
                ],
                outcomes: [
                    'Processed 1000+ orders in first month',
                    'Achieved 99.9% uptime reliability',
                    'Reduced cart abandonment by 40%',
                    'Increased mobile conversions by 65%'
                ]
            },
            taskmanager: {
                title: 'Task Management App',
                description: 'A productivity application designed to help individuals and teams organize, track, and complete their tasks efficiently.',
                features: [
                    'Task creation and organization',
                    'Project categorization',
                    'Due date reminders',
                    'Team collaboration tools',
                    'Progress visualization',
                    'Time tracking',
                    'File attachments',
                    'Mobile synchronization'
                ],
                technologies: ['JavaScript', 'React.js', 'Firebase', 'Tailwind CSS', 'Chart.js', 'PWA'],
                challenges: [
                    'Implementing real-time synchronization across devices',
                    'Creating intuitive drag-and-drop interfaces',
                    'Optimizing offline functionality',
                    'Building comprehensive notification system'
                ],
                outcomes: [
                    'Improved team productivity by 45%',
                    'Reduced project completion time by 30%',
                    'Achieved 4.8/5 user rating',
                    'Successfully deployed as PWA with offline support'
                ]
            },
            taskmanager: {
                title: 'Task Management App',
                description: 'A productivity application designed to help individuals and teams organize, track, and complete their tasks efficiently.',
                features: [
                    'Task creation and organization',
                    'Project categorization',
                    'Due date reminders',
                    'Team collaboration tools',
                    'Progress visualization',
                    'Time tracking',
                    'File attachments',
                    'Mobile synchronization'
                ],
                technologies: ['JavaScript', 'React.js', 'Firebase', 'Tailwind CSS', 'Chart.js', 'PWA'],
                challenges: [
                    'Implementing real-time synchronization across devices',
                    'Creating intuitive drag-and-drop interfaces',
                    'Optimizing offline functionality',
                    'Building comprehensive notification system'
                ],
                outcomes: [
                    'Improved team productivity by 45%',
                    'Reduced project completion time by 30%',
                    'Achieved 4.8/5 user rating',
                    'Successfully deployed as PWA with offline support'
                ]
            }
        };
        
        // Show all projects page
        viewAllProjectsBtn.addEventListener('click', () => {
            projectsPage.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        // Close projects page
        const closeProjectsPageHandler = () => {
            projectsPage.classList.add('hidden');
            document.body.style.overflow = 'auto';
        };
        
        closeProjectsPage.addEventListener('click', closeProjectsPageHandler);
        
        // Close projects page when clicking outside
        projectsPage.addEventListener('click', (e) => {
            if (e.target === projectsPage) {
                closeProjectsPageHandler();
            }
        });
        
        // Show project details
        const showProjectDetails = (projectKey) => {
            const project = projectData[projectKey];
            if (!project) return;
            
            projectModalTitle.textContent = project.title;
            projectModalContent.innerHTML = `
                <div class="space-y-8">
                    <div>
                        <h4 class="text-2xl font-semibold text-purple-400 mb-4">Project Overview</h4>
                        <p class="text-gray-300 text-lg leading-relaxed">${project.description}</p>
                    </div>
                    
                    <div>
                        <h4 class="text-2xl font-semibold text-blue-400 mb-4">Key Features</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            ${project.features.map(feature => `
                                <div class="flex items-center text-gray-300">
                                    <i class="fas fa-check-circle text-purple-400 mr-3"></i>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-2xl font-semibold text-purple-400 mb-4">Technologies Used</h4>
                        <div class="flex flex-wrap gap-3">
                            ${project.technologies.map(tech => `
                                <span class="glass-effect text-blue-400 px-4 py-2 rounded-full border border-blue-500/30">${tech}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-2xl font-semibold text-blue-400 mb-4">Challenges & Solutions</h4>
                        <div class="space-y-3">
                            ${project.challenges.map(challenge => `
                                <div class="glass-effect p-4 rounded-xl border border-gray-700">
                                    <p class="text-gray-300">${challenge}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-2xl font-semibold text-purple-400 mb-4">Results & Impact</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${project.outcomes.map(outcome => `
                                <div class="glass-effect p-4 rounded-xl border border-purple-500/30">
                                    <div class="flex items-start">
                                        <i class="fas fa-trophy text-purple-400 mr-3 mt-1"></i>
                                        <p class="text-gray-300">${outcome}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="flex justify-center space-x-4 pt-6">
                        <a href="#" class="glass-effect neon-glow text-white px-6 py-3 rounded-full hover:bg-white/10 transition duration-300 flex items-center">
                            <i class="fas fa-external-link-alt mr-2"></i>Live Demo
                        </a>
                        <a href="#" class="glass-effect text-purple-400 hover:text-white px-6 py-3 rounded-full hover:bg-white/10 transition duration-300 flex items-center border border-purple-500/30">
                            <i class="fab fa-github mr-2"></i>View Code
                        </a>
                    </div>
                </div>
            `;
            
            projectDetailModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        };
        
        // Close project detail modal
        const closeProjectDetailModal = () => {
            projectDetailModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        };
        
        closeProjectModal.addEventListener('click', closeProjectDetailModal);
        
        // Close modal when clicking outside
        projectDetailModal.addEventListener('click', (e) => {
            if (e.target === projectDetailModal) {
                closeProjectDetailModal();
            }
        });
        
        // Add event listeners to all project detail buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.project-detail-btn')) {
                const btn = e.target.closest('.project-detail-btn');
                const projectKey = btn.getAttribute('data-project');
                showProjectDetails(projectKey);
            }
        });