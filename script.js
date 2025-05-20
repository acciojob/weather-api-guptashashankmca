// async function getWeather(){
// 	const apiKey = "3581693e48907eebbe85c175f0aa3453";
// 	const city = "London";
// 	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
// 	try {
// 		const response = await fetch (url);
// 		if(!response.ok) throw new Error `failed to fetch weather data`;
// 		const data = await response.json();
// 		const condition = data.weather[0].main;
// 		document.getElementById("weatherData").innerText=`Current weather in London: ${condition}`;
// 	} catch (error) {
// 		document.getElementById().innerText = `Error in fetching data`;
// 		console.log(error);
// 	}
// }

async function getWeather(){
	const apiKey = "3581693e48907eebbe85c175f0aa3453";
	const city = "London";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error('failed to fetch weather data');
		const data = await response.json();
		const condition = data.weather[0].main;
		document.getElementById("weatherData").innerText = `Current weather in London: ${condition}`;
	} catch (error) {
		document.getElementById("weatherData").innerText = `Error in fetching data`;
		console.log(error);
	}
}
