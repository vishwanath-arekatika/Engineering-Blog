
/**
 * Vishwanath Arekatika | Engineering Blog Manager
 */

const blogs = [
    {
        id: 1,
        title: "Beyond Code—Saving Critical Seconds with Emergency QR",
        description: "The Vision & Impact: Exploring why I built Emergency QR to bridge the critical communication gap for first responders.",
        date: "Dec 20, 2025",
        url: "blogs/beyond-code.html",
        isFeatured: true
    },
    {
        id: 2,
        title: "Engineering Reliability—A Deep Dive into the Tech Stack",
        description: "A technical deep dive into choosing the MERN stack, Vite performance optimizations, and building a scalable API.",
        date: "Dec 22, 2025",
        url: "blogs/engineering-reliability.html",
        isFeatured: true
    },
    {
        id: 3,
        title: "Reality Check—Three Biggest Deployment Challenges",
        description: "Solving CORS issues, build pipeline failures, and environment variable mismatches in a production environment.",
        date: "Dec 25, 2025",
        url: "blogs/reality-check.html",
        isFeatured: true
    },
    {
        id: 4,
        title: "Scaling for Impact—Preparing for 1 Million Users",
        description: "An architectural roadmap for scaling the Emergency QR system using database sharding, Redis caching, and global CDNs.",
        date: "Dec 30, 2025",
        url: "blogs/scaling-for-impact.html",
        isFeatured: true
    }
];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileNav();
    renderBlogs();
});

function renderBlogs() {
    const featuredContainer = document.getElementById('featured-list');
    const allBlogsContainer = document.getElementById('all-blogs-list');

    if (featuredContainer) {
        const featuredBlogs = blogs.filter(b => b.isFeatured).slice(0, 4);
        featuredContainer.innerHTML = featuredBlogs.length > 0 
            ? featuredBlogs.map(blog => createBlogCard(blog)).join('')
            : '<p class="text-muted">No articles published yet. Check back soon.</p>';
    }

    if (allBlogsContainer) {
        allBlogsContainer.innerHTML = blogs.length > 0
            ? blogs.map(blog => createBlogCard(blog)).join('')
            : '<p class="text-muted">Stay tuned for upcoming technical articles.</p>';
    }
}

function createBlogCard(blog) {
    const isInsideSubfolder = window.location.pathname.includes('/blogs/');
    const pathPrefix = isInsideSubfolder ? '../' : '';
    
    return `
        <article class="blog-card">
            <span class="card-date">${blog.date}</span>
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <a href="${pathPrefix}${blog.url}" class="read-more">Read Technical Article &rarr;</a>
        </article>
    `;
}

function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('open');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when a link is clicked
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('open');
                document.body.classList.remove('no-scroll');
            });
        });
    }
}
