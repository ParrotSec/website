import { GridProps } from '@mui/material'

import UserCard from 'components/UserCard'
import activecontrib from 'containers/TeamContainers/ActiveContributorsSection/activecontrib'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'

const activeContribData = activecontrib.map(data => {
  return (
    <UserCard
      variant="background"
      key={data.name}
      name={data.name}
      nickname={data.nickname}
      role={data.role}
    />
  )
})

const ActiveContributors = (props: GridProps) => {
  return (
    <ContributorsSection
      heading="Active Contributors"
      title="Community Contributors"
      subtitle="ParrotOS doesn't exist only thanks to the core team, but is also the result of the help of many
contributors who improve the OS every day."
      {...props}
    >
      {activeContribData}
    </ContributorsSection>
  )
}

export default ActiveContributors
