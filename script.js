window.onload = function () {
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // Path to your PDF file
    link.download = 'Resume.pdf'; // Name of the downloaded file
    link.click();
};
