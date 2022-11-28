import { useSession, signIn } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe.js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribreButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()
  async function addSubscribre() {
    if (!session) {
      signIn('github')
      return
    }
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
      console.error(error)
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
