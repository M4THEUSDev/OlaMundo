import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'


export default function rodape () {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />

            Desenvolvido por Matheus De Assis
        </footer>
    )
}