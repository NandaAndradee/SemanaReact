import roteiro from "../service/dados"
import dados from "../service/dados"
import Titulo from "./Titulo"

function Card() {
    return(
        <div>
            <Titulo texto="Chile - Roteiros de Viagens"/>
            {roteiro.map(roteiro =>{
                return(

                    <ul>
                        <li>{roteiro.nome}</li>
                        <li>{roteiro.descricao}</li>
                        <img src="{roteiro.imagem}" alt="{roteiro.nome}" />
                    </ul>

                )

            })}
        </div>
       
    )
}

export default Card