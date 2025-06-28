import { Tooltip } from '@ark-ui/react'
import type { CSSProperties } from 'react'
import { cn } from '../utils/cn'

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
          <a
            href="https://amaki.kiyume.top/"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 backdrop-blur-sm"
          >
            小说站
          </a>
          <Tooltip.Root
            openDelay={0}
            closeDelay={200}
            positioning={{ placement: 'top' }}
          >
            <Tooltip.Trigger className="bg-blue-200 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 backdrop-blur-sm">
              插图站
            </Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content>
                <span className="text-white bg-black py-1 px-2 rounded-lg">
                  🚧 建设中
                </span>
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
          <Tooltip.Root
            openDelay={0}
            closeDelay={200}
            positioning={{ placement: 'top' }}
          >
            <Tooltip.Trigger className="bg-blue-200 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 backdrop-blur-sm">
              百科站
            </Tooltip.Trigger>
            <Tooltip.Positioner>
              <Tooltip.Content>
                <span className="text-white bg-black py-1 px-2 rounded-lg">
                  🚧 建设中
                </span>
              </Tooltip.Content>
            </Tooltip.Positioner>
          </Tooltip.Root>
        </div>
      </div>
    </div>
  )
}

export default HomePage
