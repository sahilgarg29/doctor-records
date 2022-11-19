let form = document.querySelector('#masaiForm');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log(getFormData());
	appendData(getFormData());
});

function getFormData() {
	let name = document.getElementById('name').value;
	let doctorId = document.getElementById('doctor_id').value;
	let specialization = document.getElementById('specialization').value;
	let experience = document.getElementById('experience').value;
	let email = document.getElementById('email').value;
	let mobile = document.getElementById('mobile').value;

	let role = '';

	if (experience > 5) {
		role = 'Senior';
	} else if (experience >= 2 && experience <= 5) {
		role = 'Junior';
	} else {
		role = 'Trainee';
	}
	return { name, doctorId, specialization, experience, email, mobile, role };
}

function appendData(data) {
	let tr = document.createElement('tr');

	for (let key in data) {
		let td = document.createElement('td');
		td.innerHTML = data[key];

		tr.append(td);
	}

	let btn = document.createElement('button');
	btn.textContent = 'Delete';

	btn.addEventListener('click', (e) => {
		e.target.parentNode.remove();
	});

	tr.append(btn);

	document.querySelector('tbody').append(tr);
}
