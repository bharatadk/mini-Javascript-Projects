const endDate = "16 June 2022 10:00:00 PM"

document.querySelector(".end-date").innerText = endDate;
const values = document.querySelectorAll("input");

function clock(){
	const end = new Date(endDate)
	const now = new Date()
	const diff = (end - now)/1000;//in seconds

	values[0].value = Math.floor(diff/(60*60*24));
	values[1].value = Math.floor(diff/(60*60))%24;
	values[2].value = Math.floor(diff/(60))%(60);
	values[3].value = Math.floor(diff)%(60);



}

setInterval(clock,1000)

