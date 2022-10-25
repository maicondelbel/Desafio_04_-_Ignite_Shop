import { CircleNotch } from 'phosphor-react'
import { LoaderContainer } from '../styles/components/loader'

export default function Loader() {
  return (
    <LoaderContainer>
      <CircleNotch size={48} weight="bold">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 0 0"
          to="360 0 0"
          repeatCount="indefinite"
        ></animateTransform>
      </CircleNotch>
    </LoaderContainer>
  )
}
