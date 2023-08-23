export const Icon = ({ icon }: { icon: string }) => {
  return (
    <img
      src={`/assets/icon/${icon}.svg`}
      alt={icon.replace('-', ' ') + 'icon'}
    />
  )
}
