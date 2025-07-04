import { Button, Tooltip } from '@mantine/core'
import type { CSSProperties } from 'react'
import { R18NoticeDialog } from '@/components/shared/Dialog/R18NoticeDialog'
import { cn } from '@/utils/cn'

type NavigationLinkItem = {
  label: string
  href: string
  external: boolean
  enabbled: boolean
}

const NavigationLinks: NavigationLinkItem[] = [
  {
    label: '小说站',
    href: 'https://amaki.kiyume.top/',
    external: true,
    enabbled: true,
  },
  {
    label: '插图站',
    href: '/',
    external: false,
    enabbled: false,
  },
  {
    label: '百科站',
    href: '/',
    external: false,
    enabbled: false,
  },
]

const HomePage = () => {
  const backgroundImageStyle: CSSProperties = {
    backgroundImage: 'url("bg.webp")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div
      style={backgroundImageStyle}
      className={cn('w-screen h-screen', 'flex justify-center items-center')}
    >
      <div className="text-center">
        <div className="text-white text-shadow-black text-2xl font-semibold mb-2 drop-shadow-lg text-shadow-sm">
          欢迎来到
        </div>
        <div className="text-white text-shadow-black text-6xl font-bold mb-8 drop-shadow-lg text-shadow-lg">
          诺维亚大陆
        </div>

        <div className="flex gap-4 justify-center">
          {NavigationLinks.map(item => (
            <NavigationButton key={item.label} {...item} />
          ))}
        </div>
      </div>

      <R18NoticeDialog />
    </div>
  )
}

const NavigationButton = (item: NavigationLinkItem) => {
  const renderButton = () => (
    <Button
      component="a"
      href={item.href}
      rel={item.external ? 'noopener noreferrer' : undefined}
      target={item.external ? '_blank' : undefined}
      disabled={!item.enabbled}
      className={cn(
        'py-3 px-6 ',
        'shadow-lg backdrop-blur-sm',
        'transition-colors duration-200',
      )}
      size="lg"
      radius="lg"
    >
      {item.label}
    </Button>
  )

  if (!item.enabbled) {
    return (
      <Tooltip
        label="🚧 建设中"
        transitionProps={{
          duration: 200,
          transition: 'pop',
        }}
      >
        {renderButton()}
      </Tooltip>
    )
  }

  return renderButton()
}

export default HomePage
