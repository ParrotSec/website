import { GridProps } from '@material-ui/core'
import UserCard from 'components/UserCard'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'

const ActiveContributors = (props: GridProps) => {
  return (
    <ContributorsSection
      heading="Active Contributors"
      title="Community Contributors"
      subtitle="ParrotOS doesn't exist only thanks to the core team, but is also the result of the help of many
contributors who improve the OS every day."
      {...props}
    >
      <UserCard
        variant="background"
        nickname="palinuro"
        role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
        socials={{
          github: 'https://github.com',
          twitter: 'https://twitter.com',
          linkedIn: 'https://linkedin.com',
          email: 'mailto:god@god.com'
        }}
      />
      <UserCard
        variant="background"
        nickname="palinuro"
        role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
        socials={{
          github: 'https://github.com',
          twitter: 'https://twitter.com',
          linkedIn: 'https://linkedin.com',
          email: 'mailto:god@god.com'
        }}
      />
      <UserCard
        variant="background"
        nickname="palinuro"
        role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
        socials={{
          github: 'https://github.com',
          twitter: 'https://twitter.com',
          linkedIn: 'https://linkedin.com',
          email: 'mailto:god@god.com'
        }}
      />
      <UserCard
        variant="background"
        nickname="palinuro"
        role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
        socials={{
          github: 'https://github.com',
          twitter: 'https://twitter.com',
          linkedIn: 'https://linkedin.com',
          email: 'mailto:god@god.com'
        }}
      />
      <UserCard
        variant="background"
        nickname="palinuro"
        role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
        socials={{
          github: 'https://github.com',
          twitter: 'https://twitter.com',
          linkedIn: 'https://linkedin.com',
          email: 'mailto:god@god.com'
        }}
      />
      <UserCard
        variant="background"
        nickname="palinuro"
        role="Team Leader, Core Dev, Infrastructure Manager, Release manager"
        socials={{
          github: 'https://github.com',
          twitter: 'https://twitter.com',
          linkedIn: 'https://linkedin.com',
          email: 'mailto:god@god.com'
        }}
      />
    </ContributorsSection>
  )
}

export default ActiveContributors
