import React from 'react'
import { Menu , Avatar } from '@mantine/core'
function ProfileDropdown() {
  return (
    <div>
      <Menu shadow='md' width={200}>
<Menu.Target>
    <Avatar  radius='xl'/>
</Menu.Target>
<Menu.Dropdown>
    <Menu.Label>
        Profile
    </Menu.Label>
     <Menu.Item >
          Settings
        </Menu.Item>
        <Menu.Item>
          Messages
        </Menu.Item>
</Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default ProfileDropdown
