import { YStack, Text, XStack, YGroup, ListItem } from '@my/ui'
import { SolitoImage as Image } from 'solito/image'
import { Heart, Pencil, Hexagon, LogOut  } from '@tamagui/lucide-icons'
import { NavBar } from '@my/ui/src/components/NavBar'
import React from 'react'

function ListItemOptions ()
{
  return (
    <YGroup alignSelf='flex-start'  size = "$4" columnGap={'$-12'} >
      <YGroup.Item >
      <ListItem hoverTheme icon={Heart} backgroundColor={"#1B1D24"}>
          My Favorites
      </ListItem>
      </YGroup.Item>

      <YGroup.Item>
      <ListItem hoverTheme icon={Pencil} backgroundColor={"#1B1D24"}>
          Edit Profile
      </ListItem>
      </YGroup.Item>

      <YGroup.Item>
      <ListItem hoverTheme icon={Hexagon} backgroundColor={"#1B1D24"}>
          Settings
      </ListItem>
      </YGroup.Item>

      <YGroup.Item>
      <ListItem hoverTheme icon={LogOut} backgroundColor={"#1B1D24"}>
          Sign Out
      </ListItem>
      </YGroup.Item>

    </YGroup>
  )
}

export const UserScreen: React.FC = () => {
  return (
    <YStack width={'100%'} backgroundColor={"#1B1D24"} flex={1}>

      <NavBar/>

      <XStack>
        <XStack width={'60%'} alignItems='baseline'>

          <Text margin={40}>
          Preferences  
          </Text>

      </XStack>

      <XStack backgroundColor={"#1B1D24"}>

        <Text  width={'55%'}>
        Pablo Ramón Santiago Peñaranda Urbina
        </Text>

      </XStack>

        <YStack height={'100%'} backgroundColor={"#1B1D24"}>

          <Image
                style={{
                  borderRadius: 85,
                  transform:[
                    {
                      scale: 1,
                    },
                  ],
                }} 
                src={"https://cdn.discordapp.com/attachments/1039285672923627662/1250232173135528026/ca9ff635-7796-4b62-9e59-2be59cda2e3d.png?ex=666a30f2&is=6668df72&hm=4186db91a11630a97a90eac4ad0af30afb87cf03bc4fe6f533acb684841ed1cc&"}       
                alt={"foto de burro"} 
                width={170} 
                height={170} 
                contentFit='fill' 
                contentPosition={{'top':'100%'}}
                unoptimized 
                />  

          <YStack paddingTop={50} paddingBottom={500} alignContent='center' backgroundColor={"#1B1D24"}>

            <ListItemOptions/>

          </YStack>

        </YStack>

      </XStack>  

    </YStack>
  )

}
