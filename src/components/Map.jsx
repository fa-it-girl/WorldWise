
import { useNavigate, useSearchParams } from 'react-router-dom'
import classes from './Map.module.css'

const Map = () => {
  const [searchParams, setSearchParams ] = useSearchParams([])
  const navigate = useNavigate()
  const lat = searchParams.get('lat')
  const lng= searchParams.get('lng')


  return (
    <>
    <h1 className={classes.mapContainer} onClick={()=> navigate('form')}> map</h1>
    <p>{lat}</p><br/>
    <p>{lng}</p>

    <button onClick={() => setSearchParams({lat: 50, lng: 34})}>Change position</button>
    </>

  )
}

export default Map
