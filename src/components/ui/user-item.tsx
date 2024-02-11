'use client'

export function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 rounded-[8px] border p-2">
      <div className="avatar flex min-h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 font-[700] text-white">
        GD
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Guillaume Duhan</p>
        <p className="text-[12px] text-neutral-500">
          codewithguillaume@gmail.com
        </p>
      </div>
    </div>
  )
}
