import type { V2_MetaFunction } from '@remix-run/node'
import { useNavigate, Link, PrefetchPageLinks } from '@remix-run/react'
import { useState, useEffect, useRef } from 'react'
import { useTypedFetcher } from 'remix-typedjson'
import { BarChart2, Bell, Bookmark, Briefcase, Newspaper, Search, User } from 'lucide-react'

import { cn } from '~/utils/cn.ts'
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '~/components/general/command.tsx'

import { ScrollArea } from '~/components/general/scroll-area.tsx'
import { CustomCommandGroup, CustomCommandItem, CommandShortcut } from '~/components/general/command.tsx'

import type { loader as searchLoader } from '../routes/api.yahoo.search-addition.$query.ts'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Custom CMDK Component' }, { name: 'description', content: 'Custom CMDK Component' }]
}

export default function Index() {
  return (
    <div className="mx-auto flex w-1/2 pt-2">
      <Command />
    </div>
  )
}

export function Command() {
  const [open, setOpen] = useState(false)

  const fetcher = useTypedFetcher<typeof searchLoader>()

  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      } else if (open && e.key === 'p' && (e.ctrlKey || e.metaKey)) {
        console.log('Hello')
        e.preventDefault()
        navigate('/main/portfolios')
      } else if (open && e.key === 'w' && (e.ctrlKey || e.metaKey)) {
        console.log('Hello')
        e.preventDefault()
        navigate('/main/watchlists')
      } else if (open && e.key === 'n' && (e.ctrlKey || e.metaKey)) {
        console.log('Hello')
        e.preventDefault()
        navigate('/main/news')
      } else if (open && e.key === 'm' && (e.ctrlKey || e.metaKey)) {
        console.log('Hello')
        e.preventDefault()
        navigate('/main/notifications')
      } else if (open && e.key === 'u' && (e.ctrlKey || e.metaKey)) {
        console.log('Hello')
        e.preventDefault()
        navigate('/main/user')
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [open, navigate])

  // TODO: Need to hook up search to yahoo/search-addition/${ticker}
  // useEffect(() => {
  // 	if (fetcher.state === 'idle' && searchValue.length > 0) {
  // 		fetcher.load(`/api/yahoo/search-addition/${searchValue}`)
  // 	}

  // 	console.log(fetcher.data)
  // }, [searchValue])

  // TODO: Need to keep a history of what this user has previously searched for and visited.
  // TODO: Or what is the most popular searches on the website.

  // TODO: Also add cache to search-addition

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div
        className={cn(
          'flex w-full flex-row justify-between px-4 py-3',
          'border-light-bc-4 dark:border-black-bc-4 border',
          'text-light-c-1 dark:text-black-c-1 rounded-sm',
        )}
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-row">
          <Search className="my-auto flex h-4 w-4" />
          <span className="flex px-4">Search instrument...</span>
        </div>
        <kbd
          className={cn(
            'bg-muted pointer-events-none my-auto inline-flex',
            'h-5 select-none items-center gap-1 rounded',
            'border border-light-bc-3 dark:border-black-bc-3',
            'px-1.5 font-mono text-[10px] font-medium opacity-100',
          )}
        >
          <span className="text-xs">Ctrl K</span>
        </kbd>
      </div>
      <CommandDialog
        open={open}
        shouldSort={true}
        defaultValue={fetcher.data ? fetcher.data?.quotes.filter((ele) => ele.symbol).at(0)?.symbol : undefined}
        shouldFilter={false}
        onOpenChange={setOpen}
      >
        <CommandInput
          ref={inputRef}
          value={searchValue}
          loading={fetcher.state !== 'idle'}
          placeholder="Type a command or search..."
          onValueChange={(searchValue) => {
            setSearchValue(searchValue)
            if (searchValue.length > 0 && fetcher.state === 'idle') {
              fetcher.load(`/api/yahoo/search-addition/${searchValue}`)
            }
          }}
        />
        <ScrollArea className="max-h-[600px]">
          <CommandList className="overflow-y-auto max-h-fit">
            <CommandEmpty>No results found.</CommandEmpty>
            {fetcher.data ? (
              <CustomCommandGroup
                // TODO: Add a ... animation on this heading
                heading={fetcher.state !== 'idle' ? 'Search Results ...' : 'Search Results'}
                className="table w-full"
                customchildclassname="table w-full"
              >
                {fetcher.data?.quotes
                  ?.filter((ele) => ele.symbol)
                  .map((ele, idx) => (
                    <CustomCommandItem
                      key={idx}
                      href={`/main/instrument/${ele.symbol}`}
                      value={ele.symbol}
                      inputRef={inputRef}
                      className="table-row w-full"
                      CustomAnchorTag={Link}
                      CustomPrefetchElement={<PrefetchPageLinks page={`/main/instrument/${ele.symbol}`} />}
                    >
                      <span className="table-cell rounded-bl-sm rounded-tl-sm px-2 py-3 text-center align-middle text-sm">
                        <BarChart2 className="h-4 w-4" />
                      </span>
                      <span className="table-cell px-2 py-3 text-left align-middle text-sm">{ele.shortname}</span>
                      <span className="table-cell px-2 py-3 text-center align-middle text-sm">{ele.symbol}</span>
                      <span className="table-cell px-2 py-3 text-center align-middle text-sm">{ele.quoteType}</span>
                      <span className="table-cell rounded-br-sm rounded-tr-sm px-2 py-3 text-center align-middle text-sm">
                        {ele.exchange}
                      </span>
                    </CustomCommandItem>
                  ))}
              </CustomCommandGroup>
            ) : null}
            {/* THIS IS WHAT REPRESENTS OUR INITIAL LOAD. */}
            <CommandGroup heading="Suggestions">
              <CommandItem value="Ticker 1">
                <BarChart2 className="mr-2 h-4 w-4" />
                <span>Ticker 1</span>
              </CommandItem>
              <CommandItem value="Ticker 2">
                <BarChart2 className="mr-2 h-4 w-4" />
                <span>Ticker 2</span>
              </CommandItem>
              <CommandItem value="Ticker 3">
                <BarChart2 className="mr-2 h-4 w-4" />
                <span>Ticker 3</span>
              </CommandItem>
            </CommandGroup>
            {/* THIS SHOULD BE SHORTCUTS FOR DIFFERENT PARTS OF THE APP */}
            <CommandSeparator />
            {/* THERE IS A PR FOR FORCE MOUNT (values not being filtered) https://github.com/pacocoursey/cmdk/discussions/100  */}
            <CommandGroup heading="Navigation">
              <CommandItem value="Ctrl P">
                <Briefcase className="mr-2 h-4 w-4" />
                <span>Portfolios</span>
                <CommandShortcut>Ctrl P</CommandShortcut>
              </CommandItem>
              <CommandItem value="Ctrl W">
                <Bookmark className="mr-2 h-4 w-4" />
                <span>Watchlists</span>
                <CommandShortcut>Ctrl W</CommandShortcut>
              </CommandItem>
              <CommandItem value="Ctrl N">
                <Newspaper className="mr-2 h-4 w-4" />
                <span>News</span>
                <CommandShortcut>Ctrl N</CommandShortcut>
              </CommandItem>
              <CommandItem value="Ctrl M">
                <Bell className="mr-2 h-4 w-4" />
                <span>Notifications</span>
                <CommandShortcut>Ctrl M</CommandShortcut>
              </CommandItem>
              <CommandItem value="Ctrl U">
                <User className="mr-2 h-4 w-4" />
                <span>User</span>
                <CommandShortcut>Ctrl U</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </ScrollArea>
      </CommandDialog>
    </>
  )
}
