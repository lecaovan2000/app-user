import * as React from "react"

function IconUser(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M24 0C10.751 0 0 10.751 0 24s10.751 24 24 24 24-10.751 24-24S37.249 0 24 0zm0 1c12.708 0 23 10.291 23 23S36.708 47 24 47 1 36.709 1 24 11.292 1 24 1zm-.52 10.434c-3.021 0-5.48 2.469-5.48 5.5 0 3.03 2.459 5.5 5.48 5.5 3.022 0 5.48-2.47 5.48-5.5.001-3.031-2.458-5.5-5.48-5.5zm0 1c2.48 0 4.481 2.007 4.48 4.5 0 2.492-2 4.5-4.48 4.5a4.483 4.483 0 01-4.48-4.5c0-2.493 2.001-4.5 4.48-4.5zm-2.98 11c-4.148 0-7.5 3.368-7.5 7.529v4.516a.5.5 0 00.5.5h20a.5.5 0 00.5-.5v-4.516c0-4.161-3.352-7.53-7.5-7.53h-6zm0 1h6c3.609 0 6.5 2.902 6.5 6.529v4.016h-3v-4.024a.5.5 0 10-1 0v4.024H18v-4.024a.5.5 0 10-1 0v4.024h-3v-4.016c0-3.627 2.891-6.53 6.5-6.53z"
        color="#000"
        fontFamily="sans-serif"
        fontWeight={400}
        overflow="visible"
        style={{
          lineHeight: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          blockProgression: "tb",
          isolation: "auto",
          mixBlendMode: "normal"
        }}
      />
    </svg>
  )
}

export default IconUser
