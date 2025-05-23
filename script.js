document.addEventListener('DOMContentLoaded', function() {
    // Replace 'https://yourwebsite.com' with your actual website URL
    const yourWebsiteBaseUrl = 'https://yourwebsite.com'; // Or use './' for relative paths if these are subdirectories

    const day1Button = document.getElementById('day1-btn');
    const day2Button = document.getElementById('day2-btn');
    const day3Button = document.getElementById('day3-btn');
    const day4Button = document.getElementById('day4-btn');
    const day5Button = document.getElementById('day5-btn');

    day1Button.addEventListener('click', function() {
        window.location.href = `${https://nagesh2006.github.io/portfolio-plain/}/day1`;
    });

    day2Button.addEventListener('click', function() {
        window.location.href = `${https://nagesh2006.github.io/new-portfolio/}/day2`;
    });

    day3Button.addEventListener('click', function() {
        window.location.href = `${https://nagesh2006.github.io/portfolio/}/day3`;
    });

    day4Button.addEventListener('click', function() {
        window.location.href = `${https://nagesh2006.github.io/teeshub/}/day4`;
    });

    day5Button.addEventListener('click', function() {
        window.location.href = `${yourWebsiteBaseUrl}/day5`;
    });
});