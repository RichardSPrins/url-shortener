import * as React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomeView = ({ state, setState, success, setSuccess }) => {
  const urlRef = React.useRef(null)
  // React.useEffect(() => {
  //   return () => {
  //     setSuccess(false)
  //     setState(null)
  //   }
  // }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = urlRef.current.value
    const res = await axios.post('https://snip-my-url.herokuapp.com/api/url/snip', { longUrl: url })
    setState(res.data.data)
    setSuccess(true)
    urlRef.current.value = ''
  }

  return (
    <div className="App">
      <header>
        <h1>Snip your long URL's</h1>
      </header>
      <div>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
          <label htmlFor="url">Enter URL here</label>
          <input name='url' ref={urlRef} style={{ width: '40%', margin: '20px auto' }}></input>
          <button type="submit">Snip!</button>
        </form>
      </div>
      {
        success &&
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p>Here is your snipped link:</p>
          <a href={state?.shortUrl}>{state?.shortUrl}</a>
          <button type="button" style={{ marginTop: 10 }}><Link to={`/view/${state?.slug}`}>View More</Link></button>
        </div>}
    </div>
  );
}

export default HomeView