const videos = document.querySelectorAll('.video');

const generateUrl = (id) => {
	let query = '?rel=0&showinfo=0&autoplay=1';

	return 'https://www.youtube.com/embed/' + id + query;
};

const createIframe = (id) => {
	let iframe = document.createElement('iframe');

	iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; encrypted-media');
	iframe.setAttribute('src', generateUrl(id));

	return iframe;
};

videos.forEach((el) => {
	let videoHref = el.getAttribute('data-video');
	let deletedLength = 'https://youtu.be/'.length;
	let videoId = videoHref.substring(deletedLength, videoHref.length);

	let img = el.querySelector('img');
	let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';
	img.setAttribute('src', youtubeImgSrc);

	el.addEventListener('click', (e) => {
		e.preventDefault();

		let iframe = createIframe(videoId);
		el.querySelector('img').remove();
		el.appendChild(iframe);
		el.querySelector('button').remove();
	});
});