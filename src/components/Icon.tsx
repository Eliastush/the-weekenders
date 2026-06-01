type IconName =
  | 'community'
  | 'target'
  | 'star'
  | 'rocket'
  | 'heart'
  | 'spark'
  | 'chat'
  | 'message'
  | 'phone'
  | 'location'
  | 'email'
  | 'calendar'
  | 'download'
  | 'menu'
  | 'close'

const iconPaths: Record<IconName, string> = {
  community:
    'M7 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-5 9c3.86 0 7-3.14 7-7 0-1.67-.66-3.19-1.74-4.29C14.83 8.58 13.47 8 12 8s-2.83.58-3.26 1.21A6.97 6.97 0 0 0 7 13.5c0 3.86 3.14 7 7 7z',
  target:
    'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-6a1 1 0 0 1 1 1v2.07a8.01 8.01 0 0 1 6.93 6.93H21a1 1 0 1 1 0 2h-2.07a8.01 8.01 0 0 1-6.93 6.93V21a1 1 0 1 1-2 0v-2.07a8.01 8.01 0 0 1-6.93-6.93H3a1 1 0 1 1 0-2h2.07A8.01 8.01 0 0 1 9 5.07V3a1 1 0 0 1 1-1z',
  star:
    'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  rocket:
    'M12 2C8.13 2 5 5.13 5 9c0 1.77.64 3.39 1.7 4.66L5 18l4.34-1.7A7.98 7.98 0 0 0 12 19c3.87 0 7-3.13 7-7s-3.13-10-7-10zm0 2c2.76 0 5 2.24 5 5s-1.1 2.93-1.73 3.5c-.5.44-1.36.64-2.27.64-.86 0-1.7-.18-2.27-.64C8.1 11.93 7 10.76 7 9c0-2.76 2.24-5 5-5z',
  heart:
    'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  spark:
    'M12 2l1.53 4.91L19 8.5l-4 3.13L15.06 18 12 15.73 8.94 18 9 11.63 5 8.5l5.47-.59L12 2z',
  chat:
    'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z',
  message:
    'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
  phone:
    'M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.72 11.72 0 0 0 3.7.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.75 21 3 13.25 3 4.91A1 1 0 0 1 4 4h3.5a1 1 0 0 1 1 1 11.72 11.72 0 0 0 .59 3.7 1 1 0 0 1-.21 1.11l-2.2 2.2z',
  location:
    'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
  email:
    'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  calendar:
    'M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z',
  download:
    'M5 20h14v-2H5v2zm7-18l-7 7h4v6h6v-6h4l-7-7z',
  menu:
    'M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z',
  close:
    'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
}

export default function Icon({
  name,
  label,
  className,
}: {
  name: IconName
  label?: string
  className?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className ? `icon ${className}` : 'icon'}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
    >
      {label ? <title>{label}</title> : null}
      <path d={iconPaths[name]} fill="currentColor" />
    </svg>
  )
}
