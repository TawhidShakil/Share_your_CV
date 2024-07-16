document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get('username');
  document.getElementById('usernameDisplay').textContent = username;

  document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('cvUpload');
    if (fileInput.files.length > 0) {
      uploadFile(fileInput.files[0]);
    } else {
      alert('Please select a file to upload.');
    }
  });
});

function uploadFile(file) {
  // Simulating upload process
  setTimeout(function() {
    alert('CV uploaded successfully!');
    showShareButtons(); // Show share buttons after successful upload
  }, 1000); // Adjust time as needed or replace with actual upload process
}

function showShareButtons() {
  document.getElementById('socialMediaShare').classList.remove('hidden');
  const shareLink = generateShareLink(); // Generate shareable link
  document.getElementById('shareLink').value = shareLink; // Display link in input field
}

function generateShareLink() {
  // Replace with your actual upload path or server link
  return 'https://example.com/uploads/cv.pdf';
}

function shareOnFacebook() {
  const shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.getElementById('shareLink').value);
  window.open(shareUrl, '_blank');
}

function shareOnTwitter() {
  const shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(document.getElementById('shareLink').value) + '&text=' + encodeURIComponent('Check out my CV!');
  window.open(shareUrl, '_blank');
}

function shareOnInstagram() {
  alert('Instagram does not support direct sharing from web pages. Please share manually.');
}
