import '@/scss/index.scss'
import {ToDo} from '@/components/todo/ToDo'
import {Header} from '@/components/header/Header'
import {Nav} from '@/components/nav/Nav'
import {Title} from '@/components/title/Title'
import {Board} from '@/components/board/Board'

const todo = new ToDo('body', {
  components: [Header, Nav, Title, Board]
})

todo.render()
