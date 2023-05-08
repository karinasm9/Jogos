import sims from '../../assets/Sims.png'
import roblox from '../../assets/roblox.png'
import minecraft from '../../assets/minecraft.png'
import sonic from '../../assets/sonic.png'
import fort from '../../assets/fort.png'
import pokem from '../../assets/pokem.png'
import naruto from '../../assets/naruto.png'
import zelda from '../../assets/zelda.png'
import megam from '../../assets/megam.png'
import dbz from '../../assets/dbz.png'

const gerarEstrelasAleatorias = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const gerarPrecoAleatorias = (min, max) => {
    return Math.floor(Math.random () * (max - min + 1) + min)
}

const jogos = {
    titulo: 'Jogos',
    lista: [
        {
            nome: 'The Sims',
            imagem: sims,
            plataforma: 'Origin',
            estrelas: gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'The Sims',
                    foto: sims,
                    conteudo: 'The Sims é uma série de jogos eletrônicos de simulação de vida real criado pelo designer de jogos Will Wright e produzida pela Maxis. O jogador cria pessoas virtuais chamadas "Sims" e administra suas necessidades, humores e desejos. Os jogadores podem colocar seus Sims em casas pré-construídas ou construí-las do zero. Também é possível construir lotes comunitários, como praças, bares e restaurantes. Cada pacote de expansão aumenta as possibilidades de seu respectivo jogo base. Os jogos foram portados e convertidos para diversas plataformas, incluindo Nintendo, computadores, celulares, Playstation, GameBoy Advance, GameCube, Android, iOS e Xbox.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'Origin',
                }
            ]
        },
        {
            nome: 'Roblox',
            imagem: roblox,
            plataforma: 'Sandbox',
            estrelas: gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Roblox',
                    foto: roblox,
                    conteudo: 'Roblox é uma plataforma de jogos MMOSG e Sandbox baseados normalmente em mundo aberto, multiplataforma e simulação que permite criar do zero seu próprio mundo virtual chamado de experiência ou place onde os milhares de jogadores da plataforma podem interagir sobre.Roblox possui mais de 500.000 criadores de experiências e 700 milhões de usuários ativos mensais, que já registraram mais de 300 milhões de horas de uso.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'Sandbox',
                }
            ]
        },
        {
            nome: 'Sonic',
            imagem: sonic,
            plataforma: 'Stitch',
            estrelas: gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Sonic',
                    foto: sonic,
                    conteudo: 'Aspectos diversos constam no jogo, focando sempre a diversão do player. Combate corpo-a-corpo é uma das atrações do novo sonic, bem como diversos quesitos de jogabilidade inovadores e atributos técnicos nunca vistos antes em um game cujo protagonista é o herói azulado. Uma das grandes novidades em sonic unleashed é a transição entre dia e noite. Com o passar do dia, o aclamado personagem recebe missões diferentes e, consequentemente, executa ações variadas. Essa é uma das várias inovações implantadas pelo sonic team, que procura reinventar o famoso ouriço azul tentando manter o sucesso que o personagem causou dentro do mercado de games.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'Stitch',
                }
            ]
        },
        {
            nome: 'Fortinite',
            imagem: fort,
            plataforma: 'Switch',
            estrelas: gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Fortinite',
                    foto: fort,
                    conteudo: 'Fortnite é um jogo eletrônico multijogador online, desenvolvido pela Epic Games e lançado como diferentes modos de jogo que compartilham a mesma jogabilidade e motor gráfico de jogo. Os modos de jogo incluem Fortnite: Save the World, um jogo cooperativo pay-to-play de sobrevivência para até quatro jogadores, que devem lutar contra carcaças (zumbis) e defender objetos com fortificações que eles podem construir, e Fortnite Battle Royale, um jogo free-to-play do gênero battle royale, onde até 100 jogadores lutam em espaços cada vez menores para serem a última pessoa ou time vencedor. Ambos os modos de jogo foram lançados em 2017 como títulos de acesso antecipado; Save the World está disponível apenas para Microsoft Windows, PlayStation 4 e Xbox One, enquanto Battle Royale foi lançado para essas mesmas plataformas, incluindo o Nintendo Switch e dispositivos Android.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'Snes',
                }
            ]
        },
        {
            nome: 'Pokémon GO',
            imagem: pokem,
            plataforma: 'Smartphones',
            estrelas: gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Pokémon GO',
                    foto: pokem,
                    conteudo: 'Pokémon GO é um jogo eletrônico free-to-play de realidade aumentada voltado para smartphones. O jogo é desenvolvido entre a Niantic, Inc., a Nintendo e a The Pokémon Company para as plataformas iOS e Android. O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente expandindo para o resto do mundo. Com o uso do sistema de posicionamento global (GPS) e a câmara de dispositivos compatíveis, o jogo permite aos jogadores capturar, batalhar, e treinar criaturas virtuais chamadas Pokémon, que aparecem na tela do jogador usando realidade aumentada. Também há um acessório opcional, o Pokémon Go Plus, alerta os usuários quando Pokémon estiverem nas proximidades.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'Snes',
                }
            ]
        },
        {
            nome: 'Minecraft',
            imagem: minecraft,
            plataforma: 'Sandbox',
            estrelas : gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Minecraft',
                    foto: minecraft,
                    conteudo: 'Minecraft é um jogo eletrônico sandbox de sobrevivência criado pelo desenvolvedor sueco Markus "Notch" Persson e posteriormente desenvolvido e publicado pela Mojang Studios, cuja propriedade intelectual foi obtida pela Microsoft em 2014. Em Minecraft, os jogadores exploram um mundo aberto tridimensional intencionalmente em blocos, pixelizado e gerado proceduralmente, podendo descobrir e extrair matérias-primas, ferramentas artesanais, construir estruturas ou terraplenagens e, dependendo do modo de jogo, podem combater inimigos controlados por computador, bem como cooperar ou competir contra outros jogadores no mesmo mundo. ',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'PlayStation 4',
                }
            ]
        },
        {
            nome: 'Megaman X',
            imagem: megam,
            plataforma: 'Snes',
            estrelas: gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Megaman X',
                    foto: megam,
                    conteudo: 'Mega Man X é um jogo de plataforma com elementos de ação lançado pela Capcom em 1993 para o Super Nintendo (SNES), é o primeiro jogo de Mega Man em um console de 16-bits. O primeiro jogo da série Mega Man X, sendo a primeira subsérie da série Mega Man, que havia surgido no antecessor do SNES, o Nintendo Entertainment System (NES). O jogo segue o protagonista Mega Man X, um membro androide de uma força-tarefa militar chamada de "Maverick Hunters". Com a ajuda de seu parceiro Zero, X deve frustrar os planos de Sigma, um líder maverick poderoso que deseja trazer a extinção humana.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'Snes',
                }
            ]
        },
        {
            nome: 'Dragon ball Z',
            imagem: dbz,
            plataforma: 'Switch',
            estrelas : gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Dragon ball Z',
                    foto: dbz,
                    conteudo: 'Dragon Ball Z: Battle of Z é um jogo de role-playing baseado na franquia manga e anime de Dragon Ball. Foi desenvolvido pela Artdink e publicado pela Bandai Namco Games. O jogo promove o lançamento do filme Dragon Ball Z: A Batalha dos Deuses. Com a apârencia do primeiro jogo eletrônico da forma Goku Deus Super Saiyajin, bem como dos personagens Bills e Whis.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'Switch',
                }
            ]
        },
        {
            nome: 'Zelda',
            imagem: zelda,
            plataforma: 'N64',
            estrelas: gerarEstrelasAleatorias (1, 5),
            detalhes: [
                {
                    descricao: 'Zelda',
                    foto: zelda,
                    conteudo: 'The Legend of Zelda é uma série de jogos eletrônicos da Nintendo criada em 1986 por Shigeru Miyamoto e Takashi Tezuka. É centrado em jogos eletrônicos de ação e aventura e alguns elementos de RPG. A maioria de seus títulos são produzidos e publicados pela Nintendo com alguns jogos e relançamentos sendo desenvolvidos por empresas terceirizadas. Os jogos se passam no reino de Hyrule, num cenário de fantasia. A franquia concentra-se em títulos focados no gênero ação e aventura, além de RPG de ação e resolução de quebra-cabeças.',
                    valor: `R$${gerarPrecoAleatorias(399, 50)}`,
                    console: 'N64',
                }
            ]
        },
        
    ]
}

export default jogos;