/*
 * Absolutely the same react-use/useMeasure but with a polyfill ResizeObserver.
 * in src/components/Slider, Safari 14.1.2 threw "ResizeObserver loop completed with undelivered notificatons".
 *
 * For more info why I used the polyfill: https://github.com/que-etc/resize-observer-polyfill#observation-strategy
 * */

import { useMemo, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import ResizeObserver from 'resize-observer-polyfill'

export type UseMeasureRect = Pick<
  DOMRectReadOnly,
  'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>
export type UseMeasureRef<E extends Element = Element> = (element: E) => void
export type UseMeasureResult<E extends Element = Element> = [UseMeasureRef<E>, UseMeasureRect]

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}

function useMeasure<E extends Element = Element>(): UseMeasureResult<E> {
  const [element, ref] = useState<E | null>(null)
  const [rect, setRect] = useState<UseMeasureRect>(defaultState)

  const observer = useMemo(
    () =>
      new ResizeObserver(entries => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } = entries[0].contentRect
          setRect({ x, y, width, height, top, left, bottom, right })
        }
      }),
    []
  )

  useIsomorphicLayoutEffect(() => {
    if (!element) return
    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [element])

  return [ref, rect]
}

export default useMeasure
