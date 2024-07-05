import { YStack, Text, XStack, YGroup, ListItem } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'
import { Heart, Pencil, Hexagon, LogOut, PackageX } from '@tamagui/lucide-icons'
import { NavBar } from '@my/ui/src/components/NavBar'
import React from 'react'
import { useWindowDimensions } from 'react-native'

function ListItemOptions() {
  const { width } = useWindowDimensions()
  const isSmallScreen = width < 1280
  return (
    <YGroup
      size="$4"
      columnGap={'$-12'}
      alignSelf={isSmallScreen ? 'center' : 'flex-end'}
      paddingTop={40}
      width={isSmallScreen ? '$100%' : '$80%'}
      height={'$100%'}
    >
      <YGroup.Item>
        <ListItem
          hoverTheme
          icon={Heart}
          backgroundColor={'#1B1D24'}
          size={isSmallScreen ? '$2' : '$6'}
        >
          My Favorites
        </ListItem>
      </YGroup.Item>

      <YGroup.Item>
        <ListItem
          hoverTheme
          icon={Pencil}
          backgroundColor={'#1B1D24'}
          size={isSmallScreen ? '$2' : '$6'}
        >
          Edit Profile
        </ListItem>
      </YGroup.Item>

      <YGroup.Item>
        <ListItem
          hoverTheme
          icon={Hexagon}
          backgroundColor={'#1B1D24'}
          size={isSmallScreen ? '$2' : '$6'}
        >
          Settings
        </ListItem>
      </YGroup.Item>

      <YGroup.Item>
        <ListItem
          hoverTheme
          icon={LogOut}
          backgroundColor={'#1B1D24'}
          size={isSmallScreen ? '$2' : '$6'}
        >
          Sign Out
        </ListItem>
      </YGroup.Item>
    </YGroup>
  )
}

export const UserScreen: React.FC = () => {
  const { width } = useWindowDimensions()
  const isSmallScreen = width < 1270
  return (
    <YStack backgroundColor={'#1B1D24'} flex={1}>
      <NavBar />

      <XStack width={'100%'} backgroundColor={'#1B1D24'}>
        <XStack width={'100%'} flexWrap="wrap">
          <XStack
            width={isSmallScreen ? '50%' : '90%'}
            marginLeft={'5%'}
            height={'10%'}
            marginTop={'6%'}
          >
            <Text>Preferences</Text>
          </XStack>
          {/* Contains switches and burro */}
          <XStack
            width="100%"
            flexWrap="wrap"
            // minWidth={300}
            backgroundColor={'#1B1D24'}
            display="flex"
            alignContent={isSmallScreen ? 'center' : 'flex-end'}
          >
            {/* Switches go here */}
            <YStack
              flex={1}
              minWidth={300}
              width={isSmallScreen ? '100%' : '50%'}
              height={isSmallScreen ? '30%' : '80%'}
              alignSelf={isSmallScreen ? 'center' : 'flex-end'}
            >
              <Text paddingTop={isSmallScreen ? 50 : 0} textAlign="center">
                Switches go here
              </Text>
            </YStack>
            {/* Fokin burro con lista */}
            <YStack
              flex={1}
              minWidth={300}
              backgroundColor={'#1B1D24'}
              paddingRight={isSmallScreen ? 0 : 50}
              alignSelf={isSmallScreen ? 'center' : 'flex-end'}
              alignItems={isSmallScreen ? 'center' : 'flex-end'}
              width={isSmallScreen ? '90%' : '40%'}
            >
              <XStack alignSelf={isSmallScreen ? 'center' : 'flex-end'}>
                <Image
                  style={{
                    borderRadius: 210,
                    transform: [
                      {
                        scale: 1,
                      },
                    ],
                  }}
                  src={
                    'https://cdn.discordapp.com/attachments/1039285672923627662/1250232173135528026/ca9ff635-7796-4b62-9e59-2be59cda2e3d.png?ex=666a30f2&is=6668df72&hm=4186db91a11630a97a90eac4ad0af30afb87cf03bc4fe6f533acb684841ed1cc&'
                  }
                  alt={'foto de burro'}
                  width={isSmallScreen ? 200 : 200}
                  height={isSmallScreen ? 200 : 200}
                  unoptimized
                />
              </XStack>
              <ListItemOptions />
            </YStack>
          </XStack>
        </XStack>
      </XStack>
    </YStack>
  )
}
