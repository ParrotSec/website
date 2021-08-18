import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import OSCard from 'components/OSCard'

const OSSelector = () => {
  const [selected, setSelected] = useState({ home: false, security: false, cloud: false })
  const [hovered, setHovered] = useState({ home: false, security: true, cloud: false })

  return (
    <section>
      <Grid container justifyContent="center">
        <Grid container item xs={12} justifyContent="space-around">
          <OSCard
            type="home"
            glow={hovered.home}
            style={{ opacity: selected.home ? 1 : 0.5 }}
            disabled={!selected.home}
            onMouseEnter={() => {
              setHovered({ ...hovered, home: true })
            }}
            onMouseLeave={() => {
              setHovered({ ...hovered, home: false })
            }}
            onClick={() => {
              setSelected({ home: true, security: false, cloud: false })
            }}
          />
          <OSCard
            type="security"
            glow={hovered.security}
            style={{ opacity: selected.security ? 1 : 0.5 }}
            disabled={!selected.security}
            onMouseEnter={() => {
              setHovered({ ...hovered, security: true })
            }}
            onMouseLeave={() => {
              setHovered({ ...hovered, security: false })
            }}
            onClick={() => {
              setSelected({ home: false, security: true, cloud: false })
            }}
          />
          <OSCard
            type="cloud"
            glow={hovered.cloud}
            style={{ opacity: selected.cloud ? 1 : 0.5 }}
            disabled={!selected.cloud}
            onMouseEnter={() => {
              setHovered({ ...hovered, cloud: true })
            }}
            onMouseLeave={() => {
              setHovered({ ...hovered, cloud: false })
            }}
            onClick={() => {
              setSelected({ home: false, security: false, cloud: true })
            }}
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default OSSelector
