import React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '~/utils/cn.ts'

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    customViewportCSS?: string
    orientation?: 'vertical' | 'horizontal' | 'both'
    customVerticalPaddingTop?: number
    customHorizontalPaddingRight?: number
    customVerticalPaddingBottom?: number
    customHorizontalPaddingLeft?: number
  }
>(
  (
    {
      className,
      customViewportCSS,
      orientation = 'vertical',
      customVerticalPaddingTop = undefined,
      customHorizontalPaddingRight = undefined,
      customVerticalPaddingBottom = undefined,
      customHorizontalPaddingLeft = undefined,
      children,
      ...props
    },
    ref,
  ) => (
    <ScrollAreaPrimitive.Root ref={ref} className={cn('relative overflow-hidden', className)} {...props}>
      <ScrollAreaPrimitive.Viewport className={cn('w-full rounded-[inherit]', 'h-full', customViewportCSS)}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      {orientation === 'both' ? (
        <>
          <ScrollBar
            orientation={'vertical'}
            customVerticalPaddingTop={customVerticalPaddingTop}
            customVerticalPaddingBottom={customVerticalPaddingBottom}
          />
          <ScrollBar
            orientation={'horizontal'}
            customHorizontalPaddingLeft={customHorizontalPaddingLeft}
            customHorizontalPaddingRight={customHorizontalPaddingRight}
          />
          <ScrollAreaPrimitive.Corner className="bg-light-bc-3 dark:bg-black-bc-3" />
        </>
      ) : (
        <>
          <ScrollBar orientation={orientation} />
          <ScrollAreaPrimitive.Corner />
        </>
      )}
    </ScrollAreaPrimitive.Root>
  ),
)
ScrollArea.displayName = 'ScrollArea'

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
    customVerticalPaddingTop?: number
    customHorizontalPaddingRight?: number
    customVerticalPaddingBottom?: number
    customHorizontalPaddingLeft?: number
  }
>(
  (
    {
      className,
      orientation = 'vertical',
      customVerticalPaddingTop,
      customHorizontalPaddingRight,
      customVerticalPaddingBottom,
      customHorizontalPaddingLeft,
      ...props
    },
    ref,
  ) => {
    return (
      <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
          'flex',
          'select-none',
          'touch-none',
          'p-[2px]',
          'z-30',
          // 'bg-blue-50',
          'transition-colors',
          // 'hover:bg-blue-100',
          orientation === 'vertical' && 'w-2.5',
          orientation === 'horizontal' && 'h-2.5 flex-col',
          className,
        )}
        {...props}
        style={{
          ...props.style,
          marginTop: typeof customVerticalPaddingTop === 'number' ? customVerticalPaddingTop : props.style?.top,
          marginRight:
            typeof customHorizontalPaddingRight === 'number' ? customHorizontalPaddingRight : props.style?.right,
          marginBottom:
            typeof customVerticalPaddingBottom === 'number' ? customVerticalPaddingBottom : props.style?.bottom,
          marginLeft: typeof customHorizontalPaddingLeft === 'number' ? customHorizontalPaddingLeft : props.style?.left,
        }}
      >
        <ScrollAreaPrimitive.ScrollAreaThumb className="bg-light-bc-4 dark:bg-black-bc-4 relative flex-1 rounded-full" />
      </ScrollAreaPrimitive.ScrollAreaScrollbar>
    )
  },
)
ScrollBar.displayName = 'ScrollBar'

export { ScrollArea, ScrollBar }
