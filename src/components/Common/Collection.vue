<template>
  <section>
    <div class="CollectionPageCard_wrapper__rnq98 inherited-styles-for-exported-element">
      <div class="CollectionPageCard_background___t60a"
        :style="{ backgroundImage: backgroundImage }">
        <img
          :alt="name_collection"
          :src="src_mainImg"
          class="Avatar_avatar__ejnJs Avatar_medium__nMWX7"/>
      </div>
      <div class="CollectionPageCard_body__OyZJ3">
        <div>
          <div class="CollectionPageCard_titleWrapper__KVDgf CollectionPageCard_withAuthor__tZjva">
            <h4 class="Text_h4__yGNuM Text_default__ei0zT Text_bold__96_eJ CollectionPageCard_collectionName__0cJAL">
              <span>{{ name_collection }}</span>
              <span class="verified"></span>
            </h4>
            <div class="CollectionPageCard_authorLabel__nLuA6">
              <span class="Text_h6__B3dZE Text_tertiary__q_g0h">by</span>
              <span class="Text_h6__B3dZE Text_default__ei0zT CollectionPageCard_authorWrapper__ub56y">
                <span class="Avatar_avatar__ejnJs CollectionPageCard_authorAvatar__m81rF Avatar_extraSmall__LJ6o4 Avatar_withBorder__dW9Wz"
                  :style="{ backgroundImage: `url(${avatar_Img})` }" >
                </span>
                {{ author }}
              </span>
            </div>
          </div>
          <h6 class="Text_h6__B3dZE Text_tertiary__q_g0h Text_regular__lCAPC CollectionPageCard_description__TLV_i">
            {{ description }}
          </h6>
        </div>
        <div class="CollectionPageCard_linksWrapper__cyRXO">
          <a
            rel="noreferrer"
            class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_primary__RWocB CollectionPageCard_button__WZa1G Button_iconCurrentColor__5vx1t"
            href="https://ton.diamonds/collection/annihilation">
            View collection
          </a>
          <a
            rel="noreferrer"
            class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 CollectionPageCard_button__WZa1G Button_iconCurrentColor__5vx1t"
            href="https://ton.diamonds/p/annihilation">
            Promo page
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  url_back: {
    type: String,
    default: 'https://phonoteka.org/uploads/posts/2021-06/1622802711_15-phonoteka_org-p-mnogo-kotikov-art-krasivo-16.jpg',
  },
  name_collection: {
    type: String,
    default: 'Collection',
  },
  author: {
    type: String,
    default: 'author',
  },
  description: {
    type: String,
    default: 'Самая крутая коллекция с котиками во всем мире',
  },
  src_mainImg: {
    type: String,
    default: 'https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-95.jpg',
  },
  avatar_Img: {
    type: String,
    default: 'https://kartinkof.club/uploads/posts/2022-03/1648289033_11-kartinkof-club-p-mem-kot-smotrit-v-kameru-11.jpg',
  },
})

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
            rgb(22, 24, 28) 100%
          ), url(${props.url_back})`)
</script>

<style lang="sass" scoped>
a, span
  margin: 0

h6
  margin-right: 0

div, h4, h6, img, span
  border-style: initial
  border-width: 0
  box-sizing: border-box
  padding: 0

h4, h6
  margin-left: 0
  margin-top: 0

h4
  margin-bottom: 0

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

.Text_h4__yGNuM
  font-size: 20px
  line-height: 28px

.Text_h6__B3dZE
  font-size: 16px
  font-weight: 500
  line-height: 24px

.Text_default__ei0zT
  color: #e9e9eb

.Text_tertiary__q_g0h
  color: #898b8f

.Text_bold__96_eJ
  font-weight: 700

.Text_regular__lCAPC
  font-weight: 400

.Avatar_avatar__ejnJs
  background-origin: border-box
  background-position: 50% 50%
  background-repeat: no-repeat
  background-size: cover
  border-radius: 50%
  display: inline-block
  flex-shrink: 0
  position: relative

.Avatar_withBorder__dW9Wz
  border: 1px solid rgba(255, 255, 255, 0.1)
  border-image: none 100% 1 0 stretch

.Avatar_medium__nMWX7
  height: 108px
  width: 108px

.Avatar_extraSmall__LJ6o4, .verified::after
  height: 24px
  width: 24px

.CollectionPageCard_wrapper__rnq98
  background: #16181c
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 1 0 stretch
  border-radius: 20px
  max-width: 420px
  overflow: hidden
  position: relative

.CollectionPageCard_background___t60a
  align-items: flex-end
  background-position: 50% 50%
  background-repeat: no-repeat
  background-size: cover
  display: flex
  height: 210px
  justify-content: center
  width: 100%

.CollectionPageCard_body__OyZJ3
  display: flex
  flex-direction: column
  height: calc(100% - 210px)
  justify-content: space-between
  padding: 20px

.CollectionPageCard_collectionName__0cJAL
  align-items: center
  column-gap: 8px
  display: flex
  row-gap: 8px

.CollectionPageCard_authorLabel__nLuA6
  align-items: center
  display: flex

.CollectionPageCard_titleWrapper__KVDgf
  justify-content: flex-start
  margin-bottom: 8px

.CollectionPageCard_withAuthor__tZjva
  align-items: flex-start
  column-gap: 4px
  display: flex
  flex-direction: column
  row-gap: 4px
  width: 100%

.CollectionPageCard_authorWrapper__ub56y
  align-items: center
  background: #1e2024
  border-radius: 100px
  cursor: pointer
  display: flex
  margin-left: 8px
  padding: 4px 8px 4px 4px
  transition: all 0.3s

.CollectionPageCard_authorAvatar__m81rF
  margin-right: 6px

.CollectionPageCard_description__TLV_i
  -webkit-box-orient: vertical
  -webkit-line-clamp: 3
  display: -webkit-box
  margin-bottom: 16px
  overflow: hidden
  text-overflow: ellipsis

.CollectionPageCard_linksWrapper__cyRXO
  column-gap: 16px
  display: flex
  flex-wrap: wrap
  row-gap: 16px

.verified::after
  background-image: url(https://ton.diamonds/images/verification-icon.svg)
  background-repeat: no-repeat
  background-size: contain
  content: ''
  display: inline-block
  flex-shrink: 0
  margin-left: 6px
  position: relative
  top: 3px

.Button_button__30ukX:active
  transform: scale(0.95)

.Button_solid__ZczOc
  &.Button_primary__RWocB
    background: #059df5
    color: #e9e9eb

  &.Button_dark__hKxQ0
    background-color: #1e2024
    color: #fff

.CollectionPageCard_titleWrapper__KVDgf .CollectionPageCard_collectionName__0cJAL
  margin-right: 0
  width: 100%

.CollectionPageCard_authorWrapper__ub56y:hover
  background: #212429

.CollectionPageCard_linksWrapper__cyRXO .CollectionPageCard_button__WZa1G
  flex: 1 1 0

.Button_solid__ZczOc
  &.Button_primary__RWocB:hover
    background-color: #0486d1

  &.Button_dark__hKxQ0:hover
    background-color: #212429

.CollectionPageCard_titleWrapper__KVDgf .CollectionPageCard_collectionName__0cJAL span:first-child
  overflow: hidden
  text-overflow: ellipsis
  text-wrap: nowrap
  white-space-collapse: collapse
</style>