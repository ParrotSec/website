import Github from 'containers/ContributeContainers/assets/github.svg'
import Gitlab from 'containers/ContributeContainers/assets/gitlab.svg'
import Milestones from 'containers/ContributeContainers/assets/milestone.svg'
import Todo from 'containers/ContributeContainers/assets/todo.svg'

export default [
  {
    title: 'Public Todo list',
    description:
      'Check our kanban boards, view the status of our tasks, track our bugs and help us spot, track and fix the most important issues.',
    url: 'https://nest.parrotsec.org/org/parrot/-/blob/master/README.md',
    icon: Todo
  },
  {
    title: 'Milestones',
    description: 'Check our plans for the future and help us accomplish our development goals.',
    url: 'https://nest.parrotsec.org/org/parrot/-/milestones',
    icon: Milestones
  },
  {
    title: 'GitLab',
    description:
      'The platform where the source code of the parrot packages is hosted. Join it to contribute to our source code and improve the system.',
    url: 'https://gitlab.com/parrotsec',
    icon: Gitlab
  },
  {
    title: 'GitHub - backup mirror',
    description:
      'The repository where we keep a copy of the most important code in case our servers are down.',
    url: 'https://github.com/parrotsec',
    icon: Github
  }
]
