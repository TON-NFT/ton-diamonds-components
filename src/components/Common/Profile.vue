<template>
  <div
    class="BaseInfoCard_wrapper__yMgOw UserCard_card__Q4s7q UserCard_transparent__XsQsu inherited-styles-for-exported-element">
    <div class="BaseInfoCard_card__zG16k UserCard_userBaseInfoCard__2plS_">
      <div class="BaseInfoCard_background__LH09K" :style="{ backgroundImage: backgroundImage }"></div>
      <div class="BaseInfoCard_content__raxLS">
        <div class="BaseInfoCard_mainInfo__yzXWg">
          <img
            :src="avatar"
            alt="avatar"
            class="BaseInfoCard_avatar__cNiYU"/>
          <div class="BaseInfoCard_mainInfoText__NVlrC">
            <h3 class="Text_h3__0opol Text_default__ei0zT BaseInfoCard_title__RT5Wn">{{ username }}</h3>
            <div class="BaseInfoCard_caption__KTcTD">
              <div class="UserCard_captionWrapper__y2q6f">
                <button
                  type="button"
                  disabled
                  class="Button_button__30ukX Button_solid__ZczOc Button_extraSmall__WpvMS Button_priority__Iss6T UserCard_priorityButton__jZ7v3 Button_iconCurrentColor__5vx1t Button_disabled__ifhC4">
                  {{ status }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <p class="Text_h6__B3dZE Text_secondary__0Sfqb BaseInfoCard_description__9horu">
          {{ description }}
        </p>
        <ul class="UserCardSocials_list__kkmdB"></ul>
        <div class="UserCard_userCardShareAndAdress__yi3QV">
          <button
            @click="copyAddress"
            type="button"
            class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 UserCard_userCardShareAndAdress__Address__6V_W5 Button_iconCurrentColor__5vx1t">
            {{ address }}
            <svg v-if="!checkCopy"><use xlink:href="#icon-copy"></use></svg>
            <svg v-if="checkCopy"><use xlink:href="#icon-ok"></use></svg>
          </button>
          <div class="Share_Share__2vFUj">
            <button
              @click="openShare = !openShare"
              type="button"
              class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 Share_Share__Toggle__qkGzv Share_Share__Toggle_Default__nLRGS Button_iconCurrentColor__5vx1t">
              <svg><use xlink:href="#icon-share"></use></svg>
            </button>
            <div v-if="openShare" class="DropdownList_wrapper__UcPuz Share_dropdownWrapper__VOOlR FadeContainer_transitionExit__gLpxI FadeContainer_transitionExitActive__FAIbN">
              <ul class="DropdownList_list__mMRjZ">
                <li class="Text_p__mrhFK Text_tertiary__q_g0h Text_medium__UsZua DropdownList_title__X3C_Q">Share by</li>
                <li
                  v-for="(item, key) in listLi"
                  :key="key">
                  <a class="DropdownList_item__wSAeu" target="_blank" :href="item.href_soc_media">
                    <span class="Text_h6__B3dZE Text_default__ei0zT Text_semiBold__iFdnC DropdownList_content__MYp1y DropdownList_activeWrapper__vETM_">{{ item.name_soc_media}}
                      <span class="DropdownList_iconWrapper__1CsCW">
                        <svg><use :xlink:href="`#icon-${item.icon}`"></use></svg>
                      </span>
                    </span>
                  </a>
                </li>
                <li @click="copyAddress" class="DropdownList_item__wSAeu" target="_blank">
                  <span class="Text_h6__B3dZE Text_default__ei0zT Text_semiBold__iFdnC DropdownList_content__MYp1y DropdownList_activeWrapper__vETM_">
                    Copy link
                    <span class="DropdownList_iconWrapper__1CsCW">
                      <svg style="scale: 0.8;"><use xlink:href="#icon-copy"></use></svg>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="BannerInfoCards_assests__rAwgm">

          <li
            v-for="(item, key) in listItem"
            :key="key"
            class="BannerInfoCards_assetColumn__JCs33">
            <div>
              <div class="BannerInfoCards_assetName__q4i1C">{{ item.name }}</div>
              <div class="BannerInfoCards_assestCount__VNg9P">
                <span v-if="item.name === 'Glints balance'" class="UserCard_glintWrapper__hiKE3">
                  <svg><use xlink:href="#icon-glints"></use></svg>
                  {{ item.count }}
                </span>
                <span v-else>{{ item.count }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  listLi: {
    type: Array,
    default: () => [
      {icon: 'twitter', href_soc_media: '', name_soc_media: 'Twitter' },
      {icon: 'telegram', href_soc_media: '', name_soc_media: 'Telegram' },
    ],
  },
  listItem: {
    type: Array,
    default: () => [
      {name: 'NFTs', count: '11' },
      {name: 'Artworks', count: '11' },
      {name: 'Glints balance', count: '11'  },
      {name: 'Wallet balance', count: '11' + ' TON' },
    ],
  },
  avatar: {
    type: String,
    default: 'https://kartinkof.club/uploads/posts/2022-03/1648289033_11-kartinkof-club-p-mem-kot-smotrit-v-kameru-11.jpg',
  },
  username: {
    type: String,
    default: 'Котек',
  },
  status: {
    type: String,
    default: 'ПОГЛОТИТЕЛЬ ВЕЗДЕСУЩЕГО',
  },
  description: {
    type: String,
    default: 'Котики спасут мир или его уничтожат',
  },
  address: {
    type: String,
    default: 'EQCA...yvxn',
  },
  url_back: {
    type: String,
    default: 'https://ton.diamonds/cdn-cgi/image/width=840,quality=100/https://ton.diamonds/api/v1/media/14f4c33a-2249-48d9-bea8-52eab7f78f42',
  },
})

const checkCopy = ref(false)
const openShare = ref(false)

function copyAddress() {
  console.log(props.address);
  copy(props.address)
  checkCopy.value = true
  setTimeout(() => {
    checkCopy.value = false
  }, 2000)
}

const backgroundImage = ref(`linear-gradient(
  rgba(22, 24, 28, 0) 0%,
  rgba(22, 24, 28, 0.008) 6.67%,
  rgba(22, 24, 28, 0.035) 13.33%,
  rgba(22, 24, 28, 0.082) 20%,
  rgba(22, 24, 28, 0.15) 26.67%,
  rgba(22, 24, 28, 0.23) 33.33%,
  rgba(22, 24, 28, 0.333) 40%,
  rgba(22, 24, 28, 0.443) 46.67%,
  rgba(22, 24, 28, 0.557) 53.33%,
  rgba(22, 24, 28, 0.667) 60%,
  rgba(22, 24, 28, 0.77) 66.67%,
  rgba(22, 24, 28, 0.85) 73.33%,
  rgba(22, 24, 28, 0.918) 80%,
  rgba(22, 24, 28, 0.965) 86.67%,
  rgba(22, 24, 28, 0.992) 93.33%,
  rgb(22, 24, 28) 100%),
  url(${props.url_back})`
)
</script>

<style lang="sass" scoped>
.BaseInfoCard_fade__Ab02z
  background-color: initial
  background-image: linear-gradient(rgba(22, 24, 28, 0), rgba(22, 24, 28, 0.008) 6.67%, rgba(22, 24, 28, 0.035) 13.33%, rgba(22, 24, 28, 0.082) 20%, rgba(22, 24, 28, 0.145) 26.67%, rgba(22, 24, 28, 0.23) 33.33%, rgba(22, 24, 28, 0.333) 40%, rgba(22, 24, 28, 0.443) 46.67%, rgba(22, 24, 28, 0.557) 53.33%, rgba(22, 24, 28, 0.667) 60%, rgba(22, 24, 28, 0.77) 66.67%, rgba(22, 24, 28, 0.855) 73.33%, rgba(22, 24, 28, 0.918) 80%, rgba(22, 24, 28, 0.965) 86.67%, rgba(22, 24, 28, 0.992) 93.33%, #16181c)
  height: 210px
  left: 0
  position: absolute
  top: 0
  width: 100%

@media (max-width: 1024px)
  .BaseInfoCard_fade__Ab02z
    height: 168px

span
  padding: 0

li, span
  margin: 0

ul
  list-style: none

p, ul
  margin-bottom: 0

div, h3, img, p, ul
  padding: 0

h3, li, p, span, ul
  border-style: initial
  border-width: 0

h3, img, p, ul
  margin-left: 0
  margin-right: 0

h3, img
  margin-top: 0

div
  border-style: initial
  border-width: 0
  margin: 0

.inherited-styles-for-exported-element
  color: #e9e9eb
  font-family: Inter, sans-serif
  line-height: 1

button
  appearance: none
  font-family: Inter, sans-serif !important

.Button_button__30ukX
  align-items: center
  box-sizing: border-box
  cursor: pointer
  display: flex
  font-size: 16px
  font-weight: 600
  height: fit-content
  justify-content: center
  line-height: 24px
  text-align: center
  text-decoration: none
  transition: all 0.3s
  width: max-content

.Button_default__Cpmha
  border-radius: 12px
  border-style: none
  padding: 12px 24px

.Button_priority__Iss6T
  border-style: none
  overflow: hidden
  position: relative
  z-index: 0

.Text_h3__0opol
  font-size: 24px
  font-weight: 700
  line-height: 36px

.Text_h6__B3dZE
  font-size: 16px
  font-weight: 500
  line-height: 24px

.Text_default__ei0zT
  color: #e9e9eb

.Text_secondary__0Sfqb
  color: #bfc1c7

.UserCard_captionWrapper__y2q6f
  align-items: center
  display: flex
  flex-direction: column

.UserCard_userCardShareAndAdress__yi3QV
  column-gap: 12px
  display: grid
  grid-template-columns: 1fr 48px
  margin-top: 16px
  row-gap: 12px
  width: 100%

.UserCard_userCardShareAndAdress__Address__6V_W5
  width: 100%

.UserCard_glintWrapper__hiKE3
  align-items: center
  column-gap: 6px
  display: inline-flex
  row-gap: 6px

.BaseInfoCard_wrapper__yMgOw
  background: #16181c
  border-radius: 20px
  position: relative
  border: 0.5px solid var(--separator-16)
  width: 100%

.BaseInfoCard_card__zG16k
  padding: 32px
  position: relative
  width: 100%

.BaseInfoCard_content__raxLS
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  position: relative
  z-index: 1

.BaseInfoCard_avatar__cNiYU
  background-color: #16181c70
  background-position: 50% 50%
  background-repeat: no-repeat
  background-size: contain
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 stretch
  border-radius: 50%
  display: block
  height: 148px
  margin-bottom: 16px
  object-fit: cover
  position: relative
  width: 148px

.BaseInfoCard_background__LH09K
  background-position: 50% 50%
  background-repeat: no-repeat
  background-size: cover
  border-radius: 20px 20px 0 0
  height: 210px
  left: 0
  position: absolute
  top: 0
  width: 100%

.BaseInfoCard_title__RT5Wn
  align-items: center
  display: flex
  justify-content: center
  margin-bottom: 0
  max-width: 100%
  text-align: center
  word-break: break-word

.BaseInfoCard_caption__KTcTD
  color: #059df5
  display: flex
  flex-direction: row
  font-size: 18px
  font-weight: 500
  justify-content: center
  line-height: 24px
  margin-top: 2px
  text-align: center

.BaseInfoCard_description__9horu
  margin-top: 16px
  overflow-wrap: break-word
  text-align: center
  width: 100%

.BaseInfoCard_mainInfo__yzXWg
  align-items: center
  display: flex
  flex-direction: column
  justify-content: flex-start
  width: 100%

.BaseInfoCard_mainInfoText__NVlrC
  align-items: center
  display: flex
  flex-direction: column
  padding-right: 0

.BannerInfoCards_assests__rAwgm
  column-gap: 12px
  display: grid
  grid-template-columns: 1fr 1fr
  justify-content: center
  margin-top: 24px
  row-gap: 12px
  width: 100%

.BannerInfoCards_assestCount__VNg9P
  font-size: 20px
  font-weight: 600
  line-height: 28px

.BannerInfoCards_assetColumn__JCs33
  align-items: center
  background: #1e2024
  border-radius: 12px
  display: flex
  flex-direction: column
  padding: 16px
  text-align: center
  width: 100%

.BannerInfoCards_assetName__q4i1C
  align-items: center
  color: #898b8f
  display: flex
  flex-direction: row
  font-size: 16px
  font-weight: 500
  justify-content: center
  line-height: 24px
  margin-bottom: 4px
  position: relative

.UserCardSocials_list__kkmdB
  display: flex
  flex-wrap: wrap
  justify-content: center
  list-style: none
  margin: 10px -6px 0

.Share_Share__2vFUj
  position: relative
  z-index: 2

.Share_Share__Toggle__qkGzv
  align-items: center
  border-radius: 12px
  cursor: pointer
  display: flex
  justify-content: center
  padding: 0

.Share_Share__Toggle_Default__nLRGS
  height: 48px
  width: 48px

.Button_button__30ukX svg
  flex-shrink: 0
  height: 19px
  width: 19px

.Button_priority__Iss6T
  &::after
    background-color: transparent
    content: ''
    display: block
    position: absolute

  &::before
    background-color: transparent
    content: ''
    display: block
    position: absolute
    -webkit-background-clip: initial, initial, initial, initial, initial
    animation: Button_rotate__2SM5V 8s linear infinite
    aspect-ratio: 1/1
    background-image: radial-gradient(circle at 35.04% 33.79%, #f73ea1, transparent 50%), radial-gradient(circle at 65.47% 66.43%, #ffadd9, transparent 50%), radial-gradient(circle at 65.37% 33.91%, rgba(123, 90, 173, 0.196), transparent 40%), radial-gradient(circle at 35.52% 66.43%, rgba(123, 90, 173, 0.196), transparent 40%), initial
    filter: blur(10px)
    height: auto
    mix-blend-mode: normal
    opacity: 0.7
    transition: opacity 0.5s
    width: 100%
    z-index: -1

  &::after
    left: 0
    mix-blend-mode: overlay
    top: 0
    z-index: -2

.UserCard_userCardShareAndAdress__Address__6V_W5 svg
  margin: 0 0 0 4px

.UserCard_glintWrapper__hiKE3 svg
  height: 16px
  width: 16px

.BaseInfoCard_title__RT5Wn::after
  top: 0

.Share_Share__Toggle__qkGzv svg
  height: 24px
  margin: 0
  width: 24px

.Button_iconCurrentColor__5vx1t svg path
  fill: currentcolor

.Button_button__30ukX
  &:active
    transform: scale(0.95)

  &.Button_disabled__ifhC4
    cursor: not-allowed
    pointer-events: none

.Button_solid__ZczOc.Button_dark__hKxQ0
  background-color: #1e2024
  color: #fff

.UserCard_captionWrapper__y2q6f .UserCard_priorityButton__jZ7v3
  border-radius: 8px
  font-size: 12px
  font-weight: 700
  height: 30px
  line-height: 18px
  margin-top: 16px
  padding: 6px 8px

.Button_extraSmall__WpvMS.Button_priority__Iss6T::after
  border: 0.5px solid rgba(255, 255, 255, 0.298)
  height: calc(100% - 1px)
  width: calc(100% - 1px)

.Button_priority__Iss6T:hover::before
  opacity: 1

.UserCard_captionWrapper__y2q6f .UserCard_priorityButton__jZ7v3::after
  border-radius: 8px

.Button_button__30ukX.Button_disabled__ifhC4.Button_priority__Iss6T
  background-color: transparent
  color: #fff

.Button_solid__ZczOc.Button_dark__hKxQ0:hover
  background-color: #212429

.UserCard_card__Q4s7q, .UserCard_userBaseInfoCard__2plS_
  overflow: visible !important

.Button_priority__Iss6T:before
  opacity: 0.7
  aspect-ratio: 1/1
  background: radial-gradient(circle at 35.04% 33.79%, #f73ea1, transparent 50%), radial-gradient(circle at 65.47% 66.43%, #ffadd9, transparent 50%), radial-gradient(circle at 65.37% 33.91%, #7b5aad32, transparent 40%), radial-gradient(circle at 35.52% 66.43%, #7b5aad32, transparent 40%), transparent
  mix-blend-mode: normal
  position: absolute
  width: 100%
  height: auto
  content: ''
  display: block
  filter: blur(10px)
  z-index: -1
  animation-name: Button_rotate__2SM5V
  animation-duration: 8s
  animation-iteration-count: infinite
  animation-timing-function: linear
  transition: opacity 0.5s ease

@keyframes Button_rotate__2SM5V
  0%
    transform: rotate(0) scale(1)

  to
    transform: rotate(1turn) scale(1)

span
  padding: 0

.inherited-styles-for-exported-element
  list-style: none

.Text_h6__B3dZE
  font-size: 16px
  line-height: 24px

.Text_semiBold__iFdnC
  font-weight: 600

.Button_button__30ukX, a
  box-sizing: border-box
  text-decoration: none

.DropdownList_list__mMRjZ
  padding: 4px
  position: absolute
  top: 40px
  right: 0
  background: var(--dark)
  box-sizing: border-box
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.4)
  border-radius: 12px
  color: var(--text-color-primary)
  z-index: 3
  overflow: hidden
  width: 190px

.DropdownList_title__X3C_Q
  padding: 10px 12px
  text-align: left
  cursor: auto

.DropdownList_item__wSAeu
  border-radius: 8px
  padding: 12px
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  transition: all .3s ease
  overflow: hidden
  position: relative
  font-weight: 700
  font-size: 16px
  line-height: 24px

.DropdownList_activeWrapper__vETM_
  width: 100%
  justify-content: space-between

.Text_tertiary__q_g0h
  color: var(--text-color-tertiary)

.DropdownList_content__MYp1y
  display: flex
  align-items: center
  color: inherit

.Button_button__30ukX
  font-size: 16px
  font-weight: 600
  line-height: 24px
  text-align: center
  transition: all .3s

.DropdownList_iconWrapper__1CsCW svg
  width: 24px
  height: 24px

.Button_default__Cpmha
  border-style: none

@media (max-width: 600px)
  .Button_button__30ukX
    font-size: 14px
    line-height: 20px

.Text_h6__B3dZE
  font-size: 16px
  line-height: 24px

.Text_p__mrhFK
  font-size: 14px
  line-height: 20px

.Text_semiBold__iFdnC
  font-weight: 600

.Share_Share__2vFUj
  position: relative
  z-index: 2

.Share_Share__Toggle__qkGzv
  align-items: center
  border-radius: 12px
  cursor: pointer
  display: flex
  justify-content: center
  padding: 0

.Share_Share__Toggle_Default__nLRGS
  height: 48px
  width: 48px

.Button_button__30ukX svg
  flex-shrink: 0

.Share_Share__Toggle__qkGzv svg
  height: 24px
  margin: 0
  width: 24px

.Button_iconCurrentColor__5vx1t svg path
  fill: currentcolor

.Button_button__30ukX:active
  transform: scale(0.95)

.Button_solid__ZczOc.Button_dark__hKxQ0
  color: #fff

@media (max-width: 600px)
  .Button_default__Cpmha:has(svg)
    padding: 12px 16px

.DropdownList_item__wSAeu
  text-decoration: none
  color: #e9e9eb
  transition: 0.4s

@media (hover: hover)
  .DropdownList_item__wSAeu:hover
    background-color: #33363d4b

</style>
