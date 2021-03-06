import * as React from 'react';
import axios from 'axios';

const SnipView = ({ slug }) => {
  const [snipData, setSnipData] = React.useState(null);

  const getData = async (slug) => {
    const res = await axios.get(`https://snip-my-url.herokuapp.com/api/url/info/${slug}`)
    setSnipData(res.data.data)
  }

  React.useEffect(() => {
    getData(slug)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Info about your Snip</h1>
      <p>OG URL: <a href={snipData?.ogUrl}>{snipData?.ogUrl}</a></p>
      <p>Snipped URL: <a href={snipData?.shortUrl}>{snipData?.shortUrl}</a></p>
      <img src={snipData?.qrCode} />
    </div>
  )
}

export default SnipView