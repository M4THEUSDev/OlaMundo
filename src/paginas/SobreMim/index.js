import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/Foto_sobre_mim.jpg";


export default function Sobremim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Matheus!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Matheus De Assis sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou desenvolvedor Front-end e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou na Universidade Cidade De São Paulo (Unicid), quando comecei o ensino superior integrado ao curso de Análise e desenvolvimento de sistemas. Eu aprendi lógica de programação e o básico de várias linguagens, como C#, Python, Java, mas sem  aprofundar muito em cada uma delas.
            </p>

            <p className={styles.paragrafo}>

                Logo em seguida, passei no processo seletivo do curso fornecido pelo Instituto proa, com foco em Desenvolvimento Web Java. Lá eu consegui desenvolver um projeto em equipe chamado Entre linhas, com foco nos profissionais do ramo da costura. Lá eu tive a oportunidade de estudar desenvolvimento web para me tornar um desenvolvedor front-end.
            </p>

            <p className={styles.paragrafo}>

                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>

            <p className={styles.paragrafo}>

                E foi enquanto eu estava no curso do Instituto Proa que decidi fazer a inscrição para o programa da Oracle em parceria com a Alura em desenvolvimento web. Para minha felicidade, fui escolhido para me aprofundar a modalidade escolhida.
            </p>

            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados, seguindo em busca de um estágio.  Hoje sou muito feliz de ver a minha trajetória até o momento e isto é somente o começo!
            </p>
        </PostModelo>
    )

}