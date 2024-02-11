'use client'

import { UserItem } from './user-item'

export function Sidebar() {
  return (
    <div className="flex min-h-screen w-[300px] min-w-[300px] flex-col  gap-4 border-r p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">Menu</div>
      <div>Settings/Notifications</div>
    </div>
  )
}
