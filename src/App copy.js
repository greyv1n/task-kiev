import { useState } from 'react'

function App() {

  const [value, setValue] = useState('kiev');
  const [time, setTime] = useState();

  let now = new Date();
  let timeNow = now.getHours() + ':' + now.getMinutes();
  console.log(timeNow)

  function handleChange(e) {
    setValue(e.target.value)
    if(e.target.value === 'kiev') setTime(now.getHours() + ':' + now.getMinutes());
    if(e.target.value === 'warsaw') setTime(+now.getHours()-1 + ':' + now.getMinutes())
  }

  return (
    <>
      <div>Ваше время: {time}</div>
      <select value={value} onChange={handleChange}>
        <option value='kiev' > Kiev </option>
        <option value='warsaw' > Warsaw</option>
      </select >
    </>
  );
}

export default App;
