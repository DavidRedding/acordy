document.addEventListener('DOMContentLoaded', () => {
  const accordyItems = document.querySelectorAll('.accordion-item');
  const contents = document.querySelectorAll('.accordion-content');
  const mediaContainer = document.getElementById('media-container');
  const mobileMediaContainer = document.getElementById('mobile-media-container');
  const kimDivs = document.querySelectorAll('div.kim'); // Select all kim divs

  // Media mappings with arrays of images
  const mediaMap = {
    1: [
      { img: 'https://placehold.co/295x402/7F1BF5/FFF/png', video: 'https://www.youtube.com/embed/6Wo4AhCdt84?si=Bzt8_BGy1Vzryvcu' },
      { img: 'https://placehold.co/295x402/7F1BF5/FFF/png', video: 'https://www.youtube.com/embed/z-JHBUPL3fc?si=5cYBGwskWR6oDXBX' },
      { img: 'https://placehold.co/295x402/7F1BF5/FFF/png', video: 'https://www.youtube.com/embed/EoazTVaJWyw?si=SqQ0khTu1jsGEobk' },
    ],

    2: [
      { img: 'https://placehold.co/295x402/0D3C9A/FFF/png', video: 'https://www.youtube.com/embed/NsxkpAgJx0o?si=FEfS6oEbOq_WLkih' },
      { img: 'https://placehold.co/295x402/0D3C9A/FFF/png', video: 'https://www.youtube.com/embed/RPPaoz2A5RM?si=FnARlzjmTfDNA5ep' },
      { img: 'https://placehold.co/295x402/0D3C9A/FFF/png', video: 'https://www.youtube.com/embed/NsxkpAgJx0o?si=FEfS6oEbOq_WLkih' },
    ],

    3: [
      { img: 'https://placehold.co/295x402/464EC2/FFF/png', video: 'https://www.youtube.com/embed/NsxkpAgJx0o?si=FEfS6oEbOq_WLkih' },
      { img: 'https://placehold.co/295x402/464EC2/FFF/png', video: 'https://www.youtube.com/embed/RPPaoz2A5RM?si=FnARlzjmTfDNA5ep' },
      { img: 'https://placehold.co/295x402/464EC2/FFF/png', video: 'https://www.youtube.com/embed/3ZSDk1Wm6eE?si=huT8iigAgsz_MtBj' },
    ],
    4: [
      { img: 'https://placehold.co/295x402/7E41E2/FFF/png', video: 'https://www.youtube.com/embed/6Gjo3vaVQcQ?si=Obzjx626s2mSTC5e' },
      { img: 'https://placehold.co/295x402/7E41E2/FFF/png', video: 'https://www.youtube.com/embed/z-JHBUPL3fc?si=5cYBGwskWR6oDXBX' },
      { img: 'https://placehold.co/295x402/7E41E2/FFF/png', video: 'https://www.youtube.com/embed/V80rrtigmu0?si=zlxdS__Iha6u_s1N' },
    ],
    5: [
      { img: 'https://placehold.co/295x402/4164dc/FFF/png', video: 'https://www.youtube.com/embed/NsxkpAgJx0o?si=FEfS6oEbOq_WLkih' },
      { img: 'https://placehold.co/295x402/4164dc/FFF/png', video: 'https://www.youtube.com/embed/RPPaoz2A5RM?si=FnARlzjmTfDNA5ep' },
      { img: 'https://placehold.co/295x402/4164dc/FFF/png', video: 'https://www.youtube.com/embed/3ZSDk1Wm6eE?si=huT8iigAgsz_MtBj' },
    ],
  };

  accordyItems.forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      const content = document.querySelector(`.accordion-content[data-content="${id}"]`);
      const icon = item.querySelector('.icon');

      // Toggle accordion
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        content.style.maxHeight = null;
        icon.textContent = '+';
        mediaContainer.innerHTML = ''; // Clear media on close
      } else {
        accordyItems.forEach((i) => {
          i.classList.remove('active');
          i.querySelector('.icon').textContent = '+';
        });
        contents.forEach((c) => (c.style.maxHeight = null));
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight * 4 + 'px';
        // content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = '−';

        // Update media
        updateMedia(mediaMap[id]);
      }
    });
  });

  kimDivs.forEach((kim, index) => {
    const mediaId = index + 1; // Assume kim divs are in order and correspond to mediaMap keys
    const mediaArray = mediaMap[mediaId]; // Get the media array for the current kim

    if (mediaArray) {
      // Populate kim with media items
      mediaArray.forEach(({ img, video }) => {
        const mediaItem = document.createElement('img');
        mediaItem.src = img;
        mediaItem.alt = 'Mediaz';
        mediaItem.classList.add('media-item');
        mediaItem.setAttribute('data-video-url', video);
        kim.appendChild(mediaItem);
      });
    }
  });

  function updateMedia(mediaArray) {
    // Save references to the gradient elements
    let topGradient = document.querySelector('.top-gradient');
    let btmGradient = document.querySelector('.btm-gradient');

    // Clear previous media
    mediaContainer.innerHTML = '';

    // Append the gradient elements back to the container
    if (topGradient && btmGradient) {
      console.log('appending gradients');
      mediaContainer.appendChild(topGradient);
      mediaContainer.appendChild(btmGradient);
    } else {
      topGradient = document.createElement('div');
      topGradient.classList.add('top-gradient');

      btmGradient = document.createElement('div');
      btmGradient.classList.add('btm-gradient');

      mediaContainer.appendChild(topGradient);
      mediaContainer.appendChild(btmGradient);
    }

    // Add new media items
    mediaArray.forEach(({ img, video }) => {
      const mediaItem = document.createElement('img');
      mediaItem.src = img;
      mediaItem.alt = 'Medias';
      mediaItem.classList.add('media-item');
      mediaItem.setAttribute('data-video-url', video); // Store video URL
      mediaContainer.appendChild(mediaItem);
    });

    // Attach click event listeners to media items
    const mediaItems = document.querySelectorAll('.media-item');

    mediaItems.forEach((item) => {
      item.addEventListener('click', () => {
        const videoUrl = item.getAttribute('data-video-url');
        if (videoUrl) {
          videoIframe.src = `${videoUrl}?&autoplay=1`; // Set iframe src with autoplay
          videoModal.style.display = 'flex'; // Show modal
        }
      });
    });
  }

  // Open the first accordion item and load its media by default
  updateMedia(mediaMap[1]);
});
