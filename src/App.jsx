import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/igorccesar.png",
      name: 'Igor Cesar',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-24-01 09:44:00')   
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educator Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-24-01 09:44:00')   
  },
]

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Igor Cesar" 
            content="Lorem Deserunt unde etsequatur consequuntuluptas at."
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
