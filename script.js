const apiKey = '715f20facf9985f34f0af3d161fa42fb';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => {
       setWetherData(data)
    })
    
    // console.log(position);
}

const setWetherData = data => {
    const wetherData = {
        temperature: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        location: data.name,
        description: data.weather[0].main,
        date: getDate()
    }

    Object.keys(wetherData).forEach( key => {
        document.getElementById(key).textContent = wetherData[key];
    } )
    // console.log(data)

    onClear();
}

const onClear = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader')

    container.style.display = 'flex';
    loader.style.display = 'none';
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
}
const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}