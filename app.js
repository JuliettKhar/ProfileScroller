const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const profiles = profileIterator(data);
let next;
let profileDisplay;

function findElements() {
	next = document.querySelector('#next');
	profileDisplay = document.querySelector('#profileDisplay');
}

//Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  };
}

function nextProfile() {
	const currentProfile = profiles.next().value;

profileDisplay.innerHTML = ` 
		<ul class="list-group">
			<li class="list-group-item">Name:${currentProfile.name}</li>
			<li class="list-group-item">Age:${currentProfile.age}</li>
			<li class="list-group-item">Location:${currentProfile.location}</li>
			<li class="list-group-item">Preferences:${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
`;
		 document.querySelector('#imageDisplay').innerHTML = `<img src="${currentProfile.image}>`;
}

function subscribe() {
	next.addEventListener('click', nextProfile);
}

function init() {
		findElements();
		subscribe();

}

window.onload = init();