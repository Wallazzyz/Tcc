const apiKey = 'c7534610d34d9bdc5152a508e3682f35';
const city = prompt("Digite o nome da cidade para ver o clima:");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    document.getElementById('weather-info').innerHTML = 
      `A temperatura em ${city} é de ${temperature}°C com ${weatherDescription}.`;
  })
  .catch(error => {
    console.error("Erro ao buscar os dados:", error);
    document.getElementById('weather-info').innerHTML = 
      "Não foi possível obter o clima dessa cidade.";
  });
