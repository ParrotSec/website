import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'
import Safety from 'containers/FeaturesSection/assets/Security.svg'
import Build from '../containers/FeaturesSection/assets/Build.svg'
import Vector from '../containers/FeaturesSection/assets/Vector.svg'

export const SecurityIcon = (props: SvgIconProps) => <SvgIcon component={Safety} {...props} />
export const PortabilityIcon = (props: SvgIconProps) => <SvgIcon component={Build} {...props} />
export const PerformanceIcon = (props: SvgIconProps) => <SvgIcon component={Vector} {...props} />
