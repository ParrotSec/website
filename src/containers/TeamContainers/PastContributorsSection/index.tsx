import { GridProps } from '@mui/material'

import pastcontrib from './pastcontrib'

import UserCard from 'components/UserCard'
import ContributorsSection from 'containers/TeamContainers/ContributorsSection'

const pastContribData = pastcontrib.map((data, i) => (
  <UserCard
    variant="background"
    key={`id-${i}`}
    name={data.name}
    nickname={data.nickname}
    role={data.role}
  />
))

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
