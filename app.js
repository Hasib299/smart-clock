
 const houre		= document.getElementById('hour');
 const minute 		= document.getElementById('minute');
 const secound 		= document.getElementById('secound');
 
 const progress1 	= document.getElementById('progress1');
 const progress2 = document.getElementById("progress2");
 const progress3 = document.getElementById("progress3");

 
//clock function is here
function digitalClock() {
//time objects
	let date = new Date();

	let hr = date.getHours()
	let min  = date.getMinutes();
	let sec = date.getSeconds();
	
//progress bars
	progress1.style.width = (sec / 60) * 100 + "%";
	progress2.style.width = (min / 60) * 100 + "%";
	progress3.style.width = hr > 12 ? ((hr - 12) / 12) * 100 + '%' : (hr / 12) * 100 + '%';
	


	houre.textContent 		= hr;
	minute.textContent 		= min; 
	secound.textContent = sec;
//secounds conditions
{
		if(sec.valueOf() < 10){
			document.getElementById('secound').innerHTML = `0${sec}`
		};
	}
//minutes conditions
{
		if (min.valueOf() < 10) {
		minute.innerHTML=`0${min}`
	}	
}
//hours conditions
{
if (hr > 12) {
		if (hr < 22 && hr>12) {
			document.getElementById('hour').innerHTML = `0${hr-12}`;
		}
		else {
			document.getElementById("hour").innerHTML = `${hr-12}`;
	}
	
	} else if (hr == 0) {
		document.getElementById('hour').innerHTML =12;
	}
	else if (hr.valueOf() < 10 ) {
		document.getElementById('hour').innerHTML =`0${hr}`;
	}
	else {
		document.getElementById('hour').innerHTML =hr;
	}
}
	
}
//clock end



//date function 
function days() {
	let date = new Date();
    let day = date.getDay();

    switch (day) {
      case 0:
        day = "রবিবার";
        break;
      case 1:
        day = "সোমবার";
        break;
      case 2:
        day = "মঙ্গলবার";
        break;
      case 3:
        day = "বুধবার";
        break;
      case 4:
        day = "বৃহস্পতিবার";
        break;
      case 5:
        day = "শুক্রবার";
        break;
      case 6:
        day = " শনিবার";
        break;
    }
    document.getElementById("days").innerHTML = day;
}

//massges function

function massges() {
	let dhoure = new Date().getHours();

	if (dhoure > 4 && dhoure < 10) {
		document.querySelector("#usr_mdg").innerHTML = "Good morning....";
	} else if (dhoure > 10 && dhoure < 17) {
		document.querySelector("#usr_mdg").innerHTML = "Have a good Day....";
	} else if (dhoure > 17 && dhoure < 20) {
		document.querySelector("#usr_mdg").innerHTML = "Good evening....";
	} else {
		document.querySelector("#usr_mdg").innerHTML = "Good Night....";
	}
}

//month function 
function getFullMonth() {

	let date = new Date();
	let months = date.getMonth();

  switch (months) {
    case 0:
      months = "January";
      break;
    case 1:
      months = "February";
      break;
    case 2:
      months = "March";
      break;
    case 3:
      months = "April";
      break;
    case 4:
      months = "May";
      break;
    case 5:
      months = "June";
      break;
    case 6:
      months = "July";
      break;
    case 7:
      months = "August";
      break;
    case 8:
      months = "September";
      break;
    case 9:
      months = "October";
      break;
    case 10:
      months = "November";
      break;
    case 11:
      months = "December";
      break;
  }

  let days =
    date.getDate().valueOf() < 10 ? `0${date.getDate()} ${months}`: date.getDate() + months;
	
 let year = date.getFullYear();

  document.getElementById("date").innerHTML = days;
  document.getElementById("year").innerHTML = "Years " + year;

  document.getElementById("date").style.color = "red";
  document.getElementById("year").style.color = "red";
	
}


//functions call 
 
function functionsCall(params) {
	setInterval(digitalClock, 1000);
	days();
	massges();
	getFullMonth();

}
functionsCall()