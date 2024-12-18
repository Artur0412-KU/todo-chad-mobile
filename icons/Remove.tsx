import React from 'react'
import { View } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function RemoveIcon() {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path d="M24.3715 12C24.3715 18.35 19.2097 23.5 12.8395 23.5C6.4692 23.5 1.30737 18.35 1.30737 12C1.30737 5.64998 6.4692 0.5 12.8395 0.5C19.2097 0.5 24.3715 5.64998 24.3715 12Z" fill="#F03636" stroke="#EB3D3D"/>
    <Rect x="7.44505" y="8.6059" width="1.6" height="11.2" rx="0.5" transform="rotate(-45 7.44505 8.6059)" fill="white"/>
    <Rect x="15.3647" y="7.47455" width="1.6" height="11.2" rx="0.5" transform="rotate(45 15.3647 7.47455)" fill="white"/>
   </Svg>
  )
}
