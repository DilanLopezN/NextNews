import { useSession, signIn } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribreButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()
  function addSubscribre() {
    if (!session) {
      signIn('github')
      return
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribreButton}
      onClick={addSubscribre}
    >
      Se inscrever agora
    </button>
  )
}
