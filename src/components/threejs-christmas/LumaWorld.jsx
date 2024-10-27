import { extend } from '@react-three/fiber'
import pkg from '@lumaai/luma-web'
const { LumaSplatsThree } = pkg

extend({ LumaSplats: LumaSplatsThree })

export default function LumaWorld({ visible }) {
  return (
    <lumaSplats
      source="https://lumalabs.ai/capture/4da7cf32-865a-4515-8cb9-9dfc574c90c2"
      enableThreeShaderIntegration={false}
      position={[-250, -113, 50]}
      scale={208.5}
      visible={visible}
    />
  )
}
