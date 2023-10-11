import CampoTexto from '../CampoTexto';

export default function Formulario () {
 
    return(
        <form>

            <h1>Formulario</h1>

            <CampoTexto tipo="text" etiqueta="Nome" />
            <CampoTexto tipo="email" etiqueta="Email" />
            <CampoTexto tipo="Password" etiqueta="Senha" />

        </form>
    );
}