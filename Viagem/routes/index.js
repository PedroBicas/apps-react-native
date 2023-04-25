import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Home from '../componentes/Home'
import Login from '../componentes/Login'
import Cadastro from '../componentes/Cadastro'
import Passagem from '../componentes/Passagem'
import Destino from '../componentes/Destino'
const Rotas = {
    Home: {
        nome: 'Home',
        screen: Home
    },
    Login: {
        nome: 'Login',
        screen: Login
    },    
    Cadastro: {
        nome: 'Cadastro',
        screen: Cadastro
    },
    Passagem: {
        nome: 'Passagem',
        screen: Passagem
    },
    Destino: {
        nome: 'Destino',
        screen: Destino
    }
    
}

const Navegacao = createSwitchNavigator(Rotas)

export default createAppContainer(Navegacao)