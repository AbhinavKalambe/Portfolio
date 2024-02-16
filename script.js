// Define the content of your CV file (replace this with your actual CV content)
const cvContent = "Abhinav_";

// Convert the content to a Blob object
const blob = new Blob([cvContent], { type: 'text/plain' });

// Create a URL for the Blob object
const url = URL.createObjectURL(blob);

// Get the download link element
const downloadLink = document.getElementById('downloadLink');

// Set the href attribute of the download link to the generated URL
downloadLink.href = url;

// Set the download attribute to specify the filename (optional)
downloadLink.setAttribute('download', 'Abhinav Resume'); // Change the filename extension accordingly

// Optionally, you can revoke the URL object once the download link is clicked
downloadLink.addEventListener('click', () => {
  setTimeout(() => URL.revokeObjectURL(url), 100);
});
    