<template>
  <section class="GlintLeaderBoard_container__eHIhJ container inherited-styles-for-exported-element" id="leaderboard">
    <div class="GlintLeaderBoard_header__6p2_f">
      <h2 class="Text_h2__z90TD Text_default__ei0zT Text_semiBold__iFdnC">Leaderboard</h2>
      <p class="Text_h5__PRxb0 Text_secondary__0Sfqb Text_regular__lCAPC">Compete with others on farming speed and amount of Glint Coin owned</p>
    </div>
    <div class="GlintLeaderBoard_searchWrapper__NV4W_">
      <Search />
      <Sort :listInput="listInput"  />
    </div>
    <div class="GlintLeaderBoard_leaderboardWrapper__DAu59">
      <div class="GlintLeaderBoard_leaderboardRow__UwaE_ GlintLeaderBoard_headerRow__hoLtg">
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC GlintLeaderBoard_leftCol__oVRhT GlintLeaderBoard_participantsDesktop__kp8IA">
          User
          <span class="GlintLeaderBoard_dot__I7Uo_"></span>
          Number of Participants: 2338
        </p>
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC GlintLeaderBoard_leftCol__oVRhT GlintLeaderBoard_participantsMobile__VjfPA">
          Participants
          <span class="GlintLeaderBoard_dot__I7Uo_"></span>
          2338
        </p>
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC GlintLeaderBoard_rightCol__rtTu6">Farming speed (glints / day)</p>
        <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC GlintLeaderBoard_rightCol__rtTu6">Amount of Glint Coin</p>
      </div>
      <div class="GlintLeaderBoard_leaderboardTableBody__7AHKE">
        <a
          v-for="(item, key) in listItems"
          :key="key"
          class="GlintLeaderBoard_leaderboardRow__UwaE_"
          href=""
          >
          <div class="GlintLeaderBoard_leftCol__oVRhT">
            <span class="GlintLeaderBoard_avatarWrapper___25q0">
              <span class="Avatar_avatar__ejnJs Avatar_bid__MLC4r" :style="{ backgroundImage: `url(${item.avatar})` }"></span>
              <span class="GlintLeaderBoard_place__Q0O3Q">{{ key + 1 }}</span>
            </span>
            <div class="GlintLeaderBoard_infoWrapper__Mb0qS">
              <h6 class="Text_h6__B3dZE Text_default__ei0zT">{{ item.username }}</h6>
              <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC">{{ item.size }}</p>
            </div>
          </div>
          <p class="Text_h5__PRxb0 Text_default__ei0zT Text_bold__96_eJ GlintLeaderBoard_rightCol__rtTu6">≈{{ item.farming }}</p>
          <p class="Text_h5__PRxb0 Text_default__ei0zT Text_bold__96_eJ GlintLeaderBoard_rightCol__rtTu6">≈{{ item.amount }}
            <svg><use xlink:href="#icon-glints"></use></svg>
          </p>
          <div class="GlintLeaderBoard_mobileCol__zAO_f">
            <div class="GlintLeaderBoard_mobileRow__oYDNZ">
              <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC">Farming speed (glints / day)</p>
              <p class="Text_p__mrhFK Text_default__ei0zT Text_semiBold__iFdnC">≈{{ item.farming }}</p>
            </div>
            <div class="GlintLeaderBoard_mobileRow__oYDNZ">
              <p class="Text_p__mrhFK Text_secondary__0Sfqb Text_regular__lCAPC">Amount of Glint Coin</p>
              <p class="Text_p__mrhFK Text_default__ei0zT Text_semiBold__iFdnC">≈{{ item.amount }}
                <svg><use xlink:href="#icon-glints"></use></svg>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <PageSwitch :totalPages="228" />
  </section>
</template>

<script setup>
const listItems = [
  {farming: '433.6', amount: '433.6', size: '4×Big, 44×Medium, 24×Small', username: 'Sage', raiting: '10', avatar: 'https://kartinkof.club/uploads/posts/2022-03/1648289033_11-kartinkof-club-p-mem-kot-smotrit-v-kameru-11.jpg'},
  {farming: '433.6', amount: '433.6', size: '4×Big, 44×Medium, 24×Small', username: 'Imp', raiting: '10', avatar: 'https://www.zastavki.com/pictures/1920x1200/2010/Nature_Beach_Summer_sea_beach_021750_.jpg'},
  {farming: '433.6', amount: '433.6', size: '4×Big, 44×Medium, 24×Small', username: 'Van', raiting: '10', avatar: 'https://pro-dachnikov.com/uploads/posts/2021-11/1637851065_47-pro-dachnikov-com-p-oduvanchik-foto-51.jpg'},
]

const listInput = [
  {name: 'null_null', text: 'Recommended'},
  {name: 'rarity_asc', text: 'Rarity: Low to High'},
  {name: 'rarity_desc', text: 'Rarity: High to Low'},
  {name: 'price_asc', text: 'Price: Low to High'},
  {name: 'price_desc', text: 'Price: High to Low'},
]
</script>

<style lang="sass" scoped>
a, h6, p
  margin: 0

h6, p
  padding: 0

form, span
  margin: 0

div, form, h2, section, span
  padding: 0

h2
  margin-left: 0
  margin-right: 0
  margin-top: 0

div, section
  font-size: inherit
  font-weight: inherit

div, form, h2, h6, p, span
  box-sizing: border-box
  font-family: inherit

div
  line-height: inherit
  margin: 0

section
  display: block

.inherited-styles-for-exported-element
  color: #e9e9eb
  font-family: Inter, sans-serif
  line-height: 1

button, input
  appearance: none

.Button_button__30ukX, a
  box-sizing: border-box
  text-decoration: none

.Button_button__30ukX
  cursor: pointer
  font-size: 16px
  font-weight: 600
  height: fit-content
  justify-content: center
  line-height: 24px
  text-align: center
  transition: all .3s
  width: max-content

.Button_default__Cpmha
  border-style: none
  padding-bottom: 12px
  padding-top: 12px

.Button_square__1tzJx
  align-items: center
  border-radius: 12px
  justify-content: center
  padding-left: 0
  padding-right: 0

@media (max-width: 600px)
  .Button_button__30ukX
    font-size: 14px
    line-height: 20px

  .Button_default__Cpmha
    padding: 14px 20px

  .Button_square__1tzJx
    border-radius: 8px
    padding: 0

.Text_h2__z90TD
  font-size: 28px
  line-height: 40px

.Text_h5__PRxb0
  font-size: 18px
  line-height: 26px

.Text_h6__B3dZE
  font-size: 16px
  font-weight: 500
  line-height: 24px

.Text_p__mrhFK
  font-size: 14px
  line-height: 20px

.Text_default__ei0zT
  color: #e9e9eb

.Text_secondary__0Sfqb
  color: #bfc1c7

.Text_bold__96_eJ
  font-weight: 700

.Text_semiBold__iFdnC
  font-weight: 600

.Text_regular__lCAPC
  font-weight: 400

.DropdownList_dropdownButtonWrapper__uwYZJ
  position: relative

.DropdownList_dropdownButton__h3K5U
  align-items: center
  border-radius: 12px
  column-gap: 2px
  cursor: pointer
  display: flex
  padding: 12px 16px
  row-gap: 2px
  transition: all .3s

.DropdownList_chevron__eCeF3
  margin-left: 8px
  transition: all .3s

.Avatar_avatar__ejnJs
  background-origin: border-box
  background-position: 50% 50%
  background-repeat: no-repeat
  background-size: cover
  border-radius: 50%
  display: inline-block
  flex-shrink: 0
  position: relative

.Avatar_bid__MLC4r
  height: 44px
  width: 44px

.Avatar_placeholder__9MXeK
  border-style: none

.container
  box-sizing: border-box
  margin-left: auto
  margin-right: auto
  margin-top: 0
  width: 100%

@media screen and (max-width: 1300px)
  .container
    padding: 0 20px
    width: 100%

@media screen and (max-width: 1024px)
  .container
    width: 100%

@media screen and (max-width: 600px)
  .container
    padding: 0 16px

.Pagination_paginationWrapper__hBv1V
  flex-direction: row

.Pagination_redesignWrapper___wxzr
  background: #16181c
  border-radius: 12px
  display: inline-flex
  padding: 4px

.GlintLeaderBoard_header__6p2_f
  margin-bottom: 58px
  text-align: center

.GlintLeaderBoard_leaderboardWrapper__DAu59
  margin-bottom: 24px

.GlintLeaderBoard_leaderboardRow__UwaE_
  display: grid
  grid-template-columns: 1fr 190px 190px
  padding: 16px 24px

.GlintLeaderBoard_searchWrapper__NV4W_
  column-gap: 16px
  display: flex
  margin-bottom: 16px
  row-gap: 16px

.GlintLeaderBoard_sortButton__GGHKw
  display: none
  flex-shrink: 0
  height: 48px
  width: 48px

.GlintLeaderBoard_rightCol__rtTu6
  align-items: center
  display: flex
  justify-content: flex-end

.GlintLeaderBoard_leftCol__oVRhT
  display: flex

.GlintLeaderBoard_mobileRow__oYDNZ p
  align-items: center
  display: flex

.GlintLeaderBoard_avatarWrapper___25q0
  margin-right: 16px
  position: relative

.GlintLeaderBoard_place__Q0O3Q
  align-items: center
  background: #fff
  border-radius: 100px
  bottom: -2px
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px
  color: #0e1014
  display: inline-flex
  font-size: 14px
  font-weight: 600
  height: 20px
  justify-content: center
  line-height: 20px
  min-width: 20px
  padding: 0 4px
  position: absolute
  right: -2px

.GlintLeaderBoard_paginationWrapper__COX5F
  display: flex
  justify-content: center

.GlintLeaderBoard_mobileCol__zAO_f
  background: #1e2024
  border-radius: 8px
  column-gap: 12px
  display: none
  flex-direction: column
  margin-top: 16px
  padding: 12px
  row-gap: 12px

.GlintLeaderBoard_mobileRow__oYDNZ
  align-items: center
  display: flex
  justify-content: space-between

@media screen and (max-width: 600px)
  .GlintLeaderBoard_container__eHIhJ
    margin-bottom: 120px

  .GlintLeaderBoard_leaderboardRow__UwaE_
    grid-template-columns: 1fr

  .GlintLeaderBoard_rightCol__rtTu6
    display: none

  .GlintLeaderBoard_mobileCol__zAO_f
    display: flex

  .GlintLeaderBoard_headerRow__hoLtg
    background: #1e2024
    border-bottom: 0 none #e9e9eb
    border-radius: 12px 12px 0 0

  .GlintLeaderBoard_leaderboardRow__UwaE_
    padding: 16px

  .GlintLeaderBoard_leaderboardWrapper__DAu59
    margin-bottom: 16px

  .GlintLeaderBoard_header__6p2_f
    margin-bottom: 24px

  .GlintLeaderBoard_dropdownButton__yIJaL
    display: none

  .GlintLeaderBoard_sortButton__GGHKw
    display: flex

  .GlintLeaderBoard_searchWrapper__NV4W_
    column-gap: 8px
    row-gap: 8px

.SearchInput_form__89W0w
  display: flex
  flex-direction: column
  position: relative
  width: 100%

@media screen and (max-width: 1000px)
  .SearchInput_form__89W0w
    width: 100%

.Button_button__30ukX svg
  flex-shrink: 0
  height: 24px
  width: 24px

.Avatar_placeholder__9MXeK path, .SearchInput_redesign__YmdAu.SearchInput_form__89W0w .SearchInput_closeIcon__42Y4b:hover .SearchInput_closeIconSvg__Qa_W9 path
  fill: #e9e9eb

.GlintLeaderBoard_header__6p2_f h2
  margin-bottom: 8px

.GlintLeaderBoard_rightCol__rtTu6 svg
  height: 24px
  margin-left: 4px
  width: 24px

.GlintLeaderBoard_mobileCol__zAO_f svg
  height: 20px
  width: 20px

@media screen and (max-width: 600px)
  .GlintLeaderBoard_header__6p2_f
    h2
      font-size: 20px
      line-height: 28px
      margin-bottom: 4px

    p
      font-size: 16px
      line-height: 24px

  .GlintLeaderBoard_infoWrapper__Mb0qS h6
    max-width: 270px
    overflow: hidden
    text-overflow: ellipsis
    text-wrap: nowrap
    white-space-collapse: collapse

.Button_iconCurrentColor__5vx1t svg path, .Pagination_redesignWrapper___wxzr .Pagination_item__GJ3ds:hover svg path
  fill: currentcolor

.GlintLeaderBoard_mobileRow__oYDNZ p svg
  margin-left: 4px

.Button_button__30ukX:active
  transform: scale(0.95)

.Button_solid__ZczOc.Button_dark__hKxQ0
  background-color: #1e2024
  color: #fff

@media (max-width: 600px)
  .Button_default__Cpmha:has(svg)
    padding: 12px 16px

.DropdownList_dropdownButton__h3K5U:hover
  background: #d6e4ff0a

.Pagination_paginationWrapper__hBv1V
  .Pagination_item__GJ3ds
    align-items: center
    background: #16181c
    box-sizing: border-box
    cursor: pointer
    display: flex
    justify-content: center
    margin-right: 8px
    text-align: center
    transition: all .3s

  .Pagination_disabled__9kuyw
    cursor: auto

.Pagination_redesignWrapper___wxzr
  .Pagination_item__GJ3ds
    border-radius: 8px
    border-style: none
    color: #898b8f
    font-size: 16px
    font-weight: 500
    height: 40px
    line-height: 24px
    min-width: 40px
    padding: 0 8px

  .Pagination_disabled__9kuyw
    color: #898b8f

  .Pagination_active__fJ98n
    background: #212429
    color: #e9e9eb

@media screen and (max-width: 600px)
  .Pagination_redesignWrapper___wxzr .Pagination_item__GJ3ds
    margin-right: 4px

.GlintLeaderBoard_leaderboardTableBody__7AHKE .GlintLeaderBoard_leaderboardRow__UwaE_
  background: #16181c
  transition: all .3s

.GlintLeaderBoard_leftCol__oVRhT .GlintLeaderBoard_dot__I7Uo_
  background-color: #bfc1c7
  border-radius: 50%
  display: inline-block
  height: 2px
  margin: 0 6px
  width: 2px

.GlintLeaderBoard_headerRow__hoLtg .GlintLeaderBoard_leftCol__oVRhT, .GlintLeaderBoard_leftCol__oVRhT
  align-items: center

.SearchInput_form__89W0w
  .SearchInput_input__2JD1G
    border-radius: 12px
    box-sizing: border-box
    font-size: 16px
    font-weight: 500
    line-height: 24px
    outline: 0
    transition: all .3s
    width: 100%

  .SearchInput_closeIcon__42Y4b
    align-items: center
    cursor: text
    display: flex
    justify-content: center
    opacity: 0
    overflow: hidden
    position: absolute
    right: 10px
    top: 50%
    transform: translateY(-50%)
    z-index: 5

@media screen and (max-width: 1300px)
  .SearchInput_form__89W0w .SearchInput_input__2JD1G
    width: 100%

@media screen and (max-width: 1000px)
  .SearchInput_form__89W0w
    .SearchInput_input__2JD1G
      width: 100%

    .SearchInput_closeIcon__42Y4b
      display: flex

.Pagination_redesignWrapper___wxzr .Pagination_item__GJ3ds svg
  height: 24px
  width: 24px

.Button_solid__ZczOc.Button_dark__hKxQ0:hover
  background-color: #212429

.Pagination_paginationWrapper__hBv1V
  .Pagination_item__GJ3ds
    &:hover
      border-color: #023b66

    &:last-child
      margin-right: 0

    .Pagination_chevronLeft__szAD1
      transform: rotate(180deg)

  .Pagination_active__fJ98n:hover
    border-color: #e9e9eb

  .Pagination_disabled__9kuyw:hover
    border-color: #898b8f

.Pagination_redesignWrapper___wxzr
  .Pagination_item__GJ3ds:hover
    background: #212429
    color: #e9e9eb

  .Pagination_disabled__9kuyw:hover
    color: #898b8f
    cursor: default

.GlintLeaderBoard_leaderboardTableBody__7AHKE .GlintLeaderBoard_leaderboardRow__UwaE_
  &:hover
    background: #1e2024

  &:not(:last-child)
    border-bottom: 0 none #00e

  &:first-child
    border-top-left-radius: 16px
    border-top-right-radius: 16px

  &:last-child
    border-bottom-left-radius: 16px
    border-bottom-right-radius: 16px

@media screen and (max-width: 600px)
  .GlintLeaderBoard_leaderboardTableBody__7AHKE .GlintLeaderBoard_leaderboardRow__UwaE_:first-child
    border-radius: 0

.SearchInput_redesign__YmdAu.SearchInput_form__89W0w
  .SearchInput_input__2JD1G
    background: #16181c
    box-shadow: none
    padding: 11px 11px 11px 48px

  .SearchInput_searchIcon__dMLYQ
    left: 16px
    position: absolute
    top: calc(50% - 12px)

  .SearchInput_closeIcon__42Y4b
    background: #1e2024
    border-radius: 6px
    height: 24px
    transition: all .3s
    width: 24px

.Pagination_paginationWrapper__hBv1V .Pagination_item__GJ3ds
  .Pagination_chevronLeft__szAD1 path, .Pagination_chevronRight___Q0BQ path
    transition: all .3s

.SearchInput_redesign__YmdAu.SearchInput_form__89W0w
  .SearchInput_searchIcon__dMLYQ path
    transition: all .3s

  .SearchInput_input__2JD1G::placeholder
    opacity: 1

  &:active .SearchInput_input__2JD1G, &:focus .SearchInput_input__2JD1G, &:focus-within .SearchInput_input__2JD1G, &:hover .SearchInput_input__2JD1G
    border: 1px solid #16181c
    border-image: none 100% 1 0 stretch
    color: #e9e9eb

  .SearchInput_closeIcon__42Y4b
    &:hover
      background: #27292e

    .SearchInput_closeIconSvg__Qa_W9
      height: 16px
      transition: inherit
      width: 16px

  &:active .SearchInput_searchIcon__dMLYQ path, &:focus .SearchInput_searchIcon__dMLYQ path, &:focus-within .SearchInput_searchIcon__dMLYQ path, &:hover .SearchInput_searchIcon__dMLYQ path
    fill: currentcolor

  .SearchInput_closeIcon__42Y4b .SearchInput_closeIconSvg__Qa_W9 path
    transition: inherit

button, input
  font-family: Inter, sans-serif !important

.Button_square__1tzJx svg, .DropdownList_chevron__eCeF3
  margin-right: 0 !important

.Avatar_placeholder__9MXeK
  padding: 0 !important

.GlintLeaderBoard_participantsDesktop__kp8IA
  display: flex !important

.GlintLeaderBoard_participantsMobile__VjfPA
  display: none !important

@media screen and (max-width: 600px)
  .GlintLeaderBoard_participantsDesktop__kp8IA
    display: none !important

  .GlintLeaderBoard_participantsMobile__VjfPA
    display: flex !important

.Pagination_redesignWrapper___wxzr .Pagination_disabled__9kuyw:hover
  background: #16181c !important

</style>
