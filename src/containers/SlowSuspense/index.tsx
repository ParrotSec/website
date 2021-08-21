/*
  SlowSuspense creates a wrapper React Node for catching the actual mount/unmount events from Suspense fallback.
  This let's us to make a smooth fadeout
 */

import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  Suspense,
  useMemo,
  ReactNode,
  PropsWithChildren
} from 'react'

const SlowSuspenseCtx = createContext<{
  activate?: () => ReturnType<typeof setTimeout>
  remove?: () => ReturnType<typeof setTimeout>
}>({})

type SlowSuspenseProps = PropsWithChildren<{ fallback?: (isReady: boolean) => ReactNode }>

export const SlowSuspense = ({ children, fallback = null }: SlowSuspenseProps) => {
  const [show, setShow] = useState(true)
  const remove = () => setTimeout(() => setShow(false), 4100)

  const value = useMemo(() => ({ remove }), [])
  console.log('suspense ', show)
  return (
    <SlowSuspenseCtx.Provider value={value}>
      {show && <>{fallback(!show)}</>}
      <Suspense fallback={<InvokeFallback />}>
        <div>{children}</div>
      </Suspense>
    </SlowSuspenseCtx.Provider>
  )
}

const InvokeFallback = () => {
  const { remove } = useContext(SlowSuspenseCtx)

  useEffect(() => {
    console.log('do i even trigger')
    return () => {
      console.log('and me?')
      remove()
    }
  }, [remove])

  return <></>
}
