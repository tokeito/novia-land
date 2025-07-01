import { Tooltip, UnstyledButton } from '@mantine/core'
import type { CSSProperties } from 'react'
import { cn } from '@/utils/cn'

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
          <UnstyledButton
            component="a"
            href="https://amaki.kiyume.top/"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 backdrop-blur-sm"
          >
            小说站
          </UnstyledButton>
          <Tooltip
            label="🚧 建设中"
            transitionProps={{
              duration: 200,
              transition: 'pop',
            }}
          >
            <UnstyledButton
              className="bg-blue-200 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 backdrop-blur-sm"
              disabled
            >
              插图站
            </UnstyledButton>
          </Tooltip>
          <Tooltip
            label="🚧 建设中"
            transitionProps={{
              duration: 200,
              transition: 'pop',
            }}
          >
            <UnstyledButton
              className="bg-blue-200 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 backdrop-blur-sm"
              disabled
            >
              百科站
            </UnstyledButton>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default HomePage
