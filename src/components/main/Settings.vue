<template>
  <section>
    <div class="SettingsContainer_settingsContent__ZMnRy inherited-styles-for-exported-element">
      <section class="SettingsContainer_settingsContentSection__tKxJG column">
        <div class="SettingsContainer_settingsContentSection__Headline__TV0Kd">
          <h3 class="Text_h3__0opol Text_default__ei0zT SettingsContainer_settingsContentTitle__HAL98">Account settings</h3>
        </div>
        <p class="Text_h6__B3dZE Text_secondary__0Sfqb SettingsContainer_settingsContentDescription__lKLxZ">
          Manage your connected Telegram account, date format, time zone, notifications and color theme.
        </p>
      </section>
      <div>
        <div class="settings_section__m5IQu">
          <div class="TelegramNotifications_telegramNotifications_Box__o6sxr">
            <svg width="24" height="24" class="TelegramNotifications_telegramNotificationsIcon__SV_1Y"><use xlink:href="#icon-telegram"></use></svg>
            <h6 class="Text_h6__B3dZE Text_default__ei0zT TelegramNotifications_telegramNotificationsTitle__ym64V">Telegram account</h6>
            <h6 class="Text_h6__B3dZE Text_tertiary__q_g0h TelegramNotifications_telegramNotificationsDescription__ozymx">Connect your Telegram account for notifications</h6>
            <button v-if="true" type="button" class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_primary__RWocB TelegramNotifications_telegramNotificationsLink__4UsGv Button_iconCurrentColor__5vx1t">Connect Telegram account</button>
            <button v-else type="button" class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_danger__YtD__ TelegramNotifications_telegramNotificationsLink__4UsGv TelegramNotifications_telegramNotificationsLink_Danger__XGSxo Button_iconCurrentColor__5vx1t">Disconnect Telegram account</button>
          </div>
        </div>
        <div class="settings_section__m5IQu">
          <h6 class="Text_h6__B3dZE Text_default__ei0zT settings_sectionTitle__osESF">Date format</h6>
          <p class="Text_h6__B3dZE Text_default__ei0zT settings_sectionText__bRVrH">Choose the data display format that suits you</p>
          <div class="account_settings__AGSEI">
            <div class="account_settingsField__c8Uzg"><span class="account_settingsFieldName__8LS0q">Date format</span>
              <SelectionWithoutInput :listInput="listInput" />
            </div>
            <div class="account_settingsField__c8Uzg"><span class="account_settingsFieldName__8LS0q">Timezone</span>
              <SelectionWithInput :listInput="listItems" placeholder="Your time zone"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const listInput = [
  {text: '10.12.2022'},
  {text: '10/12/2022'},
  {text: '2022-10-12'},
]
const listItems = [
  {text1: 'Etc/GMT+12', text2: '-12:00'},
  {text1: 'Etc/GMT+11', text2: '-11:00'},
  {text1: 'Pacific/Niue', text2: '-11:00'},
  {text1: 'America/Adak', text2: '-10:00'},
  {text1: 'Etc/GMT+10', text2: '-10:00'},
]


</script>

<style lang="sass" scoped>
span
  margin: 0

h3, h6, p, span
  padding: 0

h3, p
  margin-left: 0
  margin-right: 0
  margin-top: 0

div
  margin: 0
  padding: 0

button, input
  appearance: none

.Button_button__30ukX
  align-items: center
  box-sizing: border-box
  display: flex
  justify-content: center
  text-align: center
  text-decoration: none
  transition: all .3s
  width: max-content

.Button_default__Cpmha
  border-radius: 12px
  border-style: none

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

.Text_tertiary__q_g0h
  color: #898b8f

.Input_root__JYT11
  width: 100%

.Input_input__lvORT
  box-sizing: border-box

.Input_inner__AFwX9
  height: 100%
  position: relative
  width: 100%

.Input_textInput__a3yOZ
  padding-bottom: 16px
  padding-top: 16px
  transition: border-color .25s ease-out

.Input_legacy__YSmUn
  background: #060a0f
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 stretch

.Select_Select__c0jZV
  display: flex
  flex-direction: column
  position: relative
  width: 100%

.Select_SelectArrow__4C7cC
  height: 20px
  position: absolute
  right: 12px
  top: 12px
  transform: rotate(0deg)
  transition: transform .2s ease-in
  width: 20px
  z-index: 3

.Select_SelectInput__31PPa
  background-color: #060a0f
  border-radius: 12px
  box-shadow: 0 0 0 0.5px rgba(214, 228, 255, 0.16)
  color: #e9e9eb
  font-size: 14px
  height: 44px
  padding-left: 12px
  padding-right: 12px
  width: 100%

.Select_SelectValue__nuBys
  background-color: #060a0f
  border-radius: 12px
  box-shadow: 0 0 0 0.5px rgba(214, 228, 255, 0.16)
  color: #e9e9eb
  font-size: 14px
  height: 44px
  padding-left: 12px
  padding-right: 12px
  width: 100%
  align-items: center
  cursor: pointer
  display: flex
  font-weight: 600
  position: relative

.Select_SelectValue_Placeholder__YHfdO
  color: #898b8f

.Select_SelectInput__31PPa
  font-weight: 600
  line-height: 44px
  visibility: hidden

.Select_SelectDropdown__1Q1tE
  background-color: #16181c
  border: 1px solid rgba(214, 228, 255, 0.16)
  border-image: none 100% 1 0 stretch
  border-radius: 12px
  display: none
  left: 0
  max-height: 220px
  overflow: hidden
  position: absolute
  right: 0
  top: calc(100% + 8px)
  z-index: 5

.Select_SelectDropdownScroll__okwMN
  height: 100%
  max-height: 220px
  overflow-y: auto
  width: 100%

.Select_SelectOption__uQrj4
  align-items: center
  color: #e9e9eb
  cursor: pointer
  display: flex
  font-size: 14px
  font-weight: 600
  height: 44px
  justify-content: space-between
  line-height: 20px
  padding-left: 12px
  padding-right: 12px
  transition: background-color .2s ease-in
  width: 100%

.Select_SelectOptionTag__fYuB5
  background-color: #059df5
  border-radius: 4px
  color: #e9e9eb
  font-size: 10px
  font-weight: 600
  line-height: 16px
  padding: 2px 4px

.TelegramNotifications_telegramNotificationsTitle__ym64V
  font-weight: 700
  margin: 0 0 8px

.TelegramNotifications_telegramNotificationsDescription__ozymx
  font-size: 14px
  line-height: 20px
  margin-left: 0
  margin-right: 0
  margin-top: 0

.TelegramNotifications_telegramNotificationsIcon__SV_1Y
  left: 12px
  position: absolute
  top: 16px
  z-index: 2

.TelegramNotifications_telegramNotificationsLink__4UsGv
  cursor: pointer
  font-size: 14px
  font-weight: 600
  height: auto
  line-height: 20px
  padding: 0

.TelegramNotifications_telegramNotifications_Box__o6sxr
  background-color: #16181c
  border-radius: 12px
  box-sizing: border-box
  max-width: 420px
  padding: 16px 12px 16px 48px
  position: relative
  width: 100%

@media (max-width: 600px)
  .TelegramNotifications_telegramNotifications_Box__o6sxr
    max-width: 100%

.SettingsContainer_settingsContent__ZMnRy
  padding-left: 110px
  position: relative

@media screen and (max-width: 1000px)
  .SettingsContainer_settingsContent__ZMnRy
    border-left-color: initial
    border-left-style: none
    border-left-width: initial
    padding-left: 0

.SettingsContainer_settingsContentTitle__HAL98
  margin-bottom: 0

.SettingsContainer_settingsContentDescription__lKLxZ
  font-size: 14px
  line-height: 20px
  margin-bottom: 0
  padding-bottom: 0
  width: 100%

.SettingsContainer_settingsContentSection__tKxJG
  padding-bottom: 32px
  padding-top: 32px

.SettingsContainer_settingsContentSection__Headline__TV0Kd
  align-items: center
  column-gap: 8px
  display: flex
  margin-bottom: 12px
  row-gap: 8px

@media screen and (max-width: 1000px)
  .SettingsContainer_settingsContentSection__tKxJG
    padding-bottom: 16px
    padding-top: 16px

.settings_section__m5IQu
  border-top: 1px solid rgba(214, 228, 255, 0.16)
  padding-bottom: 32px
  padding-top: 32px

.settings_sectionTitle__osESF
  font-weight: 600
  margin: 0 0 8px

.settings_sectionText__bRVrH
  color: #bfc1c7
  font-size: 14px
  line-height: 20px
  margin: 0 0 16px

@media screen and (max-width: 1000px)
  .settings_section__m5IQu
    border-style: none
    padding-bottom: 16px
    padding-top: 16px

.account_settings__AGSEI
  column-gap: 32px
  display: grid
  grid-template-columns: 1fr 1fr
  row-gap: 32px
  width: 100%

@media screen and (max-width: 600px)
  .account_settings__AGSEI
    grid-template-columns: 1fr

.account_settingsField__c8Uzg
  column-gap: 8px
  display: flex
  flex-direction: column
  row-gap: 8px

.account_settingsFieldName__8LS0q
  color: #898b8f
  font-size: 12px
  line-height: 18px

.Input_input__lvORT::placeholder
  color: #898b8f99

.Input_textInput__a3yOZ
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button
    appearance: none
    margin: 0

.Select_SelectArrow__4C7cC path, .TelegramNotifications_telegramNotificationsIcon__SV_1Y path
  fill: #fff

.Select_SelectValue__nuBys > div
  left: 0
  position: absolute
  top: 0
  z-index: 2

.SettingsContainer_settingsContent__ZMnRy::before
  background-color: rgba(214, 228, 255, 0.16)
  content: ""
  display: block
  height: 100%
  left: 0
  position: absolute
  top: 0
  width: .5px
  z-index: 2

@media screen and (max-width: 1000px)
  .SettingsContainer_settingsContent__ZMnRy::before
    display: none

.Button_button__30ukX:active
  transform: scale(0.95)

.Button_solid__ZczOc.Button_primary__RWocB
  background: #059df5

@media (max-width: 600px)
  .Button_default__Cpmha:has(svg)
    padding: 12px 16px

.Input_input__lvORT:focus-visible
  outline: 0

.Input_textInput__a3yOZ
  &:active, &:focus
    color: #e9e9eb

.Input_legacy__YSmUn
  &:active, &:focus
    border-color: rgba(214, 228, 255, 0.16)

.Select_SelectOption__uQrj4:hover
  background-color: #1e2024

.TelegramNotifications_telegramNotifications_Box__o6sxr .TelegramNotifications_telegramNotificationsDescription__ozymx
  margin-bottom: 12px

@media screen and (max-width: 1000px)
  .SettingsContainer_settingsContentSection__tKxJG:first-child
    padding-top: 0

.Button_solid__ZczOc.Button_primary__RWocB:hover
  background-color: #0486d1

button, input
  font-family: Inter, sans-serif !important

.TelegramNotifications_telegramNotificationsLink__4UsGv
  background-color: transparent !important
  color: #059df5 !important

.Button_solid__ZczOc.Button_danger__YtD__
  color: #fff
  background-color: #f05b60

.TelegramNotifications_telegramNotificationsLink_Danger__XGSxo
  color: #f05b60!important
</style>