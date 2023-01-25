
import { Card } from '../Card/Card'
import './Body.css'


const noticias = [
  {
    date: '02 de jul, 2021',
    title: 'Agora é oficial: o Windows 11 está vindo',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
    estado:'false'
  },
  {
    date: '02 de jul, 2021',
    title: 'Tim Berners-Lee vai leiloar código-fonte da web',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    estado:'true'
  },
  {
    date: '02 de jul, 2021',
    title: 'Tem Firefox novo no pedaço e você vai querer migrar',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. ',
    estado:'false'
    
  },
  {
    date: '02 de jul, 2021',
    title: 'John McAfee, criador do antivírus McAfee, morre',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    estado:'true'
    
  }
]

export function Body() {
  return(
    <div className="main">
      {
        noticias.map((noticia, i) =>
          <Card
            key={`${noticia.date}-${i}`}
            date={noticia.date}
            title={noticia.title}
            paragraph={noticia.paragraph}
            estado={noticia.estado}
          />
        )
      }
    </div>  
  )
}
