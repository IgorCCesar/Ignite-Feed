import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';


export function Sidebar() {
  return(
    <div>
      <aside className={styles.sidebar}>
        <img className={styles.cover} src="https://images.unsplash.com/photo-1672957581550-6b37dcdbf6ff?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D"/>
        
        <div className={styles.profile}>

          <Avatar src="https://github.com/igorccesar.png"/>
          <strong>Igor Cesar</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  )
}