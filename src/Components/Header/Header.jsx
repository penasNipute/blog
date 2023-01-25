import './Header.css'

import { MagnifyingGlass } from 'phosphor-react'

export function Header() {
  return(
    <div className="header">
      <div className="container">
        <div className="logos">
          <div className="logo_1">
            Codelândia
          </div>
          <div className="logo_2">
            blog
          </div>
        </div>
        
        <div className="input">
          <label htmlFor="search">
            <MagnifyingGlass weight='bold' size={23} color='white' cursor={'pointer'}/>
          </label>
          <input type="search" id='search' placeholder='Pesquisar no blog'/>
        </div>
      </div>
    </div>
  )
}