import toast from 'react-hot-toast'

export interface NotifyProps {
  notify: {
    success: (message: string) => void
    error: (message: string) => void
    info: (message: string) => void
  }
}

const notify = () => ({
  success(message: string) {
    if (toast) return toast.success(message, { duration: 5000 })
    return message
  },
  error(message: string) {
    return toast.error(message, { duration: 5000 })
  },
  info(message: string) {
    return toast(message, {
      icon: '❕'
    })
  }
})

export default notify()
