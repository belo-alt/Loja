document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const photoList = document.getElementById('photoList');
  
    if (uploadForm) {
      uploadForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        const description = document.getElementById('description').value;
        const photoUrl = document.getElementById('photoUrl').value;
  
        const response = await fetch('/api/photos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ description, photoUrl })
        });
  
        if (response.ok) {
          alert('Photo uploaded successfully');
          uploadForm.reset();
        } else {
          alert('Failed to upload photo');
        }
      });
    }
  
    if (photoList) {
      const fetchPhotos = async () => {
        const response = await fetch('/api/photos');
        const photos = await response.json();
        
        photoList.innerHTML = '';
        photos.forEach(photo => {
          const photoItem = document.createElement('div');
          photoItem.className = 'photo-item';
          photoItem.innerHTML = `
            <img src="${photo.photoUrl}" alt="Photo">
            <p>${photo.description}</p>
          `;
          photoList.appendChild(photoItem);
        });
      };
  
      fetchPhotos();
    }
  });
  