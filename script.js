const shareOff = document.querySelector('.share-off');
const profile = document.querySelector('.profile');
const social = document.querySelector('.social');

const showSocial = function () {
  if (social.classList.contains('hidden')) {
    social.classList.add('flex');
  }
};

const hideSocial = function () {
  if (social.classList.contains('flex')) {
    social.classList.add('hidden');
    social.classList.remove('flex');
    console.log('visible');
  }
};

shareOff.addEventListener('click', showSocial);
shareOff.addEventListener('click', hideSocial);

// share.addEventListener('click', function () {
//   if (!social.classList.contains('hidden')) social.classList.add('hidden');
// });
