import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'
export function SignInButton() {
  const userIsLogged = false
  return userIsLogged ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Dilan Lopez
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#397fbb" />
      Entrar com github
    </button>
  )
}
