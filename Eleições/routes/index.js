import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from '../componentes/Inicio'
import Resultado from '../componentes/Resultado'
import Votar from '../componentes/Votar'

const Rotas = {
    Home: {
        nome: 'Home',
        screen: Home
    },
    Resultado: {
        nome: 'Resultado',
        screen: Resultado
    },    
    Votar: {
        nome: 'Votar',
        screen: Votar
    }
}

const Navegacao = createSwitchNavigator(Rotas)

export default createAppContainer(Navegacao)