import * as React from 'react'
import { type DialogProps } from '@radix-ui/react-dialog'
import { Search } from 'lucide-react'
import {
  Command as CommandPrimitiveCustom,
  CommandItemCustom,
  CommandGroupCustom,
  CommandInput as CommandInputCustom,
} from '../../../../cmdk/src/index.tsx'

import { cn } from '~/utils/cn.ts'
import { Dialog, DialogContent } from '~/components/general/dialog.tsx'

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitiveCustom>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitiveCustom>
>(({ className, ...props }, ref) => (
  <CommandPrimitiveCustom
    ref={ref}
    shouldSort={props.shouldSort}
    shouldFilter={props.shouldFilter}
    className={cn(
      'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitiveCustom.displayName

interface CommandDialogProps extends DialogProps {
  shouldFilter: boolean
  shouldSort: boolean
  defaultValue?: string
}

const CommandDialog = ({
  children,
  shouldFilter = true,
  shouldSort = true,
  defaultValue,
  ...props
}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-2xl border-light-bc-3 dark:border-black-bc-3">
        <Command
          className={cn(
            '[&_[cmdk-group-heading]]:text-light-c-1 [&_[cmdk-group-heading]]:dark:text-black-c-1',
            '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium',
            '[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 ',
            '[&_[cmdk-input]]:h-12',
            '[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5',
            '[&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
          )}
          shouldSort={shouldSort}
          defaultValue={defaultValue}
          shouldFilter={shouldFilter}
        >
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitiveCustom.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitiveCustom.Input & { loading: boolean }>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3 border-light-bc-3 dark:border-black-bc-3" cmdk-input-wrapper="">
    <Search className="text-light-c-1 dark:text-black-c-1 mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandInputCustom
      ref={ref}
      className={cn(
        'text-light-c-1 dark:text-black-c-1',
        'placeholder:text-light-c-1 dark:placeholder:black-c-1',
        'flex h-11 w-full rounded-md bg-transparent',
        'py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
))

CommandInput.displayName = CommandPrimitiveCustom.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitiveCustom.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitiveCustom.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitiveCustom.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitiveCustom.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitiveCustom.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitiveCustom.Empty>
>((props, ref) => <CommandPrimitiveCustom.Empty ref={ref} className="py-6 text-center text-sm" {...props} />)

CommandEmpty.displayName = CommandPrimitiveCustom.Empty.displayName

const CustomCommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroupCustom>,
  React.ComponentPropsWithoutRef<typeof CommandGroupCustom & { customchildclassname?: string }>
>(({ className, ...props }, ref) => (
  <CommandGroupCustom
    ref={ref}
    className={cn(
      'text-light-c-1 dark:text-black-c-1 overflow-hidden p-1',
      '[&_[cmdk-group-heading]]:text-light-c-1 dark:[&_[cmdk-group-heading]]:text-black-c-1',
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
      className,
    )}
    {...props}
  />
))

CustomCommandGroup.displayName = CommandPrimitiveCustom.Group.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitiveCustom.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitiveCustom.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitiveCustom.Group
    ref={ref}
    className={cn(
      'text-light-c-1 dark:text-black-c-1 overflow-hidden p-1',
      '[&_[cmdk-group-heading]]:text-light-c-1 dark:[&_[cmdk-group-heading]]:text-black-c-1',
      '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
      className,
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitiveCustom.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitiveCustom.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitiveCustom.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitiveCustom.Separator ref={ref} className={cn('bg-border -mx-1 h-px', className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitiveCustom.Separator.displayName

const CustomCommandItem = React.forwardRef<
  React.ElementRef<typeof CommandItemCustom>,
  React.ComponentPropsWithoutRef<typeof CommandItemCustom>
  //@ts-ignore
>(({ className, ...props }, ref) => {
  if (props.href) {
    return (
      <CommandItemCustom
        ref={ref}
        href={props.href}
        {...props}
        className={cn(
          'aria-selected:bg-light-bc-3 aria-selected:dark:bg-black-bc-3',
          'aria-selected:text-light-c-1 aria-selected:dark:text-black-c-1',
          'relative flex cursor-default select-none items-center rounded-sm',
          'px-2 py-1.5 text-sm outline-none',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          className,
        )}
        cmdk-item-role="option"
        data-value={props.value}
        CustomAnchorTag={props.CustomAnchorTag}
        CustomPrefetchElement={props.CustomPrefetchElement}
      />
    )
  }
})
CustomCommandItem.displayName = CommandPrimitiveCustom.Item.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitiveCustom.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitiveCustom.Item> & {
    href?: string
  }
>(({ className, href, ...props }, ref) => {
  return (
    <CommandPrimitiveCustom.Item
      ref={ref}
      className={cn(
        'aria-selected:bg-light-bc-3 aria-selected:dark:bg-black-bc-3',
        'aria-selected:text-light-c-1 aria-selected:dark:text-black-c-1',
        'relative flex cursor-default select-none items-center rounded-sm',
        'px-2 py-1.5 text-sm outline-none',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    />
  )
})

CommandItem.displayName = CommandPrimitiveCustom.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn('text-light-c-1 dark:text-black-c-1 ml-auto text-xs tracking-widest', className)} {...props} />
  )
}
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CustomCommandGroup,
  CommandGroup,
  CustomCommandItem,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
