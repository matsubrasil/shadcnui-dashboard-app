'use client'

import {
  Bell,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
  Cookie,
} from 'lucide-react'

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { UserItem } from './user-item'

export function Sidebar() {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          icon: <User />,
          text: 'Profile',
        },
        {
          link: '/',
          icon: <Inbox />,
          text: 'Inbox',
        },
        {
          link: '/',
          icon: <CreditCard />,
          text: 'Billing',
        },
        {
          link: '/',
          icon: <Bell />,
          text: 'Notifications',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          icon: <Settings />,
          text: 'General Settings',
        },
        {
          link: '/',
          icon: <Cookie />,
          text: 'Privacy',
        },
        {
          link: '/',
          icon: <MessageSquare />,
          text: 'Logs',
        },
      ],
    },
  ]
  return (
    <div className="flex min-h-screen w-[300px] min-w-[300px] flex-col  gap-4 border-r p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <CommandItem
                    key={optionKey}
                    className="flex cursor-pointer gap-2"
                  >
                    {option.icon}
                    {option.text}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings/Notifications</div>
    </div>
  )
}
