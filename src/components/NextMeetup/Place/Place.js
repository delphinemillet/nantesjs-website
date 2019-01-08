import React from 'react'
import { number } from 'prop-types'
import { FullWidthContainer } from '../../FullWidthContainer'
import ReactMapGL, { Marker } from 'react-map-gl'

import styles from './Place.module.css'

import 'mapbox-gl/dist/mapbox-gl.css'

const accessToken = process.env.GATSBY_MAPBOX_TOKEN

Place.propTypes = {
  latitude: number,
  longitude: number,
}

export function Place ({ latitude, longitude }) {
  if (!latitude || !longitude) return null

  const coordinates = { longitude, latitude }

  return (
    <FullWidthContainer className={styles.place}>
      <div className={styles.place__map}>
        {typeof window !== 'undefined' && (
          <ReactMapGL
            mapboxApiAccessToken={accessToken}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            {...coordinates}
            zoom={16}
            width="100%"
            height="100%"
          >
            <Marker {...coordinates} offsetLeft={-25} offsetTop={-25}>
              <img
                src="http://nantesjs.org/images/logotype.png"
                height="50px"
              />
            </Marker>
          </ReactMapGL>
        )}
      </div>
    </FullWidthContainer>
  )
}