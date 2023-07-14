<template>
  <section>
    <div class="GlintCards_container__ZQb1x inherited-styles-for-exported-element">
      <div class="GlintCards_card__z7LXk GlintCards_glintCard__YpZLE GlintCards_inactiveGlintCard__BoVv4 inherited-styles-for-exported-element">
      <div class="GlintCards_infoCol__34NOd">
        <div>
          <p class="Text_p__mrhFK Text_tertiary__q_g0h Text_regular__lCAPC GlintCards_title__54Qp6 GlintCards_glintTitleWrapper__dGO3h">farming speed</p>
          <p class="Text_h1__RBxlz Text_default__ei0zT Text_semiBold__iFdnC GlintCards_speed__s490L">0.0000
            <span>glints</span>
            <span class="TooltipWithIcon_infoWrapper__Q3Ar1 GlintCards_tooltipIconWrapper__kwctn">
              <svg @mouseover="upHere = true" @mouseleave="upHere = false" width="20" height="20" class="TooltipWithIcon_icon__0Jl_k GlintCards_tooltipIcon__rszQ_"><use xlink:href="#icon-info"></use></svg>
              <div v-if="upHere" class="Tootltip_tooltip__nbgKP TooltipWithIcon_tooltip__JA_DO GlintCards_tooltipCardMessage__GxbDt">
                <div>
                  <h6 class="Text_h6__B3dZE Text_default__ei0zT Text_semiBold__iFdnC TooltipWithIcon_title__oIpyR">
                    How did you get that speed?
                  </h6>
                  <div class="GlintCards_tooltipSeparator__TYR6D"></div>
                  ×
                  <b> 100% </b>
                  (Boost)<br>
                </div>
              </div>
            </span>
          </p>
        </div>
        <div class="GlintCards_linksWrapper___Uq6t">
          <span class="GlintCards_link__Pz2GC">Boost speed
            <svg width="20" height="20"><use xlink:href="#icon-right"></use></svg>
          </span>
        </div>
      </div>
      <img src="https://ton.diamonds/images/glints-background.svg" class="GlintCards_glintBg___2r3a" alt="bg">
    </div>
    <div class="GlintCards_card__z7LXk GlintCards_inactiveGlintCard__BoVv4 inherited-styles-for-exported-element">
      <div class="GlintCards_infoCol__34NOd">
        <div>
          <p class="Text_p__mrhFK Text_tertiary__q_g0h Text_regular__lCAPC GlintCards_title__54Qp6 GlintCards_glintTitleWrapper__dGO3h">Total glints</p>
          <p class="Text_h1__RBxlz Text_default__ei0zT Text_semiBold__iFdnC GlintCards_glint__NXIUD">
            <svg width="28" height="28"><use xlink:href="#icon-tertiary"></use></svg>
            <span>0.00000</span>
          </p>
        </div>
        <div class="GlintCards_linksWrapper___Uq6t">
          <span class="GlintCards_link__Pz2GC">What is glint?
            <svg width="20" height="20"><use xlink:href="#icon-right"></use></svg>
          </span>
          <a rel="noreferrer" class="Button_button__30ukX Button_solid__ZczOc Button_default__Cpmha Button_dark__hKxQ0 GlintCards_leaderboardLink__FiTnl Button_iconCurrentColor__5vx1t" href="https://ton.diamonds/glint-coin#leaderboard">Leaderboard
            <svg width="20" height="20"><use xlink:href="#icon-star"></use></svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
 const upHere = ref(false)
</script>

<style lang="sass" scoped>
.Text_h1__RBxlz
  font-size: 32px
  line-height: 44px

.GlintCards_speed__s490L span, .Text_p__mrhFK
  font-size: 14px
  line-height: 20px

.Text_default__ei0zT
  color: #e9e9eb

.Text_tertiary__q_g0h
  color: #898b8f

.Text_semiBold__iFdnC
  font-weight: 600

.Text_regular__lCAPC
  font-weight: 400

.TooltipWithIcon_infoWrapper__Q3Ar1
  position: relative

.GlintCards_card__z7LXk
  border-radius: 16px
  flex: 1 1 0
  padding: 24px

.GlintCards_glintCard__YpZLE
  align-items: center
  display: flex
  justify-content: space-between

.GlintCards_link__Pz2GC
  align-items: center
  color: #e9e9eb
  column-gap: 2px
  cursor: pointer
  display: flex
  font-size: 14px
  font-weight: 400
  line-height: 20px
  row-gap: 2px

.GlintCards_tooltipCardMessage__GxbDt
  color: var(--text-color-secondary)
  max-width: 90vw
  width: max-content
  z-index: 10

.TooltipWithIcon_tooltip__JA_DO
  left: 50%
  transform: translate(-50%)
  top: unset
  width: 288px
  font-style: normal
  z-index: 3
  background: var(--dark-secondary)
  border: 0.5px solid var(--default-stroke)
  box-shadow: 0 0 8px rgba(14, 16, 20, 0.12), 0 4px 16px rgba(14, 16, 20, 0.16)
  padding: 8px 12px
  border-radius: 12px
  font-weight: 400
  font-size: 16px
  line-height: 24px

.Tootltip_tooltip__nbgKP
  position: absolute
  max-width: 310px
  color: var(--reverse-theme-text-color)
  border-radius: 8px
  right: 0
  padding: 10px
  display: flex
  gap: 10px

.TooltipWithIcon_title__oIpyR
  margin-bottom: 4px

.Text_semiBold__iFdnC
  font-weight: 600

.Text_default__ei0zT
  color: var(--text-color-primary)

.Text_h6__B3dZE
  font-weight: 500
  font-size: 16px
  line-height: 24px

.GlintCards_tooltipSeparator__TYR6D
  width: 100%
  margin: 6px 0
  height: 1px
  background: rgba(214, 228, 255, 0.08)

.GlintCards_tooltipCardMessage__GxbDt b
  color: var(--text-color-primary)
  font-weight: 600

.GlintCards_title__54Qp6
  margin-bottom: 2px
  text-transform: uppercase

.GlintCards_speed__s490L
  align-items: baseline
  column-gap: 4px
  display: flex
  row-gap: 4px

.GlintCards_linksWrapper___Uq6t
  align-items: flex-end
  display: flex
  justify-content: space-between
  margin-top: 24px

.GlintCards_infoCol__34NOd
  display: flex
  flex-direction: column
  justify-content: space-between

.GlintCards_glintTitleWrapper__dGO3h
  align-items: center
  column-gap: 8px
  display: flex
  row-gap: 8px

.GlintCards_tooltipIcon__rszQ_
  cursor: pointer
  height: 16px
  width: 16px

.GlintCards_tooltipIconWrapper__kwctn
  bottom: -3px
  height: 16px
  width: 16px

@media screen and (max-width: 1024px)
  .GlintCards_card__z7LXk
    padding: 16px

  .GlintCards_title__54Qp6
    font-size: 12px
    line-height: 18px

  .GlintCards_speed__s490L
    font-size: 24px
    line-height: 36px

.GlintCards_link__Pz2GC svg path, .TooltipWithIcon_icon__0Jl_k path
  fill: currentcolor

.GlintCards_link__Pz2GC svg
  height: 16px
  width: 16px

.GlintCards_speed__s490L span
  font-weight: 400

.GlintCards_glintCard__YpZLE
  .GlintCards_glintBg___2r3a
    height: 72px
    width: 72px

  &.GlintCards_inactiveGlintCard__BoVv4
    background: #16181c

.GlintCards_container__ZQb1x
  display: flex
  gap: 16px
  margin-bottom: 16px
  width: 100%

.Button_button__30ukX
  align-items: center
  box-sizing: border-box
  cursor: pointer
  display: flex
  height: fit-content
  justify-content: center
  text-align: center
  text-decoration: none
  transition: all .3s
  width: max-content

.Button_default__Cpmha
  border-style: none

.Text_h1__RBxlz
  font-size: 32px
  line-height: 44px

.Text_p__mrhFK
  font-size: 14px
  line-height: 20px

.Text_default__ei0zT
  color: #e9e9eb

.Text_tertiary__q_g0h
  color: #898b8f

.Text_semiBold__iFdnC
  font-weight: 600

.Text_regular__lCAPC
  font-weight: 400

.GlintCards_card__z7LXk
  background: #16181c
  border-radius: 16px
  flex: 1 1 0
  padding: 24px

.GlintCards_link__Pz2GC
  align-items: center
  color: #e9e9eb
  column-gap: 2px
  cursor: pointer
  display: flex
  font-size: 14px
  font-weight: 400
  line-height: 20px
  row-gap: 2px

.GlintCards_title__54Qp6
  margin-bottom: 2px
  text-transform: uppercase

.GlintCards_glint__NXIUD
  align-items: center
  column-gap: 8px
  display: flex
  font-feature-settings: "tnum"
  font-variant: tabular-nums
  row-gap: 8px

.GlintCards_linksWrapper___Uq6t
  align-items: flex-end
  display: flex
  justify-content: space-between
  margin-top: 24px

.GlintCards_leaderboardLink__FiTnl
  border-radius: 8px
  font-size: 14px
  font-weight: 500
  line-height: 20px

.GlintCards_infoCol__34NOd
  display: flex
  flex-direction: column
  justify-content: space-between

.GlintCards_glintTitleWrapper__dGO3h
  align-items: center
  column-gap: 8px
  display: flex
  row-gap: 8px

@media screen and (max-width: 1024px)
  .GlintCards_card__z7LXk
    padding: 16px

  .GlintCards_title__54Qp6
    font-size: 12px
    line-height: 18px

  .GlintCards_glint__NXIUD
    font-size: 24px
    line-height: 36px

.Button_button__30ukX svg
  flex-shrink: 0

.GlintCards_link__Pz2GC svg
  height: 16px
  width: 16px

.GlintCards_leaderboardLink__FiTnl svg
  height: 16px
  margin-left: 4px
  margin-right: 0
  width: 16px

.Button_iconCurrentColor__5vx1t svg path, .GlintCards_link__Pz2GC svg path
  fill: currentcolor

.Button_button__30ukX:active
  transform: scale(0.95)

.Button_solid__ZczOc.Button_dark__hKxQ0
  background-color: #1e2024
  color: #fff

  &:hover
    background-color: #212429

@media (max-width: 600px)
  .Button_default__Cpmha:has(svg)
    padding: 12px 16px

.GlintCards_leaderboardLink__FiTnl
  padding: 4px 6px 4px 8px !important
</style>
