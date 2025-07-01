import { Button, Modal, Text, Title } from '@mantine/core'
import { useDisclosure, useLocalStorage } from '@mantine/hooks'
import { useEffect } from 'react'

export const R18NoticeDialog = () => {
  const [opened, { open, close }] = useDisclosure()

  const [noticeShowed, setNoticeShowed] = useLocalStorage({
    key: 'r18-notice-confirmed',
    defaultValue: false,
    getInitialValueInEffect: false,
  })

  const onClose = () => {
    close()
    setNoticeShowed(true)
  }

  useEffect(() => {
    if (noticeShowed || opened) {
      return
    }

    open()
  }, [noticeShowed, open, opened])

  return (
    <Modal
      opened={opened}
      onClose={() => {}}
      closeOnEscape={false}
      closeOnClickOutside={false}
      withCloseButton={false}
      trapFocus={false}
      size="md"
      centered
      transitionProps={{
        transition: 'fade',
        duration: 200,
        enterDelay: 1000,
      }}
    >
      <Title order={3} className="py-2">
        ⚠️ 警告
      </Title>
      <div className="py-2">
        <Text>本站包含成人内容，可能不适合所有观众。</Text>
        <Text>
          请确保您已年满 18 周岁，并且在您的国家或地区观看此类内容是合法的。
        </Text>
      </div>

      <div className="py-2 flex items-center justify-center flex-col gap-2">
        <Button className="w-full" onClick={onClose}>
          我已阅读以上内容，并确认我已满 18 周岁
        </Button>
        <Button
          className="w-full"
          variant="outline"
          color="red"
          onClick={() => window.close()}
        >
          退出
        </Button>
      </div>
    </Modal>
  )
}
