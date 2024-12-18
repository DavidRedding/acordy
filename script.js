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
    mediaArray.forEach(({ img, video, name, title }) => {
      const mediaItem = document.createElement('div');
      mediaItem.style.backgroundImage = `url(${img})`;
      mediaItem.classList.add('media-item');
      mediaItem.setAttribute('data-video-url', video); // Store video URL

      // Create item content
      const itemContent = document.createElement('div');
      itemContent.classList.add('item-content');

      // Create name and title elements
      const nameDiv = document.createElement('div');
      nameDiv.classList.add('name');
      const nameH5 = document.createElement('h5');
      nameH5.innerHTML = name;
      const titleH6 = document.createElement('h6');
      titleH6.innerHTML = title;
      nameDiv.appendChild(nameH5);
      nameDiv.appendChild(titleH6);

      // Create play button
      const playDiv = document.createElement('div');
      playDiv.classList.add('play');
      playDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
      <path d="M15.8218 29.0793C23.5038 29.0793 29.7311 22.8519 29.7311 15.17C29.7311 7.48814 23.5038 1.26074 15.8218 1.26074C8.13999 1.26074 1.9126 7.48814 1.9126 15.17C1.9126 22.8519 8.13999 29.0793 15.8218 29.0793Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.9715 10.2672C12.861 10.1876 12.7293 10.1426 12.5932 10.1379C12.457 10.1331 12.3226 10.1689 12.2068 10.2407C12.091 10.3124 11.9991 10.4169 11.9428 10.5409C11.8864 10.6649 11.8681 10.8029 11.8902 10.9373V19.4037C11.8684 19.5381 11.8869 19.6759 11.9434 19.7996C11.9999 19.9235 12.0918 20.0277 12.2075 20.0993C12.3232 20.1709 12.4576 20.2066 12.5936 20.2018C12.7295 20.1971 12.8611 20.1521 12.9715 20.0726L21.6945 15.7111C22.2884 15.4136 22.2884 14.9274 21.6945 14.6298L12.9715 10.2672Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;

      // add tracking here data-wa-link

      // Append name, title, and play button to item content
      itemContent.appendChild(nameDiv);
      itemContent.appendChild(playDiv);

      // Append item content to media item
      mediaItem.appendChild(itemContent);

      // Append media item to media container
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
