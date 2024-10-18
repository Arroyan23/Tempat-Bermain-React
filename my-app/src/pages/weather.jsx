// untuk membaca halaman weather function
// import "/public/style/weather.css";
// untuk memanggil fetch data dari api nya
import { useState, useEffect } from "react";

function Weather() {
  // fetch data dengan use Effect
  const [weatherCondition, setWeatherCondition] = useState([]);
  const [mainWeather, setMainWeather] = useState({});

  //   untuk menampilkan waktu dan bisa di update dengan tiap 1 detik
  // untuk setting bagian hanya menunjukan jam dan menit
  // maka gunakan object dibawah ini
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  //   setiap 1 detik maka akan di refresh sehingga terus berputar
  useEffect(() => {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=f85acfd052751e17212bdb481758b7f2"
    )
      .then((response) => response.json())
      .then((responses) => {
        setWeatherCondition(responses.weather);
        setMainWeather(responses.main);
      });
  }, []);

  const changeToCelcius = (kelvin) => {
    const celcius = Math.floor(kelvin - 273.15);
    return celcius;
  };

  return (
    <>
      {/* debugging
    dengan menggunakan map */}
      <div className="container">
        <h1>Cuaca Di Jakarta</h1>
        <div
          class="row d-flex justify-content-center py-5 "
          style={{ maxWidth: "100%" }}
        >
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card text-body" style={{ borderRadius: "35px" }}>
              <div class="card-body p-4">
                <div class="d-flex">
                  <h6 class="flex-grow-1">Jakarta</h6>
                  <h6>{time}</h6>
                </div>

                <div class="d-flex flex-column text-center mt-5 mb-4">
                  <h6 class="display-4 mb-0 font-weight-bold">
                    {" "}
                    {changeToCelcius(mainWeather.feels_like)}°C{" "}
                  </h6>
                  <span class="small" style={{ color: "#868B94" }}>
                    {weatherCondition.map((e, i) => {
                      return <div className="">{e.main}</div>;
                    })}
                  </span>
                </div>

                <div class="d-flex align-items-center">
                  <div class="flex-grow-1" style={{ fontSize: "1rem" }}>
                    <div>
                      <i
                        class="fas fa-wind fa-fw"
                        style={{ color: "#868B94" }}
                      ></i>{" "}
                      <span class="ms-1"> 40 km/h</span>
                    </div>
                    <div>
                      <i
                        class="fas fa-tint fa-fw"
                        style={{ color: "#868B94" }}
                      ></i>{" "}
                      <span class="ms-1"> 84%</span>
                    </div>
                    <div>
                      <i
                        class="fas fa-sun fa-fw"
                        style={{ color: "#868B94" }}
                      ></i>{" "}
                      <span class="ms-1"> 0.2h</span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                      width="100px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
