import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} ref={ref} {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M10.32 4.32c.43-1.76 2.93-1.76 3.35 0a1.72 1.72 0 0 0 2.58 1.06c1.54-.94 3.3.83 2.37 2.37a1.72 1.72 0 0 0 1.06 2.58c1.76.42 1.76 2.92 0 3.34a1.72 1.72 0 0 0-1.06 2.58c.94 1.54-.83 3.3-2.37 2.37a1.72 1.72 0 0 0-2.58 1.06c-.42 1.76-2.92 1.76-3.34 0a1.72 1.72 0 0 0-2.58-1.06c-1.54.94-3.3-.83-2.37-2.37a1.72 1.72 0 0 0-1.06-2.58c-1.76-.42-1.76-2.92 0-3.34a1.72 1.72 0 0 0 1.06-2.58c-.94-1.54.83-3.3 2.37-2.37 1 .61 2.3.07 2.58-1.06z" />
      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
