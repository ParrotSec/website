import { GridProps } from '@mui/material'

import UserCard from 'components/UserCard'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'
import pastcontrib from 'containers/TeamContainers/PastContributorsSection/pastcontrib'

const pastContribData = pastcontrib.map(data => {
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

const PastContributors = (props: GridProps) => {
  return (
    <ContributorsSection
      heading="Past Contributors"
      title="Legacy Contributors"
      subtitle="ParrotOS doesn't exist only thanks to the core team, but is also the result of the help of many
contributors who improve the OS every day."
      {...props}
    >
      {pastContribData}
    </ContributorsSection>
  )
}

export default PastContributors
