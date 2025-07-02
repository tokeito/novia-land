import { Tooltip, UnstyledButton } from '@mantine/core'
import { useEffect, useRef } from 'react'
import { R18NoticeDialog } from '@/components/shared/Dialog/R18NoticeDialog'
import { cn } from '@/utils/cn'
import ParallaxModule from 'parallax-js'

const HomePage = () => {
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadParallax = async () => {
      try {
        if (sceneRef.current) {
          const parallaxInstance = new ParallaxModule(sceneRef.current, {
            relativeInput: true,
            clipRelativeInput: false,
            hoverOnly: false,
            invertX: false,
            invertY: false,
            scalarX: 12,
            scalarY: 12,
            limitX: 30,
            limitY: 30,
            frictionX: 0.03,
            frictionY: 0.03,
          })

          return () => {
            if (parallaxInstance) parallaxInstance.destroy()
          }
        }
      } catch (error) {
        console.error('Failed to load parallax-js:', error)
      }
    }

    loadParallax()
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        ref={sceneRef}
        id="scene"
        className="absolute inset-0 z-0 overflow-visible"
        style={{ width: '100%', height: '100%' }}
      >
        <div
          data-depth="0.2"
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100vh',
            overflow: 'visible',
          }}
        >
          <div
            className="w-full h-full bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: 'url("/bg.webp")',
              transform: 'scale(1.2)',
            }}
          />
        </div>
      </div>

      <div
        className={cn(
          'relative z-10 w-full h-full',
          'flex justify-center items-center',
        )}
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

        <R18NoticeDialog />
      </div>
    </div>
  )
}

export default HomePage
