<template>
  <div class="TDSaleContainer_footer__Hj_gn inherited-styles-for-exported-element">
    <div class="TDSaleContainer_counterWrapper__KkYim">
      <p class="Text_h6__B3dZE Text_default__ei0zT">Amount:</p>
      <div class="TDSaleContainer_buttons__JTL1o">
        <button @click="minus" type="button" :disabled="amount <= 1"
          class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 TDSaleContainer_saleControls__h3T9V Button_iconCurrentColor__5vx1t"
          :class="{ 'Button_disabled__ifhC4': amount <= 1 }"
          >
          <svg width="24" height="24"><use xlink:href="#icon-minus"></use></svg>
        </button>
        <div class="Input_root__JYT11">
          <div class="Input_inner__AFwX9">
            <input v-model="amount" class="Input_input__lvORT Input_textInput__a3yOZ Input_secondary__jiIf6 TDSaleContainer_input__t8VqB" type="namber" name="productAmount" id="productAmount" pattern="[0-9]*">
          </div>
        </div>
        <button @click="plus" type="button"
        class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 TDSaleContainer_saleControls__h3T9V Button_iconCurrentColor__5vx1t">
          <svg width="24" height="24"><use xlink:href="#icon-pluse"></use></svg>
        </button>
      </div>
    </div>
    <div class="TDSaleContainer_saleButtonContainer__DLD6_">
      <div class="TDSaleContainer_glintPayContainer__vDoon">
        <input type="checkbox" id="glint_pay_enabled" class="Checkbox_checkbox__q0u0_">
        <label for="glint_pay_enabled" class="Checkbox_checkboxWrapper__4y80j TDSaleContainer_checkboxContainer__jMw8H">
          <div class="TDSaleContainer_glintPayInfo__WPyds">
            <div class="TDSaleContainer_glintPayHeader__JkRSc">Pay with Glint Coin up to 50%</div>
            <div class="TDSaleContainer_glintPayBalance__G8Ep9">Balance:<span>{{ balance }}
              <svg width="20" height="20" ><use xlink:href="#icon-glints-lil"></use></svg>
              </span>
            </div>
            <div class="TDSaleContainer_glintPayConvert__TQ3wB">
              <span>1
                <svg width="20" height="20"><use xlink:href="#icon-glints-lil"></use></svg>
              </span>= 0.05 TON
            </div>
          </div>
        </label>
        <div class="TDSaleContainer_glintOptionContainer__3ECWR">
          <label
            v-for="(item, key) in itemList"
            :key="key"
            @click="selectInput(key)"
            class="TDSaleContainer_glintOption__PnOtM"
            :class="{ 'TDSaleContainer_disabled__Py_Wd': key !== selection }"
            >
            <input
              type="radio"
              name="glint_option_value"
              disabled
              :checked="key === selection">
            <div class="TDSaleContainer_glintOptionPercent__96yNN">{{ item.procent }}%</div>
            <div class="TDSaleContainer_glintOptionAmount__0JpS3">{{ item.glints_count }}
              <svg width="20" height="20" ><use xlink:href="#icon-glints-lil"></use></svg>
            </div>
          </label>
        </div>
      </div><button type="button" class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_primary__RWocB SingleNftSaleContainer_button__2w0YB TDSaleContainer_saleButton__S7elr TDSaleContainer_active__Nvjhx Button_iconCurrentColor__5vx1t">Buy 1 NFT for 222 TON</button>
    </div>
    <p class="Text_h6__B3dZE Text_tertiary__q_g0h Text_regular__lCAPC SingleNftSaleContainer_saleSubtitle__mkQPh"></p>
  </div>
</template>

<script setup>

const amount = ref(1)

const itemList = [
{ procent: 5, glints_count: 222},
{ procent: 10, glints_count: 444},
{ procent: 15, glints_count: 666},
{ procent: 25, glints_count: '1.1K'},
{ procent: 50, glints_count: '2.2K'},
]

const selection = ref(0)
const balance = ref(0)

function plus() {
  amount.value = Number(amount.value) + 1
}

function minus() {
  amount.value = Number(amount.value) - 1
}

function selectInput(key) {
  selection.value = key
}

</script>

<style lang="sass" scoped>
div, p, span
  padding: 0

input
  border-style: none

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
  transition: all .3s

.Button_default__Cpmha
  border-radius: 12px
  border-style: none
  padding: 12px 24px

.Text_h6__B3dZE
  font-size: 16px
  font-weight: bold
  line-height: 24px
  letter-spacing: 0.5px

.Text_default__ei0zT
  color: #cdcdd7

.Text_tertiary__q_g0h
  color: #898b8f

.Text_regular__lCAPC
  font-weight: 400

.Checkbox_checkbox__q0u0_
  height: 0
  margin: 0
  visibility: hidden
  width: 0

.Checkbox_checkboxWrapper__4y80j
  align-items: center
  cursor: pointer
  display: flex
  font-weight: 500
  transition: all .2s
  width: 100%

.TDSaleContainer_footer__Hj_gn
  margin-top: 16px

.TDSaleContainer_counterWrapper__KkYim
  align-items: center
  background: #16181c
  border-radius: 12px
  display: flex
  justify-content: space-between
  margin-bottom: 12px
  padding: 8px 12px 8px 16px

.TDSaleContainer_saleButton__S7elr
  width: 100%

.TDSaleContainer_saleButtonContainer__DLD6_
  background: #16181c
  border-radius: 12px
  display: flex
  flex-direction: column
  justify-content: space-between
  margin-bottom: 8px
  padding: 0

.TDSaleContainer_glintPayContainer__vDoon
  display: flex
  flex-direction: column
  padding: 8px
  user-select: none

.TDSaleContainer_glintOptionContainer__3ECWR
  column-gap: 8px
  display: grid
  grid-template-columns: repeat(5, 1fr)
  margin: 8px 0
  row-gap: 8px

.SingleNftSaleContainer_saleSubtitle__mkQPh
  text-align: center

.Input_root__JYT11
  position: relative
  width: 100%

.Input_input__lvORT
  box-sizing: border-box
  color: #e9e9eb

.Input_inner__AFwX9
  height: 100%
  position: relative
  width: 100%

.Input_textInput__a3yOZ
  font-size: 16px
  font-weight: 500
  line-height: 1.5
  transition: border-color .25s ease-out

.Input_secondary__jiIf6
  background: #1e2024
  border: 1px solid transparent

.Button_button__30ukX svg
  flex-shrink: 0
  height: 24px
  width: 24px

.TDSaleContainer_glintOptionContainer__3ECWR .TDSaleContainer_glintOption__PnOtM .TDSaleContainer_glintOptionAmount__0JpS3 svg, .TDSaleContainer_glintPayContainer__vDoon svg
  fill: currentcolor

.TDSaleContainer_glintOptionContainer__3ECWR input
  display: none

.Input_input__lvORT::placeholder
  color: #898b8f99

.Input_textInput__a3yOZ
  &::-webkit-inner-spin-button, &::-webkit-outer-spin-button
    appearance: none
    margin: 0

.TDSaleContainer_saleControls__h3T9V svg path
  transition: all .3s

.Button_button__30ukX
  &:active
    transform: scale(0.95)

  &.Button_disabled__ifhC4
    cursor: not-allowed
    pointer-events: none

.Button_solid__ZczOc.Button_dark__hKxQ0
  color: #fff

@media (max-width: 600px)
  .Button_default__Cpmha:has(svg)
    padding: 12px 16px

.Checkbox_checkboxWrapper__4y80j:hover
  color: #e9e9eb

.TDSaleContainer_counterWrapper__KkYim .TDSaleContainer_buttons__JTL1o
  align-items: center
  column-gap: 8px
  display: flex
  row-gap: 8px

.TDSaleContainer_saleButton__S7elr.TDSaleContainer_active__Nvjhx
  color: #e9e9eb

.TDSaleContainer_glintPayContainer__vDoon
  .TDSaleContainer_glintPayInfo__WPyds
    column-gap: 2px
    display: flex
    flex-direction: column
    row-gap: 2px

  .TDSaleContainer_checkboxContainer__jMw8H
    padding: 8px

  .TDSaleContainer_glintPayHeader__JkRSc
    font-size: 16px
    font-weight: 600
    line-height: 24px
    letter-spacing: .5px

  .TDSaleContainer_glintPayBalance__G8Ep9, .TDSaleContainer_glintPayConvert__TQ3wB
    align-items: center
    color: #bfc1c7
    letter-spacing: .5px
    column-gap: 2px
    display: flex
    font-size: 14px
    line-height: 20px
    row-gap: 2px
    // font-weight: bold

.TDSaleContainer_glintOptionContainer__3ECWR .TDSaleContainer_glintOption__PnOtM
  align-items: center
  background: #1e2024
  border: 1px solid rgba(154, 163, 184, 0.08)
  border-image: none 100% 1 0 stretch
  border-radius: 12px
  display: flex
  flex-direction: column
  justify-content: center
  padding: 6px 0

.Input_input__lvORT:focus-visible
  outline: 0

.Input_textInput__a3yOZ
  &:active, &:focus
    color: #e9e9eb

.Input_secondary__jiIf6
  &:active, &:focus, &:hover
    border-color: transparent

.TDSaleContainer_counterWrapper__KkYim .TDSaleContainer_buttons__JTL1o button
  background-color: transparent
  border-radius: 6px
  flex-shrink: 0
  height: 40px
  padding: 0
  width: 40px

.TDSaleContainer_glintPayContainer__vDoon
  .TDSaleContainer_checkboxContainer__jMw8H::before
    align-self: flex-start

  .TDSaleContainer_glintPayBalance__G8Ep9 span, .TDSaleContainer_glintPayConvert__TQ3wB span
    align-items: center
    color: #e9e9eb
    column-gap: 2px
    display: flex
    font-weight: 600
    row-gap: 2px

@media (max-width: 600px)
  .TDSaleContainer_glintOptionContainer__3ECWR label
    &:first-child, &:nth-child(2), &:nth-child(3)
      grid-column-end: span 2
      grid-column-start: span 2

    &:nth-child(4), &:nth-child(5)
      grid-column-end: span 3
      grid-column-start: span 3

.TDSaleContainer_counterWrapper__KkYim .TDSaleContainer_buttons__JTL1o button svg
  margin-right: 0

.TDSaleContainer_saleControls__h3T9V:disabled svg path
  fill: #898b8f
  stroke: #898b8f

.Button_solid__ZczOc
  &.Button_primary__RWocB:hover
    background-color: #0486d1

  &.Button_dark__hKxQ0:hover
    background-color: #212429

.TDSaleContainer_counterWrapper__KkYim .TDSaleContainer_buttons__JTL1o .TDSaleContainer_input__t8VqB
  border-radius: 6px
  padding: 7px 8px
  text-align: center
  width: 48px

.TDSaleContainer_glintOptionContainer__3ECWR .TDSaleContainer_glintOption__PnOtM
  &:has(input:checked)
    background: #4a31f0

  &.TDSaleContainer_disabled__Py_Wd
    cursor: pointer
    opacity: .4
    transition: all 0.5s ease

    &:hover
      opacity: 1


  .TDSaleContainer_glintOptionPercent__96yNN
    font-size: 14px
    font-weight: 600
    line-height: 20px

  .TDSaleContainer_glintOptionAmount__0JpS3
    align-items: center
    column-gap: 2px
    display: flex
    font-size: 14px
    line-height: 20px
    row-gap: 2px

.Checkbox_checkbox__q0u0_[type=checkbox] + .Checkbox_checkboxWrapper__4y80j::before
  border-image: none 100% 1 0 stretch
  border-radius: 4px
  border-style: none
  border-width: 0
  box-sizing: border-box
  display: inline-block
  flex-shrink: 0
  height: 24px
  left: 0
  margin-right: 12px
  transition: all .2s
  width: 24px

.TDSaleContainer_counterWrapper__KkYim .TDSaleContainer_buttons__JTL1o button:hover
  background: #1e2024

.TDSaleContainer_glintOptionContainer__3ECWR .TDSaleContainer_glintOption__PnOtM:has(input:checked) .TDSaleContainer_glintOptionAmount__0JpS3
  color: #e9e9eb

.Checkbox_checkbox__q0u0_[type=checkbox]:checked + .Checkbox_checkboxWrapper__4y80j::before
  background-attachment: scroll
  background-clip: border-box
  background-color: transparent
  background-image: url(https://ton.diamonds/images/checked.svg)
  background-origin: padding-box
  background-position: 50% center
  background-repeat: no-repeat
  background-size: 24px
  border-color: #e9e9eb
  color: #e9e9eb
  content: ""
  opacity: 1

.TDSaleContainer_saleButton__S7elr.TDSaleContainer_active__Nvjhx
  background: #4a31f0 !important

.Checkbox_checkboxWrapper__4y80j:hover::before
  opacity: 1 !important

</style>
