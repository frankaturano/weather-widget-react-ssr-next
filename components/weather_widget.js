import weatherIcon from '../helpers/weather_icon'

export default ({ weather }) => (
  <div className="weather__widget">
    <div className="widget__slot slot--left">
      <div className="weather__widget--city">
        <b>{weather.location.city}</b>
      </div>
      <div className="weather__widget--condition">
        {weather.item.condition.text}
      </div>
    </div>
    <div className="widget__slot slot--right">
      <div className="weather__widget--high">
        <b>H</b> {weather.item.forecast[0].high}&deg;
      </div>
      <div className="weather__widget--low">
        <b>L</b> {weather.item.forecast[0].low}&deg;
      </div>
    </div>
    <div className="widget__slot slot--right">
      <img className="weather__widget--icon" 
        src={`static/icons/${weatherIcon(weather.item.condition.code)}.svg`} />
    </div>
    <div className="widget__slot slot--right">
      <div className="weather__widget--current">
        <b>{weather.item.condition.temp}&deg;</b>
      </div>
    </div>
    {/* Widget Specific Styles */}
    <style jsx>{`
      .weather__widget {
        width: 100%;
        font-family: sans-serif;
        letter-spacing: 1px;
        padding: 1.5rem 1rem;
        box-sizing: border-box;
        color: #3b3d3c;
        opacity: 0;
        transition: opacity .5s;
        position: absolute;
        top: 0;
        left: 0;
      }
      .weather__widget:nth-child(1) {
        opacity: 1;
      }
      .weather__widget--icon {
        width: 2.25rem;
        height: 2.25rem;
        margin-right: .5rem;
      }
      .widget__slot {
        display: inline-block;
      }
      .slot--right {
        float: right;
      }
      .weather__widget--current {
        font-size: 2rem;
      }
    `}</style>
  </div>
)
