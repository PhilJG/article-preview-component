'use strict';

const share = document.getElementsByClassName('share');
const profile = document.querySelector('.profile');
const social = document.querySelector('.social');

const showSocial = function () {
  social.classList.toggle('flex');
  social.classList.toggle('hidden');
};

for (let i = 0; i < share.length; i++)
  share[i].addEventListener('click', showSocial);
