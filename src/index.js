import '@/scss/index.scss'
import {ToDo} from '@/components/todo/ToDo'
import {Header} from '@/components/header/Header'
import {Nav} from '@/components/nav/Nav'
import {Title} from '@/components/title/Title'
import {Board} from '@/components/board/Board'
import {Footer} from '@/components/footer/Footer'

const todo = new ToDo('#app', {
  components: [Header, Nav, Title, Board, Footer]
})

todo.render()
