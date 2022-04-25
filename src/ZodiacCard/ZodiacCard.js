import './ZodiacCard.css';

export default function ZodiacCard({ zodiac }) {
  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
  return (
    <div className='zodiac-card' key={zodiac.name}>{zodiac.dates} <img src= {`/images/${zodiac.name}.png`}/>
    </div>
  );
}
