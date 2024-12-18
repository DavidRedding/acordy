document.addEventListener('DOMContentLoaded', () => {
  const accordyItems = document.querySelectorAll('.accordion-item');
  const contents = document.querySelectorAll('.accordion-content');
  const mediaContainer = document.getElementById('media-container');
  const mobileMediaContainer = document.getElementById('mobile-media-container');
  const kimDivs = document.querySelectorAll('div.kim'); // Select all kim divs

  // Media mappings with arrays of images
  const mediaMap = {
    1: [
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Innovation_Kristin.png', video: 'https://www.youtube.com/embed/cRwNQOCMKsQ?si=9UoS_uzOWRJYr4Pj', name: 'Kristin K.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //innovate - flush
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Innovation_Eric.png', video: 'https://www.youtube.com/embed/iH1NyCcreFs?si=5YvFWaZijXDQGwmv', name: 'Eric S.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //innovate - top
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Innovation_Gordon.png', video: 'https://www.youtube.com/embed/Rm5iCEz16jo?si=bYl9QEM6ep0MIUqv', name: 'Gordon R.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //innovate - btm
    ],

    2: [
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Technology_Eric.png', video: 'https://www.youtube.com/embed/E6W1vukdVSk?si=P4-YA_AdemgocjX5', name: 'Eric S.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //tech - flush
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Growth_Tim.png', video: 'https://www.youtube.com/embed/MvJQEaoro6U?si=ZpSUx0Yak-glCQn5', name: 'Tim W.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //tech - top
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Technology_Chassity.png', video: 'https://www.youtube.com/embed/6pnsLrktob4?si=FM3LHfjvSZKBQwFU', name: 'Chassity M.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //tech - btm
    ],

    3: [
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Training_Gordon.png', video: 'https://www.youtube.com/embed/UGM2coPHSeE?si=8Y5205SkygLaKqqh', name: 'Gordon R.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //train - flush
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Training_Christina.png', video: 'https://www.youtube.com/embed/A6Y7gc6Be3Q?si=GYntzVpOOuYyY_07', name: 'Christina P', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //train - top
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Training_Chassity.png', video: 'https://www.youtube.com/embed/6IXTNE4LIOg?si=CSLGsMFSMi5y8DqZ', name: '', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //train - btm
    ],
    4: [
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Community_Chassity.png', video: 'https://www.youtube.com/embed/Kq88kUyH5Zw?si=ncx1KdtSRM-6Iwrs', name: 'Chassity M.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //comm - flush
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Community_Michelle.png', video: 'https://www.youtube.com/embed/BKzMhE38TM4?si=8cFfg5hBMMAC7Jdu', name: 'Michelle S.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //comm - top
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Community_Christina.png', video: 'https://www.youtube.com/embed/6Wo4AhCdt84?si=Bzt8_BGy1Vzryvcu', name: 'Christina P', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //comm - btm
    ],
    5: [
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Growth_Eric.png', video: 'https://www.youtube.com/embed/Z7GswB6lBWI?si=4J3O50v1aIO6FCGl', name: 'Eric S.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //growth - flush
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Growth_Tim.png', video: 'https://www.youtube.com/embed/4Yz-W2lllbc?si=W7z6EpLbi_gdY3fjU', name: 'Tim W.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //growth - top
      { img: 'https://digitalasset.intuit.com/render/content/dam/intuit/pcg/en_us/Tax2024/photo/reputation-images/Growth_Chassity.png', video: 'https://www.youtube.com/embed/2dZmTOltuFE?si=xNlXfR_Xi7zsMVhC', name: 'Chassity M.', title: 'Independent Tax & <br/>Accounting Firm Owner' }, //growth - btm
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
      const mediaItem = document.createElement('div');
      mediaItem.style.backgroundImage = `url(${img})`;
      mediaItem.alt = 'Medias';
      mediaItem.classList.add('media-item');
      mediaItem.setAttribute('data-video-url', video); // Store video URL
      mediaContainer.appendChild(mediaItem);
      // add tracking here data wa
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
